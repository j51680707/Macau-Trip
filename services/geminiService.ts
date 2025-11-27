import { GoogleGenAI } from "@google/genai";
import { WeatherData } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getRealtimeWeather = async (location: string): Promise<WeatherData> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `What is the current weather temperature (in Celsius) and condition in ${location} right now? Keep it extremely brief.`,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text || "";
    // Robust parsing attempt, fallback to a mock if AI returns unexpected structure
    // We expect something like "25°C, Cloudy" from the search summary usually.
    
    // Check if we have grounding chunks to confirm valid source
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    
    if (chunks && chunks.length > 0) {
        // Simple extraction heuristic for the demo
        return {
            temp: text.match(/(\d+)[°C]/)?.[0] || "28°C",
            condition: text.split(',')[1]?.trim() || "Partly Cloudy",
            location: location
        };
    }

    // Fallback if search fails or format is weird
    return {
        temp: "26°C",
        condition: "Sunny",
        location: location
    };

  } catch (error) {
    console.error("Gemini Weather Error:", error);
    return {
      temp: "--",
      condition: "Loading...",
      location: location
    };
  }
};

export const getSmartTravelTips = async (): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: "Give me 5 essential, short bullet points for Taiwanese tourists visiting Macau today. Focus on safety or fun facts.",
        config: {
            systemInstruction: "You are a helpful travel assistant. Keep responses under 50 words per point.",
        }
    });
    return response.text || "";
  } catch (error) {
    console.error("Gemini Tips Error:", error);
    return "Remember to bring your passport and universal adapter!";
  }
};