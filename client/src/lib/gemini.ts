import { apiRequest } from "./queryClient";

// Message interface for chat history
export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

// Function to generate responses using Gemini via API
export async function generateChatResponse(
  message: string,
  history: ChatMessage[] = []
) {
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({
        message,
        history
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    
    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error("Error generating chat response:", error);
    return "Sorry, I encountered an error. Please try again later.";
  }
}

// Function to generate a diet plan using the API
export async function generateDietPlan(
  goal: string,
  currentWeight: string,
  targetWeight: string,
  restrictions: string,
  preferences: string,
  activityLevel: string,
  language: "english" | "arabic" = "english"
) {
  try {
    const response = await fetch("/api/diet-plan", {
      method: "POST",
      body: JSON.stringify({
        goal,
        currentWeight,
        targetWeight,
        restrictions,
        preferences,
        activityLevel,
        language
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    
    const data = await response.json();
    return data.dietPlan;
  } catch (error) {
    console.error("Error generating diet plan:", error);
    return language === "arabic" 
      ? "عذراً، حدث خطأ أثناء إنشاء خطة النظام الغذائي. يرجى المحاولة مرة أخرى لاحقاً."
      : "Sorry, I encountered an error while creating your diet plan. Please try again later.";
  }
}