
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

export const AnimatedPrompts = () => {
  const [visiblePrompts, setVisiblePrompts] = useState<Array<{
    id: number;
    text: string;
    x: number;
    y: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPrompt = {
        id: Date.now(),
        text: prompts[Math.floor(Math.random() * prompts.length)],
        x: Math.random() * 75 + 5, // 5% to 80% from left
        y: Math.random() * 75 + 5, // 5% to 80% from top
        delay: 0
      };

      setVisiblePrompts(prev => [...prev, newPrompt]);

      // Remove prompt after animation
      setTimeout(() => {
        setVisiblePrompts(prev => prev.filter(p => p.id !== newPrompt.id));
      }, 5000);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

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
          <Card className="bg-white/85 backdrop-blur-sm shadow-xl border-0 p-4 rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer hover:bg-white/95">
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
