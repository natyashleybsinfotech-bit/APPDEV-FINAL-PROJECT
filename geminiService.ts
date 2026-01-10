
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "./types";

const SYSTEM_INSTRUCTION = `
You are EDGE-AI, an expert AI assistant dedicated to promoting gender equality awareness among Filipino students and teachers. 
Your goal is to provide accurate, culturally sensitive, and educational information about gender issues in the Philippines.

Key Guidelines:
1. Use real-world Philippine context (e.g., mention specific laws like RA 9710 or RA 11313).
2. Reference data from the Philippine Statistics Authority (PSA) when discussing education or labor gaps.
3. Address topics like gender stereotyping, the STEM gap, and leadership inequality.
4. Be empathetic, objective, and encouraging.
5. Use clear, accessible language suitable for high school and college students.
6. If asked about controversial topics, provide a balanced educational perspective rooted in human rights.
7. Always encourage users to check official sources for legal matters.
`;

export const sendMessageToGemini = async (history: ChatMessage[], message: string): Promise<string> => {
  /**
   * The API key is obtained exclusively from the environment variable process.env.API_KEY.
   * We instantiate a new GoogleGenAI instance for every request to ensure we are using 
   * the most up-to-date key from the environment/platform selection.
   */
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    // Map conversation history to the SDK's internal format
    const contents = history.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }));

    // Append the latest user query
    contents.push({
      role: 'user',
      parts: [{ text: message }]
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
      },
    });

    /**
     * Correct Method: Access the .text property directly.
     * Do not call text() as a function.
     */
    return response.text || "I'm sorry, I couldn't process that. Please try again.";
  } catch (error: any) {
    console.error("Gemini Service Error:", error);
    
    // Handle "Requested entity was not found" or key errors by alerting the user
    if (error?.message?.includes("not found") || error?.message?.includes("API key")) {
      return "Connection Error: Please ensure you have selected a valid Gemini API key via the setup screen.";
    }
    
    return "I encountered a connection issue. Please check your internet and try again.";
  }
};
