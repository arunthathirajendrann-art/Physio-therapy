import React, { useState } from 'react';
import { Search, Plus, MessageSquare, Pin, Trash2, Edit2, Clock } from'lucide-react';
import Card, { CardTitle, CardHeader } from '../Card';

export const ConversationList = ({ conversations = [], onConversationSelect, onNewConversation }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const defaultConversations = [
    { id: 1, title: 'Shoulder Pain Discussion', timestamp: 'Today, 2:30 PM', preview: 'My shoulder hurts while raising my arm...', pinned: true },
    { id: 2, title: 'Recovery Progress', timestamp: 'Today, 10:15 AM', preview: 'How is my recovery progressing this week?', pinned: false },
    { id: 3, title: 'Exercise Recommendations', timestamp: 'Yesterday', preview: 'What exercise should I do today?', pinned: false },
    { id: 4, title: 'Movement Quality Analysis', timestamp: 'Yesterday', preview: 'Explain my movement quality score...', pinned: false },
    { id: 5, title: 'Weekly Progress Review', timestamp: 'Last Week', preview: 'Show my weekly progress report...', pinned: false },
    { id: 6, title: 'Pain Level Discussion', timestamp: 'Last Week', preview: 'Why did my pain score decrease?', pinned: false },
  ];

  const conversationData = conversations.length > 0 ? conversations : defaultConversations;

  const filteredConversations = conversationData.filter(conv => 
    conv.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conv.preview.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pinnedConversations = filteredConversations.filter(c => c.pinned);
  const otherConversations = filteredConversations.filter(c => !c.pinned);

  return (
    <Card className="flex flex-col text-left h-full" glow={false}>
      <CardHeader>
        <div className="flex items-center justify-between mb-3">
          <CardTitle className="text-sm font-bold text-text-primary">Conversations</CardTitle>
          <button
            onClick={onNewConversation}
            className="p-1.5 rounded-lg bg-accent-indigo/10 border border-accent-indigo/20 text-accent-indigo hover:bg-accent-indigo/20 transition-colors"
          >
            <Plus size={16} />
          </button>
        </div>
        
        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            placeholder="Search conversations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-bg-surface border border-border-subtle rounded-lg text-xs focus:outline-none focus:border-border-bright text-text-primary placeholder:text-text-muted"
          />
        </div>
      </CardHeader>

      <div className="flex-1 overflow-y-auto space-y-1">
        {/* Pinned Conversations */}
        {pinnedConversations.length > 0 && (
          <div className="px-3 py-2">
            <div className="flex items-center gap-1.5 text-[10px] font-semibold text-text-muted uppercase tracking-wider mb-2">
              <Pin size={10} />
              <span>Pinned</span>
            </div>
            {pinnedConversations.map((conv) => (
              <ConversationItem
                key={conv.id}
                conversation={conv}
                onSelect={() => onConversationSelect && onConversationSelect(conv)}
              />
            ))}
          </div>
        )}

        {/* Other Conversations */}
        {otherConversations.length > 0 && (
          <div className="px-3 py-2">
            <div className="text-[10px] font-semibold text-text-muted uppercase tracking-wider mb-2">
              Recent
            </div>
            {otherConversations.map((conv) => (
              <ConversationItem
                key={conv.id}
                conversation={conv}
                onSelect={() => onConversationSelect && onConversationSelect(conv)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-border-subtle">
        <button className="w-full text-xs text-text-muted hover:text-text-primary transition-colors flex items-center justify-center gap-1.5">
          <MessageSquare size={12} />
          <span>View All Conversations</span>
        </button>
      </div>
    </Card>
  );
};

const ConversationItem = ({ conversation, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className="p-3 rounded-lg hover:bg-bg-elevated/50 cursor-pointer transition-all duration-200 group"
    >
      <div className="flex items-start justify-between mb-1">
        <h4 className="text-xs font-semibold text-text-primary truncate flex-1">{conversation.title}</h4>
        {conversation.pinned && <Pin size={12} className="text-accent-indigo shrink-0 ml-2" />}
      </div>
      <p className="text-[10px] text-text-muted truncate mb-2">{conversation.preview}</p>
      <div className="flex items-center gap-1 text-[9px] text-text-muted">
        <Clock size={8} />
        <span>{conversation.timestamp}</span>
      </div>
      
      {/* Action Buttons */}
      <div className="flex items-center gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="p-1 rounded hover:bg-bg-surface text-text-muted hover:text-text-primary">
          <Edit2 size={10} />
        </button>
        <button className="p-1 rounded hover:bg-bg-surface text-text-muted hover:text-accent-rose">
          <Trash2 size={10} />
        </button>
      </div>
    </div>
  );
};

export default ConversationList;
