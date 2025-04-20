// Function to load environment variables from the server
export async function loadEnvironmentVariables() {
  try {
    const response = await fetch('/api/env');
    if (!response.ok) {
      throw new Error('Failed to load environment variables');
    }
    
    const data = await response.json();
    
    // Set the variables in the window object to make them accessible
    window.ENV = {
      GEMINI_API_KEY: data.VITE_GEMINI_API_KEY || '',
    };
    
    return window.ENV;
  } catch (error) {
    console.error('Error loading environment variables:', error);
    // Provide fallback empty values
    window.ENV = {
      GEMINI_API_KEY: '',
    };
    return window.ENV;
  }
}

// Type definition for the environment variables
declare global {
  interface Window {
    ENV: {
      GEMINI_API_KEY: string;
    };
  }
}

// Function to get the current environment variables
export function getEnv() {
  if (!window.ENV) {
    window.ENV = {
      GEMINI_API_KEY: '',
    };
  }
  
  return window.ENV;
}