import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, Camera, Paperclip, Sparkles } from'lucide-react';
import Card from '../Card';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';
import SuggestedQuestions from './SuggestedQuestions';

export const ChatWindow = ({ 
  messages = [], 
  onSendMessage, 
  onVoiceToggle, 
  onCameraToggle, 
  onAttachment 
}) => {
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const defaultMessages = [
    { id: 1, content: "My shoulder hurts while raising my arm. What should I do?", timestamp: '2:30 PM', isAI: false },
    { id: 2, content: "I noticed reduced shoulder mobility during your previous sessions. Based on your movement quality data, your shoulder angle has improved by approximately 8° compared to last week. Continue with wall-slide exercises and reduce movement speed slightly to maintain better form.", timestamp: '2:31 PM', isAI: true },
    { id: 3, content: "How long should I hold each position?", timestamp: '2:32 PM', isAI: false },
    { id: 4, content: "For wall-slide exercises, I recommend holding each position for 3-5 seconds. This allows your muscles to engage properly without causing fatigue. Start with 3 seconds and gradually increase to 5 seconds as your strength improves.", timestamp: '2:33 PM', isAI: true },
  ];

  const messageData = messages.length > 0 ? messages : defaultMessages;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messageData, isTyping]);

  const handleSend = () => {
    if (inputValue.trim()) {
      if (onSendMessage) onSendMessage(inputValue);
      setInputValue('');
      setIsTyping(true);
      setTimeout(() => setIsTyping(false), 2000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const suggestedQuestions = [
    "How is my recovery progressing?",
    "What exercise should I do today?",
    "Explain my movement quality",
    "Why did my score decrease?",
    "Show my weekly progress",
  ];

  const handleQuestionClick = (question) => {
    setInputValue(question);
  };

  return (
    <Card className="flex flex-col h-full" glow={false}>
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messageData.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
            isAI={message.isAI}
            onCopy={() => console.log('Copy message')}
            onRegenerate={() => console.log('Regenerate')}
            onLike={() => console.log('Like')}
            onDislike={() => console.log('Dislike')}
            onBookmark={() => console.log('Bookmark')}
          />
        ))}
        
        {isTyping && <TypingIndicator />}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Questions */}
      <SuggestedQuestions 
        questions={suggestedQuestions} 
        onQuestionClick={handleQuestionClick} 
      />

      {/* Input Area */}
      <div className="p-4 border-t border-border-subtle">
        <div className="flex items-end gap-3">
          {/* Attachment Button */}
          <button
            onClick={onAttachment}
            className="p-2 rounded-lg hover:bg-bg-elevated text-text-muted hover:text-text-primary transition-colors"
          >
            <Paperclip size={20} />
          </button>

          {/* Voice Button */}
          <button
            onClick={onVoiceToggle}
            className="p-2 rounded-lg hover:bg-bg-elevated text-text-muted hover:text-text-primary transition-colors"
          >
            <Mic size={20} />
          </button>

          {/* Camera Button */}
          <button
            onClick={onCameraToggle}
            className="p-2 rounded-lg hover:bg-bg-elevated text-text-muted hover:text-text-primary transition-colors"
          >
            <Camera size={20} />
          </button>

          {/* Input Field */}
          <div className="flex-1 relative">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything about your recovery..."
              rows={1}
              className="w-full px-4 py-3 bg-bg-surface border border-border-subtle rounded-xl text-sm focus:outline-none focus:border-border-bright text-text-primary placeholder:text-text-muted resize-none"
              style={{ minHeight: '48px', maxHeight: '120px' }}
            />
          </div>

          {/* Send Button */}
          <button
            onClick={handleSend}
            disabled={!inputValue.trim()}
            className="p-3 rounded-xl bg-accent-indigo hover:bg-accent-indigo/90 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send size={20} />
          </button>
        </div>

        {/* AI Badge */}
        <div className="flex items-center justify-center gap-1.5 mt-2 text-[10px] text-text-muted">
          <Sparkles size={10} className="text-accent-indigo" />
          <span>Powered by AI</span>
        </div>
      </div>
    </Card>
  );
};

export default ChatWindow;
