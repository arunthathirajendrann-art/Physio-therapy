import React, { useState, useEffect } from 'react';
import { CheckCircle2, Circle, Play, Clock, Zap, ChevronRight } from 'lucide-react';
import Card, { CardTitle } from '../Card';

export const ExercisePlaylist = ({ 
  exercises = [],
  currentExerciseId = null,
  onExerciseSelect,
  sessionProgress = 25
}) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(sessionProgress);
    }, 300);
    return () => clearTimeout(timer);
  }, [sessionProgress]);

  const defaultExercises = [
    { id: 1, name: 'Warm-up', duration: '5:00', status: 'completed', difficulty: 'Easy', category: 'warmup' },
    { id: 2, name: 'Shoulder Abduction', duration: '8:00', status: 'current', difficulty: 'Medium', category: 'exercise' },
    { id: 3, name: 'Wall Slides', duration: '6:00', status: 'pending', difficulty: 'Medium', category: 'exercise' },
    { id: 4, name: 'Shoulder Flexion', duration: '7:00', status: 'pending', difficulty: 'Hard', category: 'exercise' },
    { id: 5, name: 'Stretching', duration: '5:00', status: 'pending', difficulty: 'Easy', category: 'stretch' },
    { id: 6, name: 'Cool Down', duration: '4:00', status: 'pending', difficulty: 'Easy', category: 'cooldown' },
  ];

  const playlist = exercises.length > 0 ? exercises : defaultExercises;

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'text-accent-emerald bg-accent-emerald/10 border-accent-emerald/20';
      case 'Medium': return 'text-accent-amber bg-accent-amber/10 border-accent-amber/20';
      case 'Hard': return 'text-accent-rose bg-accent-rose/10 border-accent-rose/20';
      default: return 'text-text-muted bg-bg-elevated border-border-subtle';
    }
  };

  const getStatusIcon = (status, isCurrent) => {
    if (status === 'completed') {
      return <CheckCircle2 size={18} className="text-accent-emerald" />;
    }
    if (isCurrent) {
      return <Play size={16} className="text-accent-indigo fill-accent-indigo" />;
    }
    return <Circle size={18} className="text-text-muted" />;
  };

  return (
    <Card className="flex flex-col h-full text-left" glow={false}>
      {/* Header */}
      <div className="pb-4 border-b border-border-subtle mb-4">
        <CardTitle className="text-sm font-bold text-text-primary flex items-center gap-2">
          <Zap size={16} className="text-accent-indigo" />
          Exercise Playlist
        </CardTitle>
      </div>

      {/* Exercise List */}
      <div className="flex-1 overflow-y-auto space-y-2 pr-1">
        {playlist.map((exercise) => {
          const isCurrent = exercise.id === currentExerciseId || exercise.status === 'current';
          const isCompleted = exercise.status === 'completed';
          
          return (
            <button
              key={exercise.id}
              onClick={() => onExerciseSelect && onExerciseSelect(exercise.id)}
              className={`w-full p-3 rounded-xl border text-left transition-all duration-200 group
                ${isCurrent 
                  ? 'bg-accent-indigo/10 border-accent-indigo shadow-glass-indigo' 
                  : isCompleted
                    ? 'bg-bg-elevated/50 border-border-subtle opacity-70'
                    : 'bg-bg-surface border-border-subtle hover:border-border-bright hover:bg-bg-elevated'
                }`}
            >
              <div className="flex items-start gap-3">
                {/* Status Icon */}
                <div className="mt-0.5 shrink-0">
                  {getStatusIcon(exercise.status, isCurrent)}
                </div>

                {/* Exercise Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className={`text-sm font-semibold truncate
                      ${isCurrent ? 'text-accent-indigo' : isCompleted ? 'text-text-muted' : 'text-text-primary'}`}
                    >
                      {exercise.name}
                    </h4>
                    {isCurrent && (
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-accent-indigo text-white animate-pulse">
                        LIVE
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-[10px] text-text-muted">
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>{exercise.duration}</span>
                    </div>
                    <span className={`px-1.5 py-0.5 rounded border text-[9px] font-medium ${getDifficultyColor(exercise.difficulty)}`}>
                      {exercise.difficulty}
                    </span>
                  </div>

                  {/* Progress Bar for Current Exercise */}
                  {isCurrent && (
                    <div className="mt-2 h-1 bg-bg-elevated rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-accent-indigo to-accent-emerald rounded-full transition-all duration-500"
                        style={{ width: '65%' }}
                      />
                    </div>
                  )}
                </div>

                {/* Chevron */}
                {isCurrent && (
                  <ChevronRight size={16} className="text-accent-indigo shrink-0" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Session Progress */}
      <div className="pt-4 border-t border-border-subtle mt-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-text-primary">Session Progress</span>
          <span className="text-xs font-bold text-accent-indigo font-mono">{animatedProgress}%</span>
        </div>
        <div className="h-2 bg-bg-elevated rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-accent-indigo to-accent-emerald rounded-full transition-all duration-700 ease-out"
            style={{ width: `${animatedProgress}%` }}
          />
        </div>
        <p className="text-[10px] text-text-muted mt-2">
          {playlist.filter(e => e.status === 'completed').length} of {playlist.length} exercises completed
        </p>
      </div>
    </Card>
  );
};

export default ExercisePlaylist;
