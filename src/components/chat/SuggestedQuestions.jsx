import React from 'react';

export const SuggestedQuestions = ({ questions = [], onQuestionClick }) => {
  const defaultQuestions = [
    "How is my recovery progressing?",
    "What exercise should I do today?",
    "Explain my movement quality",
    "Why did my score decrease?",
    "Show my weekly progress",
  ];

  const questionData = questions.length > 0 ? questions : defaultQuestions;

  return (
    <div className="px-4 py-2 border-t border-border-subtle">
      <div className="flex flex-wrap gap-2">
        {questionData.map((question, index) => (
          <button
            key={index}
            onClick={() => onQuestionClick && onQuestionClick(question)}
            className="px-3 py-1.5 rounded-full bg-bg-deep/50 border border-border-subtle text-xs text-text-secondary hover:border-border-bright hover:text-text-primary transition-all duration-200"
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SuggestedQuestions;
