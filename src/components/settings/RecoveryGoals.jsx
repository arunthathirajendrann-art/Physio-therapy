import React from 'react';
import { Button } from '../../components/Button';
import { motion } from 'framer-motion';

const GoalCard = ({ title, progress, subtitle }) => (
  <motion.div whileHover={{ y: -4 }} className="glass-panel p-4 rounded-xl flex items-start justify-between transition-transform">
    <div>
      <div className="font-semibold text-sm text-text-primary">{title}</div>
      <div className="text-xs text-text-muted">{subtitle}</div>
      <div className="mt-3 w-48 bg-bg-elevated h-2 rounded-full overflow-hidden">
        <motion.div className="h-2 bg-accent-indigo" initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 1.1 }} />
      </div>
    </div>
    <div className="flex flex-col gap-2 items-end">
      <div className="text-sm font-semibold"><motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{progress}%</motion.span></div>
      <Button size="sm" variant="ghost">Edit</Button>
    </div>
  </motion.div>
);

const RecoveryGoals = () => {
  const goals = [
    { title: 'Improve Shoulder Mobility', progress: 78, subtitle: 'Target: 95° ROM' },
    { title: 'Exercise 5 Days/Week', progress: 60, subtitle: 'Current streak: 3 days' },
    { title: 'Reduce Pain Below 3', progress: 40, subtitle: 'Current pain: 5' },
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-3">
        {goals.map((g) => (
          <GoalCard key={g.title} {...g} />
        ))}
      </div>
    </div>
  );
};

export default RecoveryGoals;
