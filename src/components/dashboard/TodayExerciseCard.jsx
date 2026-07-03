import React from 'react';
import { Dumbbell, Clock, CheckCircle2, Play } from 'lucide-react';
import Card, { CardTitle, CardHeader } from '../Card';
import Button from '../Button';

export const TodayExerciseCard = ({ onStartWorkout }) => {
  const exercises = [
    {
      id: 'leg_raise',
      name: "Straight Leg Raises",
      muscle: "Quadriceps",
      duration: "5 min",
      difficulty: "Mild",
      repsSets: "10 reps × 3 sets",
      completed: true
    },
    {
      id: 'wall_squat',
      name: "Wall Squat Holds",
      muscle: "Glutes & Quads",
      duration: "8 min",
      difficulty: "Moderate",
      repsSets: "5 holds × 15s",
      completed: true
    },
    {
      id: 'hamstring_curl',
      name: "Hamstring Curls",
      muscle: "Hamstrings",
      duration: "6 min",
      difficulty: "Mild",
      repsSets: "12 reps × 3 sets",
      completed: false
    }
  ];

  const completedCount = exercises.filter(ex => ex.completed).length;
  const progressPercent = Math.round((completedCount / exercises.length) * 100);

  return (
    <Card className="flex flex-col text-left space-y-4" glow glowColor="indigo">
      <CardHeader className="border-b border-border-subtle pb-3 mb-1">
        <div className="flex justify-between items-center w-full">
          <div>
            <CardTitle className="text-sm font-bold text-text-primary">Today's Routine</CardTitle>
            <p className="text-[11px] text-text-muted mt-0.5">Knee Flexion & Stability Focus</p>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-accent-indigo/10 border border-accent-indigo/20 text-accent-indigo">
            {completedCount}/{exercises.length} Complete
          </span>
        </div>
      </CardHeader>

      {/* Progress Bar */}
      <div className="space-y-1">
        <div className="flex justify-between text-[10px] text-text-muted font-mono font-semibold">
          <span>Overall Routine Progress</span>
          <span>{progressPercent}%</span>
        </div>
        <div className="w-full h-1.5 rounded-full bg-bg-elevated border border-border-subtle overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-accent-indigo to-accent-emerald rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Exercise List */}
      <div className="space-y-2">
        {exercises.map((ex) => (
          <div 
            key={ex.id}
            className={`flex items-center justify-between p-3 rounded-xl border transition-all duration-150
              ${ex.completed 
                ? 'border-border-subtle bg-bg-deep/40 opacity-80' 
                : 'border-border-subtle bg-bg-deep hover:bg-bg-elevated hover:border-border-bright'
              }`}
          >
            <div className="flex items-center gap-3">
              {/* Icon status indicator */}
              <div className={`p-2 rounded-lg border h-fit shrink-0
                ${ex.completed 
                  ? 'border-accent-emerald/20 text-accent-emerald bg-accent-emerald/10' 
                  : 'border-border-subtle text-text-secondary bg-bg-surface'
                }`}
              >
                {ex.completed ? <CheckCircle2 size={16} /> : <Dumbbell size={16} />}
              </div>

              <div className="text-left space-y-0.5 min-w-0">
                <h4 className="text-xs font-bold text-text-primary truncate">
                  {ex.name}
                </h4>
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-0.5 text-[9px] text-text-muted font-mono">
                  <span className="text-text-secondary font-semibold">{ex.muscle}</span>
                  <span>•</span>
                  <span className="flex items-center gap-0.5"><Clock size={10} />{ex.duration}</span>
                  <span>•</span>
                  <span className="flex items-center gap-0.5">{ex.repsSets}</span>
                </div>
              </div>
            </div>

            {/* Action Trigger */}
            <div className="shrink-0 ml-2">
              {ex.completed ? (
                <span className="text-[10px] font-bold text-accent-emerald px-2 py-1">Done</span>
              ) : (
                <Button 
                  variant="primary" 
                  size="sm"
                  onClick={onStartWorkout}
                  className="py-1 px-2.5 gap-1 text-[10px]"
                >
                  <Play size={10} fill="currentColor" />
                  Start
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TodayExerciseCard;
