import React from 'react';
import { Sparkles, MessageSquare, TrendingUp, FileText, Activity } from'lucide-react';

export const EmptyState = ({ onStartConversation }) => {
  const features = [
    { icon: MessageSquare, title: 'Understand Recovery', description: 'Get personalized insights about your recovery progress' },
    { icon: Activity, title: 'Exercise Guidance', description: 'Receive AI-powered exercise recommendations' },
    { icon: TrendingUp, title: 'Track Progress', description: 'Monitor your improvement over time' },
    { icon: FileText, title: 'Generate Reports', description: 'Create detailed recovery summaries' },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8">
      {/* Avatar */}
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent-indigo/20 to-accent-emerald/20 border border-accent-indigo/30 flex items-center justify-center mb-6">
        <span className="text-4xl">🤖</span>
      </div>

      {/* Greeting */}
      <h2 className="text-2xl font-bold text-text-primary mb-2">
        Hello Alex 👋
      </h2>
      <p className="text-sm text-text-secondary mb-8 max-w-md">
        I'm your AI Physiotherapy Coach. I can help you understand your recovery, recommend exercises, answer physiotherapy questions, and summarize your progress.
      </p>

      {/* Feature Cards */}
      <div className="grid grid-cols-2 gap-4 mb-8 max-w-lg">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="p-4 rounded-xl bg-bg-deep/50 border border-border-subtle hover:border-border-bright transition-all duration-200 text-left"
            >
              <div className="p-2 rounded-lg bg-accent-indigo/10 border border-accent-indigo/20 text-accent-indigo mb-3">
                <Icon size={20} />
              </div>
              <h3 className="text-xs font-semibold text-text-primary mb-1">{feature.title}</h3>
              <p className="text-[10px] text-text-muted leading-relaxed">{feature.description}</p>
            </div>
          );
        })}
      </div>

      {/* Start Button */}
      <button
        onClick={onStartConversation}
        className="px-6 py-3 rounded-xl bg-accent-indigo hover:bg-accent-indigo/90 text-white font-medium text-sm transition-colors flex items-center gap-2"
      >
        <Sparkles size={16} />
        <span>Start Conversation</span>
      </button>

      {/* Footer */}
      <div className="mt-6 text-[10px] text-text-muted">
        Powered by AI • Your data is secure and private
      </div>
    </div>
  );
};

export default EmptyState;
