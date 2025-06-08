
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

const prompts = [
  "Build a modern dashboard with charts",
  "Create a beautiful landing page",
  "Design a task management app",
  "Make a social media feed",
  "Build an e-commerce store",
  "Create a weather app",
  "Design a portfolio website",
  "Make a chat application",
  "Build a blog platform",
  "Create a music player"
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
        x: Math.random() * 70 + 10, // 10% to 80% from left
        y: Math.random() * 70 + 10, // 10% to 80% from top
        delay: 0
      };

      setVisiblePrompts(prev => [...prev, newPrompt]);

      // Remove prompt after animation
      setTimeout(() => {
        setVisiblePrompts(prev => prev.filter(p => p.id !== newPrompt.id));
      }, 4000);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center p-8">
      {/* Central Prompt Input */}
      <div className="relative z-10 max-w-md w-full">
        <Card className="bg-white/90 backdrop-blur-md shadow-2xl border-0 p-6 rounded-2xl animate-fade-in">
          <div className="flex items-center space-x-3">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Ask Lovable to build your landing page"
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                readOnly
              />
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-3 rounded-full hover:scale-110 transition-transform duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </Card>
      </div>

      {/* Floating Example Prompts */}
      {visiblePrompts.map((prompt) => (
        <div
          key={prompt.id}
          className="absolute animate-bounce-slow opacity-0 animate-fade-in"
          style={{
            left: `${prompt.x}%`,
            top: `${prompt.y}%`,
            animationDelay: `${prompt.delay}ms`,
            animationDuration: '4s',
            animationFillMode: 'forwards'
          }}
        >
          <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0 p-3 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
            <p className="text-sm text-gray-700 whitespace-nowrap">
              "{prompt.text}"
            </p>
          </Card>
        </div>
      ))}

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/50 rounded-full animate-ping" />
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-white/40 rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white/60 rounded-full animate-bounce" />
    </div>
  );
};
