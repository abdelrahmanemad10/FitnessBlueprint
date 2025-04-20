import React, { useState, useRef, useEffect } from "react";
import { Send, User, Bot, X, Loader2, Languages, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { generateChatResponse, generateDietPlan, ChatMessage } from "@/lib/gemini";

export function AiChatbot() {
  // State for chat tab
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "مرحبا! I'm the AI Trainer assistant. I can help with fitness questions in English or Arabic. How can I assist you today?",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  // State for diet plan tab
  const [dietPlanInput, setDietPlanInput] = useState({
    goal: "",
    currentWeight: "",
    targetWeight: "",
    restrictions: "",
    preferences: "",
    activityLevel: "",
    language: "english",
  });
  const [dietPlan, setDietPlan] = useState("");
  const [isDietPlanLoading, setIsDietPlanLoading] = useState(false);
  
  // Ref for automatic scrolling
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Function to handle sending a chat message
  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;
    
    // Add user message to chat
    const userMessage = { role: "user" as const, content: inputMessage };
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);
    
    try {
      // Get AI response
      const response = await generateChatResponse(
        inputMessage,
        messages
      );
      
      // Add AI response to chat
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: response },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to handle generating a diet plan
  const handleGenerateDietPlan = async () => {
    const { goal, currentWeight, activityLevel } = dietPlanInput;
    if (!goal || !currentWeight || !activityLevel) {
      setDietPlan("Please fill in the required fields (Goal, Current Weight, and Activity Level).");
      return;
    }
    
    setIsDietPlanLoading(true);
    
    try {
      const plan = await generateDietPlan(
        dietPlanInput.goal,
        dietPlanInput.currentWeight,
        dietPlanInput.targetWeight,
        dietPlanInput.restrictions,
        dietPlanInput.preferences,
        dietPlanInput.activityLevel,
        dietPlanInput.language as "english" | "arabic"
      );
      
      setDietPlan(plan);
    } catch (error) {
      console.error("Error generating diet plan:", error);
      setDietPlan("Sorry, I encountered an error generating your diet plan. Please try again later.");
    } finally {
      setIsDietPlanLoading(false);
    }
  };

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <section id="ai-chatbot" className="py-20 bg-primary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl mb-4">
            AI <span className="text-primary">ASSISTANT</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Get personalized fitness advice and diet plans from our AI assistant. 
            Ask questions in English or Arabic and receive instant expert guidance.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-border bg-card shadow-lg">
            <CardHeader className="border-b border-border">
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-6 w-6 text-primary" />
                <span>AI Trainer Assistant</span>
              </CardTitle>
            </CardHeader>
            
            <Tabs defaultValue="chat" className="w-full">
              <div className="px-4 pt-4">
                <TabsList className="w-full">
                  <TabsTrigger value="chat" className="flex-1">
                    <User className="h-4 w-4 mr-2" /> Chat
                  </TabsTrigger>
                  <TabsTrigger value="diet-plan" className="flex-1">
                    <Coffee className="h-4 w-4 mr-2" /> Diet Plan Generator
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="chat" className="p-0">
                <CardContent className="p-4">
                  <div className="flex flex-col h-[400px]">
                    <div className="flex-1 overflow-y-auto">
                      {messages.map((message, index) => (
                        <div
                          key={index}
                          className={`flex mb-4 ${
                            message.role === "user" ? "justify-end" : "justify-start"
                          }`}
                        >
                          <div
                            className={`max-w-[80%] rounded-lg p-3 ${
                              message.role === "user"
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted"
                            }`}
                          >
                            <div className="flex items-center gap-2 mb-1">
                              {message.role === "user" ? (
                                <>
                                  <span className="font-bold">You</span>
                                  <User className="h-4 w-4" />
                                </>
                              ) : (
                                <>
                                  <Bot className="h-4 w-4 text-primary" />
                                  <span className="font-bold">AI Trainer</span>
                                </>
                              )}
                            </div>
                            <div className="whitespace-pre-wrap">{message.content}</div>
                          </div>
                        </div>
                      ))}
                      <div ref={messagesEndRef} />
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="flex gap-2 p-4 border-t border-border">
                  <Textarea
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type your message here... (English or Arabic)"
                    className="min-h-10 flex-1"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                  />
                  <Button 
                    onClick={handleSendMessage} 
                    disabled={isLoading || !inputMessage.trim()}
                  >
                    {isLoading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </Button>
                </CardFooter>
              </TabsContent>
              
              <TabsContent value="diet-plan" className="p-0">
                <CardContent className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="goal">Goal *</Label>
                          <Select 
                            value={dietPlanInput.goal} 
                            onValueChange={(value) => setDietPlanInput(prev => ({...prev, goal: value}))}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select your goal" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="weight_loss">Weight Loss</SelectItem>
                              <SelectItem value="muscle_gain">Muscle Gain</SelectItem>
                              <SelectItem value="maintenance">Maintenance</SelectItem>
                              <SelectItem value="general_health">General Health</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label htmlFor="currentWeight">Current Weight (kg) *</Label>
                          <Input
                            id="currentWeight"
                            value={dietPlanInput.currentWeight}
                            onChange={(e) => setDietPlanInput(prev => ({...prev, currentWeight: e.target.value}))}
                            placeholder="e.g. 75"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="targetWeight">Target Weight (kg)</Label>
                          <Input
                            id="targetWeight"
                            value={dietPlanInput.targetWeight}
                            onChange={(e) => setDietPlanInput(prev => ({...prev, targetWeight: e.target.value}))}
                            placeholder="e.g. 70"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="restrictions">Dietary Restrictions</Label>
                          <Input
                            id="restrictions"
                            value={dietPlanInput.restrictions}
                            onChange={(e) => setDietPlanInput(prev => ({...prev, restrictions: e.target.value}))}
                            placeholder="e.g. vegetarian, lactose intolerant"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="preferences">Food Preferences</Label>
                          <Input
                            id="preferences"
                            value={dietPlanInput.preferences}
                            onChange={(e) => setDietPlanInput(prev => ({...prev, preferences: e.target.value}))}
                            placeholder="e.g. high protein, low carb"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="activityLevel">Activity Level *</Label>
                          <Select 
                            value={dietPlanInput.activityLevel} 
                            onValueChange={(value) => setDietPlanInput(prev => ({...prev, activityLevel: value}))}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select your activity level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="sedentary">Sedentary (little or no exercise)</SelectItem>
                              <SelectItem value="light">Light (1-3 days/week)</SelectItem>
                              <SelectItem value="moderate">Moderate (3-5 days/week)</SelectItem>
                              <SelectItem value="active">Active (6-7 days/week)</SelectItem>
                              <SelectItem value="very_active">Very Active (twice daily)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label htmlFor="language">Language</Label>
                          <Select 
                            value={dietPlanInput.language} 
                            onValueChange={(value) => setDietPlanInput(prev => ({...prev, language: value}))}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select language" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="english">English</SelectItem>
                              <SelectItem value="arabic">Arabic</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <Button 
                          onClick={handleGenerateDietPlan} 
                          disabled={isDietPlanLoading}
                          className="w-full"
                        >
                          {isDietPlanLoading ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin mr-2" />
                              Generating...
                            </>
                          ) : (
                            <>
                              Generate Diet Plan
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4 h-[400px] overflow-y-auto bg-muted/30">
                      {isDietPlanLoading ? (
                        <div className="flex items-center justify-center h-full">
                          <Loader2 className="h-8 w-8 animate-spin text-primary" />
                          <span className="ml-2">Generating your personalized diet plan...</span>
                        </div>
                      ) : dietPlan ? (
                        <div className="prose prose-sm max-w-none">
                          <div className="whitespace-pre-wrap">{dietPlan}</div>
                        </div>
                      ) : (
                        <div className="text-center text-muted-foreground h-full flex flex-col items-center justify-center">
                          <Coffee className="h-16 w-16 mb-4 text-primary/60" />
                          <p>Fill in the form and generate your personalized diet plan.</p>
                          <p className="text-xs mt-2">Required fields are marked with *</p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </section>
  );
}