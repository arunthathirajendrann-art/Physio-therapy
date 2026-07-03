import React from 'react';
import { Pause, SkipForward, Flag, MessageSquare } from 'lucide-react';
import Button from '../Button';

export const EmergencyControls = ({
  onPause,
  onSkip,
  onFinish,
  onContactTherapist
}) => {
  return (
    <div className="space-y-3">
      <div className="text-[10px] font-semibold text-text-muted uppercase tracking-wider mb-3">
        Session Controls
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Button
          variant="secondary"
          size="md"
          onClick={onPause}
          className="gap-2 justify-center"
        >
          <Pause size={16} />
          <span>Pause Session</span>
        </Button>

        <Button
          variant="secondary"
          size="md"
          onClick={onSkip}
          className="gap-2 justify-center"
        >
          <SkipForward size={16} />
          <span>Skip Exercise</span>
        </Button>

        <Button
          variant="danger"
          size="md"
          onClick={onFinish}
          className="gap-2 justify-center col-span-2"
        >
          <Flag size={16} />
          <span>Finish Session</span>
        </Button>
      </div>

      <div className="pt-3 border-t border-border-subtle">
        <Button
          variant="ghost"
          size="sm"
          onClick={onContactTherapist}
          className="w-full gap-2 justify-center text-text-secondary hover:text-text-primary"
        >
          <MessageSquare size={14} />
          <span>Contact Therapist</span>
        </Button>
      </div>

      <div className="text-[9px] text-text-muted text-center leading-relaxed">
        Emergency controls are available at any time during your session.
      </div>
    </div>
  );
};

export default EmergencyControls;
