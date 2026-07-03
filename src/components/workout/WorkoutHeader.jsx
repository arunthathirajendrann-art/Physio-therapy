import React from 'react';
import { Pause, RotateCcw, Flag, Clock, Target } from 'lucide-react';
import Button from '../Button';

export const WorkoutHeader = ({
  exerciseName = 'Shoulder Abduction',
  targetMuscle = 'Deltoids',
  difficulty = 'Medium',
  duration = '8:00',
  currentSet = 2,
  totalSets = 3,
  currentRep = 8,
  totalReps = 12,
  onPause,
  onRestart,
  onFinish
}) => {
  const getDifficultyColor = (diff) => {
    switch (diff) {
      case 'Easy': return 'text-accent-emerald bg-accent-emerald/10 border-accent-emerald/20';
      case 'Medium': return 'text-accent-amber bg-accent-amber/10 border-accent-amber/20';
      case 'Hard': return 'text-accent-rose bg-accent-rose/10 border-accent-rose/20';
      default: return 'text-text-muted bg-bg-elevated border-border-subtle';
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-bg-surface border border-border-subtle rounded-xl shadow-sm">
      {/* Exercise Info */}
      <div className="flex items-center gap-6">
        <div className="space-y-1">
          <h2 className="text-lg font-bold text-text-primary">{exerciseName}</h2>
          <div className="flex items-center gap-3 text-xs text-text-muted">
            <div className="flex items-center gap-1.5">
              <Target size={14} className="text-accent-indigo" />
              <span>{targetMuscle}</span>
            </div>
            <span className={`px-2 py-0.5 rounded border text-[10px] font-medium ${getDifficultyColor(difficulty)}`}>
              {difficulty}
            </span>
            <div className="flex items-center gap-1.5">
              <Clock size={14} className="text-text-muted" />
              <span>{duration}</span>
            </div>
          </div>
        </div>

        {/* Set/Rep Counter */}
        <div className="hidden md:flex items-center gap-4 pl-6 border-l border-border-subtle">
          <div className="text-center">
            <div className="text-[10px] text-text-muted uppercase tracking-wider">Set</div>
            <div className="text-lg font-bold text-text-primary font-mono">
              {currentSet} <span className="text-text-muted">/ {totalSets}</span>
            </div>
          </div>
          <div className="text-center">
            <div className="text-[10px] text-text-muted uppercase tracking-wider">Rep</div>
            <div className="text-lg font-bold text-text-primary font-mono">
              {currentRep} <span className="text-text-muted">/ {totalReps}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2">
        <Button
          variant="secondary"
          size="sm"
          onClick={onPause}
          className="gap-1.5"
        >
          <Pause size={14} />
          <span className="hidden sm:inline">Pause</span>
        </Button>
        
        <Button
          variant="secondary"
          size="sm"
          onClick={onRestart}
          className="gap-1.5"
        >
          <RotateCcw size={14} />
          <span className="hidden sm:inline">Restart</span>
        </Button>
        
        <Button
          variant="danger"
          size="sm"
          onClick={onFinish}
          className="gap-1.5"
        >
          <Flag size={14} />
          <span className="hidden sm:inline">Finish</span>
        </Button>
      </div>
    </div>
  );
};

export default WorkoutHeader;
