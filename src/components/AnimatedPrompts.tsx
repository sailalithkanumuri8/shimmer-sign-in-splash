
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

const prompts = [
  "Make a social media dashboard",
  "Build a modern e-commerce site",
  "Create a beautiful portfolio",
  "Design a task management app",
  "Build a weather application",
  "Make a music streaming platform",
  "Create a fitness tracking app",
  "Design a recipe sharing site",
  "Build a photo gallery app",
  "Make a travel booking platform",
  "Create a chat application",
  "Design a blog platform",
  "Build a calendar app",
  "Make a productivity suite",
  "Create a learning platform",
  "Design a marketplace",
  "Build a news aggregator",
  "Make a video streaming app",
  "Create a booking system",
  "Design a social network"
];

interface PromptPosition {
  id: number;
  text: string;
  x: number;
  y: number;
  delay: number;
  width: number;
  height: number;
}

const checkCollision = (newPrompt: PromptPosition, existingPrompts: PromptPosition[]): boolean => {
  return existingPrompts.some(existing => {
    const buffer = 20; // Add some buffer space between prompts
    return (
      newPrompt.x < existing.x + existing.width + buffer &&
      newPrompt.x + newPrompt.width + buffer > existing.x &&
      newPrompt.y < existing.y + existing.height + buffer &&
      newPrompt.y + newPrompt.height + buffer > existing.y
    );
  });
};

const generateNonOverlappingPosition = (existingPrompts: PromptPosition[], text: string): { x: number; y: number } => {
  const estimatedWidth = Math.min(text.length * 8 + 32, 300); // Rough estimation
  const estimatedHeight = 60; // Rough estimation
  
  let attempts = 0;
  const maxAttempts = 50;
  
  while (attempts < maxAttempts) {
    const x = Math.random() * (75 - (estimatedWidth / window.innerWidth * 100)) + 5;
    const y = Math.random() * (75 - (estimatedHeight / window.innerHeight * 100)) + 5;
    
    const newPrompt: PromptPosition = {
      id: 0,
      text,
      x,
      y,
      delay: 0,
      width: estimatedWidth,
      height: estimatedHeight
    };
    
    if (!checkCollision(newPrompt, existingPrompts)) {
      return { x, y };
    }
    
    attempts++;
  }
  
  // Fallback: if we can't find a non-overlapping position, use a random one
  return {
    x: Math.random() * 75 + 5,
    y: Math.random() * 75 + 5
  };
};

export const AnimatedPrompts = () => {
  const [visiblePrompts, setVisiblePrompts] = useState<PromptPosition[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const promptText = prompts[Math.floor(Math.random() * prompts.length)];
      const position = generateNonOverlappingPosition(visiblePrompts, promptText);
      
      const newPrompt: PromptPosition = {
        id: Date.now(),
        text: promptText,
        x: position.x,
        y: position.y,
        delay: 0,
        width: Math.min(promptText.length * 8 + 32, 300),
        height: 60
      };

      setVisiblePrompts(prev => [...prev, newPrompt]);

      // Remove prompt after animation
      setTimeout(() => {
        setVisiblePrompts(prev => prev.filter(p => p.id !== newPrompt.id));
      }, 5000);
    }, 2000); // Increased interval to reduce crowding

    return () => clearInterval(interval);
  }, [visiblePrompts]);

  return (
    <div className="relative w-full h-full flex items-center justify-center p-8">
      {/* Floating Example Prompts */}
      {visiblePrompts.map((prompt) => (
        <div
          key={prompt.id}
          className="absolute animate-bounce-slow opacity-0 animate-fade-in"
          style={{
            left: `${prompt.x}%`,
            top: `${prompt.y}%`,
            animationDelay: `${prompt.delay}ms`,
            animationDuration: '5s',
            animationFillMode: 'forwards'
          }}
        >
          <Card className="bg-white/85 backdrop-blur-sm shadow-xl border-0 p-4 rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer hover:bg-white/95 max-w-xs">
            <p className="text-sm text-gray-700 whitespace-nowrap font-medium">
              "{prompt.text}"
            </p>
          </Card>
        </div>
      ))}

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white/40 rounded-full animate-ping" />
      <div className="absolute top-3/4 right-1/4 w-4 h-4 bg-white/30 rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-white/50 rounded-full animate-bounce" />
      <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-white/60 rounded-full animate-ping" />
      <div className="absolute bottom-1/3 right-1/2 w-3 h-3 bg-white/35 rounded-full animate-pulse" />
    </div>
  );
};
