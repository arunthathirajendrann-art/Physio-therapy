import React, { useState } from 'react';
import { Search, Plus, Clock, Target, Dumbbell, GripVertical, Eye, Save } from'lucide-react';
import Card, { CardTitle, CardHeader } from '../Card';
import Button from '../Button';

export const ExerciseAssignment = ({ onAssign, onSaveDraft, onPreview }) => {
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDifficulty, setFilterDifficulty] = useState('all');
  const [filterMuscle, setFilterMuscle] = useState('all');

  const exerciseLibrary = [
    { id: 1, name: 'Shoulder Abduction', difficulty: 'Medium', muscle: 'Deltoids', duration: '8 min', icon: '💪' },
    { id: 2, name: 'Knee Extension', difficulty: 'Easy', muscle: 'Quadriceps', duration: '6 min', icon: '🦵' },
    { id: 3, name: 'Hip Flexion', difficulty: 'Hard', muscle: 'Hip Flexors', duration: '10 min', icon: '🧘' },
    { id: 4, name: 'Ankle Dorsiflexion', difficulty: 'Easy', muscle: 'Calves', duration: '5 min', icon: '🦶' },
    { id: 5, name: 'Core Stability', difficulty: 'Medium', muscle: 'Core', duration: '7 min', icon: '🎯' },
    { id: 6, name: 'Wrist Rotation', difficulty: 'Easy', muscle: 'Forearm', duration: '4 min', icon: '🤚' },
    { id: 7, name: 'Neck Stretches', difficulty: 'Easy', muscle: 'Neck', duration: '5 min', icon: '👤' },
    { id: 8, name: 'Back Extensions', difficulty: 'Hard', muscle: 'Lower Back', duration: '8 min', icon: '🔄' },
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'text-accent-emerald bg-accent-emerald/10 border-accent-emerald/20';
      case 'Medium': return 'text-accent-amber bg-accent-amber/10 border-accent-amber/20';
      case 'Hard': return 'text-accent-rose bg-accent-rose/10 border-accent-rose/20';
      default: return 'text-text-muted bg-bg-elevated border-border-subtle';
    }
  };

  const filteredExercises = exerciseLibrary.filter(exercise => {
    const matchesSearch = exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exercise.muscle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = filterDifficulty === 'all' || exercise.difficulty === filterDifficulty;
    const matchesMuscle = filterMuscle === 'all' || exercise.muscle === filterMuscle;
    return matchesSearch && matchesDifficulty && matchesMuscle;
  });

  const toggleExercise = (exercise) => {
    setSelectedExercises(prev => {
      const exists = prev.find(e => e.id === exercise.id);
      if (exists) {
        return prev.filter(e => e.id !== exercise.id);
      } else {
        return [...prev, exercise];
      }
    });
  };

  return (
    <Card className="flex flex-col text-left" glow glowColor="indigo">
      <CardHeader>
        <CardTitle className="text-sm font-bold text-text-primary flex items-center gap-2">
          <Dumbbell size={16} className="text-accent-indigo" />
          Exercise Assignment
        </CardTitle>
      </CardHeader>

      {/* Search and Filters */}
      <div className="space-y-3 mb-4">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            placeholder="Search exercises..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-bg-surface border border-border-subtle rounded-lg text-sm focus:outline-none focus:border-border-bright text-text-primary placeholder:text-text-muted"
          />
        </div>

        <div className="flex gap-2">
          <select
            value={filterDifficulty}
            onChange={(e) => setFilterDifficulty(e.target.value)}
            className="flex-1 px-3 py-2 bg-bg-surface border border-border-subtle rounded-lg text-sm focus:outline-none focus:border-border-bright text-text-primary"
          >
            <option value="all">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <select
            value={filterMuscle}
            onChange={(e) => setFilterMuscle(e.target.value)}
            className="flex-1 px-3 py-2 bg-bg-surface border border-border-subtle rounded-lg text-sm focus:outline-none focus:border-border-bright text-text-primary"
          >
            <option value="all">All Muscles</option>
            <option value="Deltoids">Deltoids</option>
            <option value="Quadriceps">Quadriceps</option>
            <option value="Hip Flexors">Hip Flexors</option>
            <option value="Calves">Calves</option>
            <option value="Core">Core</option>
          </select>
        </div>
      </div>

      {/* Exercise Library */}
      <div className="flex-1 overflow-y-auto space-y-2 mb-4 max-h-[300px]">
        {filteredExercises.map((exercise) => {
          const isSelected = selectedExercises.find(e => e.id === exercise.id);
          return (
            <div
              key={exercise.id}
              onClick={() => toggleExercise(exercise)}
              className={`p-3 rounded-xl border cursor-pointer transition-all duration-200 flex items-center gap-3 ${
                isSelected 
                  ? 'bg-accent-indigo/10 border-accent-indigo' 
                  : 'bg-bg-surface border-border-subtle hover:border-border-bright'
              }`}
            >
              <GripVertical size={16} className="text-text-muted shrink-0" />
              <span className="text-2xl">{exercise.icon}</span>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-text-primary truncate">{exercise.name}</h4>
                <div className="flex items-center gap-2 text-xs text-text-muted">
                  <span>{exercise.muscle}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock size={10} />
                    <span>{exercise.duration}</span>
                  </div>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-[10px] font-semibold border ${getDifficultyColor(exercise.difficulty)}`}>
                {exercise.difficulty}
              </span>
            </div>
          );
        })}
      </div>

      {/* Selected Exercises Summary */}
      {selectedExercises.length > 0 && (
        <div className="p-3 rounded-xl bg-bg-deep/50 border border-border-subtle mb-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-text-muted mb-2">
            <Target size={12} />
            <span>Selected Exercises ({selectedExercises.length})</span>
          </div>
          <div className="space-y-1">
            {selectedExercises.map((exercise) => (
              <div key={exercise.id} className="flex items-center justify-between text-xs">
                <span className="text-text-primary">{exercise.name}</span>
                <span className="text-text-muted">{exercise.duration}</span>
              </div>
            ))}
          </div>
          <div className="mt-2 pt-2 border-t border-border-subtle text-xs text-text-muted">
            Total Duration: {selectedExercises.reduce((acc, ex) => {
              const mins = parseInt(ex.duration);
              return acc + (isNaN(mins) ? 0 : mins);
            }, 0)} min
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="grid grid-cols-3 gap-2">
        <Button
          variant="secondary"
          size="sm"
          onClick={onPreview}
          disabled={selectedExercises.length === 0}
          className="gap-1.5 text-xs"
        >
          <Eye size={12} />
          Preview
        </Button>
        <Button
          variant="secondary"
          size="sm"
          onClick={onSaveDraft}
          disabled={selectedExercises.length === 0}
          className="gap-1.5 text-xs"
        >
          <Save size={12} />
          Save Draft
        </Button>
        <Button
          variant="primary"
          size="sm"
          onClick={onAssign}
          disabled={selectedExercises.length === 0}
          className="gap-1.5 text-xs"
        >
          <Plus size={12} />
          Assign
        </Button>
      </div>
    </Card>
  );
};

export default ExerciseAssignment;
