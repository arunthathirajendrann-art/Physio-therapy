import React from 'react';
import { Copy, ThumbsUp, ThumbsDown, Bookmark, RotateCcw, Clock, Bot, User } from'lucide-react';

export const MessageBubble = ({ 
  message, 
  isAI = false, 
  onCopy, 
  onRegenerate, 
  onLike, 
  onDislike, 
  onBookmark 
}) => {
  const [showActions, setShowActions] = React.useState(false);

  return (
    <div
      className={`flex gap-3 mb-4 ${isAI ? 'justify-start' : 'justify-end'}`}
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      {/* Avatar */}
      <div className={`shrink-0 ${isAI ? 'order-1' : 'order-2'}`}>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
          isAI 
            ? 'bg-accent-indigo/10 border border-accent-indigo/20 text-accent-indigo' 
            : 'bg-accent-emerald/10 border border-accent-emerald/20 text-accent-emerald'
        }`}>
          {isAI ? <Bot size={16} /> : <User size={16} />}
        </div>
      </div>

      {/* Message Content */}
      <div className={`flex-1 max-w-[70%] ${isAI ? 'order-2' : 'order-1'}`}>
        <div
          className={`p-4 rounded-2xl ${
            isAI
              ? 'bg-bg-deep/50 border border-border-subtle'
              : 'bg-accent-indigo/10 border border-accent-indigo/20'
          }`}
        >
          <p className="text-sm text-text-primary leading-relaxed">{message.content}</p>
          
          {/* Timestamp */}
          <div className="flex items-center gap-1 mt-2 text-[10px] text-text-muted">
            <Clock size={10} />
            <span>{message.timestamp}</span>
          </div>
        </div>

        {/* Action Buttons */}
        {showActions && (
          <div className={`flex items-center gap-2 mt-2 ${isAI ? 'justify-start' : 'justify-end'}`}>
            <button
              onClick={() => onCopy && onCopy(message)}
              className="p-1.5 rounded-lg hover:bg-bg-elevated text-text-muted hover:text-text-primary transition-colors"
              title="Copy"
            >
              <Copy size={12} />
            </button>
            
            {isAI && (
              <>
                <button
                  onClick={() => onRegenerate && onRegenerate(message)}
                  className="p-1.5 rounded-lg hover:bg-bg-elevated text-text-muted hover:text-text-primary transition-colors"
                  title="Regenerate"
                >
                  <RotateCcw size={12} />
                </button>
                <button
                  onClick={() => onLike && onLike(message)}
                  className="p-1.5 rounded-lg hover:bg-bg-elevated text-text-muted hover:text-accent-emerald transition-colors"
                  title="Like"
                >
                  <ThumbsUp size={12} />
                </button>
                <button
                  onClick={() => onDislike && onDislike(message)}
                  className="p-1.5 rounded-lg hover:bg-bg-elevated text-text-muted hover:text-accent-rose transition-colors"
                  title="Dislike"
                >
                  <ThumbsDown size={12} />
                </button>
              </>
            )}
            
            <button
              onClick={() => onBookmark && onBookmark(message)}
              className="p-1.5 rounded-lg hover:bg-bg-elevated text-text-muted hover:text-accent-indigo transition-colors"
              title="Bookmark"
            >
              <Bookmark size={12} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;
