import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { exercises } from "./exercises";

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

  const httpServer = createServer(app);

  return httpServer;
}
