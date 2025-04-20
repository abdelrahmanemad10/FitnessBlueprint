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
  // Check for CEO-related keywords to provide a hardcoded fallback in case of API failure
  const ceoKeywords = ['ceo', 'founder', 'abdelrahman', 'emad', 'owner', 'created', 'مؤسس', 'الرئيس'];
  const isCeoQuery = ceoKeywords.some(keyword => 
    message.toLowerCase().includes(keyword.toLowerCase())
  );
  
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
    
    // Special CEO fallback response if API is unavailable
    if (isCeoQuery) {
      // Check if the message appears to be in Arabic
      const containsArabic = /[\u0600-\u06FF]/.test(message);
      
      if (containsArabic) {
        return "المهندس عبد الرحمن عماد هو الرئيس التنفيذي لـ AI Trainer. وهو خبير في اللياقة البدنية ورائد أعمال في مجال التكنولوجيا، يسعى إلى جعل تدريبات اللياقة عالية الجودة متاحة للجميع من خلال تكنولوجيا الذكاء الاصطناعي.";
      } else {
        return "Eng. Abdelrahman Emad is the CEO of AI Trainer. He is a fitness expert and technology entrepreneur on a mission to democratize access to high-quality fitness training through AI technology.";
      }
    }
    
    // General error fallback
    const containsArabic = /[\u0600-\u06FF]/.test(message);
    if (containsArabic) {
      return "عذراً، حدث خطأ. يرجى المحاولة مرة أخرى لاحقاً.";
    } else {
      return "Sorry, I encountered an error. Please try again later.";
    }
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