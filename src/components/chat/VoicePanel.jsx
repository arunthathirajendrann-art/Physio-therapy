import React, { useState } from 'react';
import { Mic, Square } from 'lucide-react';
import Card, { CardTitle, CardHeader } from '../Card';

export const VoicePanel = ({ isRecording = false, onStartRecording, onStopRecording }) => {
  const [waveformBars, setWaveformBars] = useState(Array(20).fill(0));

  React.useEffect(() => {
    if (isRecording) {
      const interval = setInterval(() => {
        setWaveformBars(prev => 
          prev.map(() => Math.random() * 100)
        );
      }, 100);
      return () => clearInterval(interval);
    } else {
      setWaveformBars(Array(20).fill(0));
    }
  }, [isRecording]);

  return (
    <Card className="flex flex-col text-left" glow glowColor="rose">
      <CardHeader>
        <CardTitle className="text-sm font-bold text-text-primary flex items-center gap-2">
          <Mic size={16} className="text-accent-rose" />
          Voice Input
        </CardTitle>
      </CardHeader>

      <div className="flex-1 flex flex-col items-center justify-center space-y-4">
        {/* Waveform Animation */}
        <div className="flex items-center gap-1 h-16">
          {waveformBars.map((height, index) => (
            <div
              key={index}
              className="w-1 bg-accent-rose rounded-full transition-all duration-100"
              style={{ 
                height: isRecording ? `${Math.max(4, height)}%` : '4px',
                opacity: isRecording ? 1 : 0.3
              }}
            />
          ))}
        </div>

        {/* Recording Status */}
        <div className="text-center">
          <div className={`text-sm font-semibold ${isRecording ? 'text-accent-rose' : 'text-text-muted'}`}>
            {isRecording ? 'Listening...' : 'Ready to Record'}
          </div>
          <div className="text-xs text-text-muted mt-1">
            {isRecording ? 'Speak clearly' : 'Tap to start'}
          </div>
        </div>

        {/* Record Button */}
        <button
          onClick={isRecording ? onStopRecording : onStartRecording}
          className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
            isRecording 
              ? 'bg-accent-rose hover:bg-accent-rose/90 text-white' 
              : 'bg-accent-indigo hover:bg-accent-indigo/90 text-white'
          }`}
        >
          {isRecording ? <Square size={24} /> : <Mic size={24} />}
        </button>

        {/* Voice Status */}
        <div className="text-xs text-text-muted text-center">
          {isRecording ? 'Recording in progress' : 'Voice recognition ready'}
        </div>
      </div>
    </Card>
  );
};

export default VoicePanel;
