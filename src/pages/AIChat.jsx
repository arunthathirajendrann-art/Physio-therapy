import React, { useState } from 'react';
import { Mic, Camera, Share2, Download } from'lucide-react';
import ConversationList from '../components/chat/ConversationList';
import ChatWindow from '../components/chat/ChatWindow';
import AIInsightsPanel from '../components/chat/AIInsightsPanel';
import RecoverySummary from '../components/chat/RecoverySummary';
import VoicePanel from '../components/chat/VoicePanel';
import AttachmentPanel from '../components/chat/AttachmentPanel';
import QuickActions from '../components/chat/QuickActions';
import AIExplanationCard from '../components/chat/AIExplanationCard';
import Recommendations from '../components/chat/Recommendations';
import EmptyState from '../components/chat/EmptyState';
import ThemeToggle from '../components/ThemeToggle';

export const AIChat = () => {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [isVoiceRecording, setIsVoiceRecording] = useState(false);
  const [showVoicePanel, setShowVoicePanel] = useState(false);
  const [showAttachments, setShowAttachments] = useState(false);

  const handleConversationSelect = (conversation) => {
    setSelectedConversation(conversation);
  };

  const handleNewConversation = () => {
    setSelectedConversation(null);
  };

  const handleSendMessage = (message) => {
    console.log('Send message:', message);
  };

  const handleVoiceToggle = () => {
    setShowVoicePanel(!showVoicePanel);
  };

  const handleCameraToggle = () => {
    console.log('Camera toggle');
  };

  const handleAttachment = () => {
    setShowAttachments(!showAttachments);
  };

  const handleStartRecording = () => {
    setIsVoiceRecording(true);
  };

  const handleStopRecording = () => {
    setIsVoiceRecording(false);
  };

  const handleUpload = (type) => {
    console.log('Upload:', type);
  };

  const handleRemove = (id) => {
    console.log('Remove attachment:', id);
  };

  const handleQuickAction = (action) => {
    console.log('Quick action:', action);
  };

  return (
    <div className="space-y-4 text-left h-[calc(100vh-8rem)]">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-text-primary">AI Physiotherapy Coach</h1>
          <p className="text-xs text-text-muted mt-1">Your intelligent recovery assistant</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg hover:bg-bg-elevated text-text-muted hover:text-text-primary transition-colors">
            <Mic size={18} />
          </button>
          <button className="p-2 rounded-lg hover:bg-bg-elevated text-text-muted hover:text-text-primary transition-colors">
            <Camera size={18} />
          </button>
          <button className="p-2 rounded-lg hover:bg-bg-elevated text-text-muted hover:text-text-primary transition-colors">
            <Share2 size={18} />
          </button>
          <button className="p-2 rounded-lg hover:bg-bg-elevated text-text-muted hover:text-text-primary transition-colors">
            <Download size={18} />
          </button>
          <ThemeToggle />
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-[calc(100%-4rem)]">
        {/* Left Sidebar - Conversation List */}
        <div className="lg:col-span-3 hidden lg:block">
          <ConversationList
            onConversationSelect={handleConversationSelect}
            onNewConversation={handleNewConversation}
          />
        </div>

        {/* Center - Chat Window */}
        <div className="lg:col-span-6">
          {selectedConversation ? (
            <ChatWindow
              onSendMessage={handleSendMessage}
              onVoiceToggle={handleVoiceToggle}
              onCameraToggle={handleCameraToggle}
              onAttachment={handleAttachment}
            />
          ) : (
            <div className="h-full flex items-center justify-center">
              <EmptyState onStartConversation={() => setSelectedConversation({ id: 1 })} />
            </div>
          )}
        </div>

        {/* Right Sidebar - AI Insights */}
        <div className="lg:col-span-3 space-y-4 hidden lg:block overflow-y-auto">
          <QuickActions
            onStartSession={() => handleQuickAction('start_session')}
            onViewReports={() => handleQuickAction('view_reports')}
            onViewProgress={() => handleQuickAction('view_progress')}
            onContactTherapist={() => handleQuickAction('contact_therapist')}
            onGenerateSummary={() => handleQuickAction('generate_summary')}
          />
          
          <RecoverySummary />
          
          <AIInsightsPanel />
          
          <AIExplanationCard />
          
          <Recommendations />
          
          {showVoicePanel && (
            <VoicePanel
              isRecording={isVoiceRecording}
              onStartRecording={handleStartRecording}
              onStopRecording={handleStopRecording}
            />
          )}
          
          {showAttachments && (
            <AttachmentPanel
              onUpload={handleUpload}
              onRemove={handleRemove}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AIChat;
