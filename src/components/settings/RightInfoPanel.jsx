import React, { useRef, useEffect } from 'react';
import { Card } from '../../components/Card';
import { motion } from 'framer-motion';

const Progress = ({ value = 0 }) => (
  <div className="w-full bg-bg-elevated h-2 rounded-full overflow-hidden">
    <motion.div className="h-2 bg-accent-indigo" initial={{ width: 0 }} animate={{ width: `${value}%` }} transition={{ duration: 1.1 }} />
  </div>
);

const Count = ({ to = 0, suffix = '%' }) => {
  const ref = useRef(null);

  useEffect(() => {
    let raf;
    let start;
    const duration = 900;
    const from = 0;
    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const diff = timestamp - start;
      const progress = Math.min(diff / duration, 1);
      const current = Math.round(from + (to - from) * progress);
      if (ref.current) ref.current.textContent = `${current}${suffix}`;
      if (progress < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [to, suffix]);

  return <span ref={ref} className="font-semibold" />;
};

const RightInfoPanel = () => {
  return (
    <div className="space-y-4 sticky top-8">
      <Card className="p-4">
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}>
          <h4 className="text-sm font-semibold text-text-primary mb-2">Profile Completion</h4>
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-accent-indigo to-accent-emerald flex items-center justify-center text-white font-bold">AR</div>
            <div className="flex-1">
              <div className="text-sm font-semibold">Aarun Patel</div>
              <div className="text-xs text-text-muted"><Count to={78} /></div>
              <div className="mt-2"><Progress value={78} /></div>
            </div>
          </div>
        </motion.div>
      </Card>

      <Card className="p-4">
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}>
          <h4 className="text-sm font-semibold text-text-primary mb-2">Storage Usage</h4>
          <div className="text-xs text-text-muted mb-2">12.4 GB used of 32 GB</div>
          <div className="w-full bg-bg-elevated h-2 rounded-full overflow-hidden">
            <motion.div className="h-2 bg-accent-emerald" initial={{ width: 0 }} animate={{ width: '38%' }} transition={{ duration: 1.1 }} />
          </div>
        </motion.div>
      </Card>

      <Card className="p-4">
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}>
          <h4 className="text-sm font-semibold text-text-primary mb-2">Upcoming Sessions</h4>
          <div className="text-sm">Today — Shoulder PT with Dr. Lin, 4:00 PM</div>
          <div className="text-xs text-text-muted mt-2">Next: 2026-07-06</div>
        </motion.div>
      </Card>

      <Card className="p-4">
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }}>
          <h4 className="text-sm font-semibold text-text-primary mb-2">Connected Devices</h4>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-sm">
              <div>Apple Watch</div>
              <div className="text-xs text-text-muted">Connected</div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div>Smart Scale</div>
              <div className="text-xs text-text-muted">Not Connected</div>
            </div>
          </div>
        </motion.div>
      </Card>
    </div>
  );
};

export default RightInfoPanel;
