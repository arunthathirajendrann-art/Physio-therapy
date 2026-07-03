import React, { useState, useEffect } from 'react';
import { Sparkles, MessageSquare } from 'lucide-react';
import Card, { CardTitle } from '../Card';

export const AICoachPanel = ({ messages = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const defaultMessages = [
    { id: 1, text: "Excellent posture. Keep your shoulders relaxed.", type: "positive" },
    { id: 2, text: "Raise your arm slightly higher for better range.", type: "instruction" },
    { id: 3, text: "Great form! Your alignment is improving.", type: "positive" },
    { id: 4, text: "Slow down slightly - control is key.", type: "instruction" },
    { id: 5, text: "Perfect! You're hitting the target angle.", type: "positive" },
    { id: 6, text: "Engage your core for better stability.", type: "instruction" },
    { id: 7, text: "Outstanding progress on this set!", type: "positive" },
    { id: 8, text: "Breathe steadily throughout the movement.", type: "instruction" },
  ];

  const coachMessages = messages.length > 0 ? messages : defaultMessages;

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % coachMessages.length);
        setIsVisible(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [coachMessages.length]);

  const currentMessage = coachMessages[currentIndex];
  const getMessageColor = (type) => {
    return type === 'positive' 
      ? 'text-accent-emerald bg-accent-emerald/10 border-accent-emerald/20'
      : 'text-accent-indigo bg-accent-indigo/10 border-accent-indigo/20';
  };

  return (
    <Card className="flex flex-col text-left" glow glowColor="indigo">
      {/* Header */}
      <div className="pb-3 border-b border-border-subtle mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-accent-indigo/10 border border-accent-indigo/20 text-accent-indigo">
            <Sparkles size={14} className="animate-pulse" />
          </div>
          <CardTitle className="text-sm font-bold text-text-primary">AI Coach</CardTitle>
        </div>
        <div className="flex items-center gap-1">
          {coachMessages.map((_, idx) => (
            <div
              key={idx}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-accent-indigo' : 'bg-border-subtle'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Message Display */}
      <div className="flex-1 flex items-center justify-center min-h-[120px]">
        <div
          className={`transition-all duration-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <div className={`p-4 rounded-xl border ${getMessageColor(currentMessage.type)} backdrop-blur-sm`}>
            <div className="flex items-start gap-3">
              <MessageSquare size={18} className={currentMessage.type === 'positive' ? 'text-accent-emerald' : 'text-accent-indigo'} />
              <p className="text-sm font-medium text-text-primary leading-relaxed">
                {currentMessage.text}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-border-subtle">
        <div className="flex items-center justify-between text-[10px] text-text-muted">
          <span>Real-time form analysis</span>
          <span className="font-mono">Active</span>
        </div>
      </div>
    </Card>
  );
};

export default AICoachPanel;
