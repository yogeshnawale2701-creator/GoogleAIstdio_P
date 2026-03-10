import { GoogleGenAI, ThinkingLevel, Type, Modality } from "@google/genai";

export const getAI = () => {
  const key = process.env.API_KEY || process.env.GEMINI_API_KEY;
  if (!key) {
    throw new Error("API Key is not set. Please select an API key in the settings.");
  }
  return new GoogleGenAI({ apiKey: key });
};

export async function chatWithGemini(message: string, history: { role: string; parts: { text: string }[] }[] = []) {
  const ai = getAI();
  const chat = ai.chats.create({
    model: "gemini-3.1-pro-preview",
    config: {
      systemInstruction: `You are the AI assistant for Yogesh Vishnu Nawale's portfolio. 
      Yogesh is a Java Backend and AI Systems Engineer.
      Expertise: Java, Spring Boot, Spring AI, RAG systems, LLMs, Vector Databases, DevOps (Kubernetes, Jenkins), Microservices, Java Virtual Threads (Project Loom).
      Tone: Professional, futuristic, helpful, and concise.
      If asked about contact info: Email is ynawale26@gmail.com.
      Use your thinking capabilities for complex technical questions.`,
      thinkingConfig: { thinkingLevel: ThinkingLevel.HIGH }
    },
    history: history as any,
  });

  const response = await chat.sendMessage({ message });
  return response.text;
}

export async function generateImage(prompt: string, size: "1K" | "2K" | "4K" = "1K") {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: "gemini-3-pro-image-preview",
    contents: { parts: [{ text: prompt }] },
    config: {
      imageConfig: {
        aspectRatio: "1:1",
        imageSize: size,
      },
    },
  });

  for (const part of response.candidates?.[0]?.content.parts || []) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  return null;
}

export async function generateVideoFromImage(imageBuffer: string, prompt: string) {
  const ai = getAI();
  // Remove data:image/png;base64, prefix if present
  const base64Data = imageBuffer.split(',')[1] || imageBuffer;
  
  let operation = await ai.models.generateVideos({
    model: 'veo-3.1-fast-generate-preview',
    prompt: prompt,
    image: {
      imageBytes: base64Data,
      mimeType: 'image/png',
    },
    config: {
      numberOfVideos: 1,
      resolution: '720p',
      aspectRatio: '16:9'
    }
  });

  while (!operation.done) {
    await new Promise(resolve => setTimeout(resolve, 5000));
    operation = await ai.operations.getVideosOperation({ operation: operation });
  }

  const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
  if (!downloadLink) return null;

  const key = process.env.API_KEY || process.env.GEMINI_API_KEY;
  const response = await fetch(downloadLink, {
    method: 'GET',
    headers: {
      'x-goog-api-key': key!,
    },
  });
  
  const blob = await response.blob();
  return URL.createObjectURL(blob);
}
