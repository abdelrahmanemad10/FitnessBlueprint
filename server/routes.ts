import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { exercises } from "./exercises";
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

// Initialize the Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

// Safety settings for the model
const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

// CEO information
const ceoInfo = `
Name: Eng. Abdelrahman Emad
Position: CEO of AI Trainer
Background: Fitness expert and technology entrepreneur
Mission: Democratizing access to high-quality fitness training through AI technology
Philosophy: Believes in combining cutting-edge AI with proven fitness methodologies
Education: Engineering degree with specialization in AI and machine learning
`;

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.get("/api/exercises", (req, res) => {
    res.json(exercises);
  });
  
  app.get("/api/exercises/:type", (req, res) => {
    const type = req.params.type;
    const exercisesByType = exercises.filter(exercise => exercise.type === type);
    
    if (exercisesByType.length === 0) {
      return res.status(404).json({ message: `No exercises found for type: ${type}` });
    }
    
    res.json(exercisesByType);
  });
  
  app.post("/api/contact", (req, res) => {
    try {
      const { name, email } = req.body;
      
      if (!name || !email) {
        return res.status(400).json({ message: "Name and email are required" });
      }
      
      // Just return success for now as we don't have email functionality
      res.status(200).json({ 
        success: true, 
        message: "Form submitted successfully" 
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      res.status(500).json({ message: "Failed to submit form" });
    }
  });

  // System prompt that guides the AI's behavior
  const systemPrompt = `
  You are AI Trainer's fitness assistant, developed by CEO Eng. Abdelrahman Emad. You specialize in:
  1. Creating personalized diet plans based on user goals, current weight, and preferences
  2. Answering fitness and nutrition questions accurately
  3. Providing workout advice and techniques
  4. Responding in both English and Arabic languages based on the user's preference

  When creating diet plans, ask about:
  - User's fitness goals (weight loss, muscle gain, maintenance)
  - Current weight and target weight
  - Any dietary restrictions or allergies
  - Food preferences
  - Daily activity level

  About AI Trainer:
  ${ceoInfo}

  Important rules:
  - If the user speaks in Arabic, respond in Arabic
  - If the user speaks in English, respond in English
  - Provide evidence-based fitness and nutrition advice
  - Always clarify you are an AI assistant and not a certified nutritionist or doctor
  - Recommend consulting with healthcare professionals for serious health concerns
  `;

  // API endpoint for chat messages
  app.post("/api/chat", async (req: Request, res: Response) => {
    try {
      const { message, history = [] } = req.body;
      
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      // Get the Gemini Pro model
      const model = genAI.getGenerativeModel({
        model: "gemini-pro",
        safetySettings,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 1000,
        },
      });

      // Start a chat session
      const chat = model.startChat();
      
      // Add chat history if available
      for (const msg of history) {
        await chat.sendMessage(msg.content);
      }

      // Add the system prompt to guide the AI's behavior
      const enhancedPrompt = `${systemPrompt}\n\nUser message: ${message}`;

      // Send the message and get the response
      const result = await chat.sendMessage(enhancedPrompt);
      const response = result.response.text();
      
      res.json({ response });
    } catch (error) {
      console.error("Error in chat API:", error);
      res.status(500).json({ 
        error: "Failed to generate response", 
        details: error instanceof Error ? error.message : String(error) 
      });
    }
  });

  // API endpoint for diet plan generation
  app.post("/api/diet-plan", async (req: Request, res: Response) => {
    try {
      const { 
        goal, 
        currentWeight, 
        targetWeight, 
        restrictions, 
        preferences, 
        activityLevel,
        language = "english"
      } = req.body;
      
      // Validate required fields
      if (!goal || !currentWeight || !activityLevel) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      // Get the Gemini Pro model
      const model = genAI.getGenerativeModel({
        model: "gemini-pro",
        safetySettings,
      });

      // Create a detailed prompt for diet plan generation
      const dietPlanPrompt = `
      Create a detailed 7-day diet plan for someone with the following profile:
      - Fitness goal: ${goal}
      - Current weight: ${currentWeight}
      - Target weight: ${targetWeight || "Not specified"}
      - Dietary restrictions: ${restrictions || "None"}
      - Food preferences: ${preferences || "Not specified"}
      - Activity level: ${activityLevel}

      The diet plan should include:
      1. Daily calorie target
      2. Macronutrient breakdown (protein, carbs, fats)
      3. Meal plan for each day of the week (breakfast, lunch, dinner, snacks)
      4. Portion sizes
      5. Hydration recommendations
      6. Supplement suggestions if appropriate

      The plan should be realistic, sustainable, and scientifically sound.
      Include a brief explanation of why this plan suits their goals.
      
      ${language === "arabic" ? "Respond in Arabic language." : "Respond in English language."}
      
      Format the response in a clear, organized way with headings and bullet points.
      `;

      // Generate the diet plan
      const result = await model.generateContent(dietPlanPrompt);
      const response = result.response.text();
      
      res.json({ dietPlan: response });
    } catch (error) {
      console.error("Error in diet plan API:", error);
      res.status(500).json({ 
        error: "Failed to generate diet plan", 
        details: error instanceof Error ? error.message : String(error) 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
