import React from 'react';
import { Button } from '../../components/Button';
import { motion } from 'framer-motion';

const DeviceCard = ({ name, status = 'Connected', battery = 82 }) => (
  <motion.div whileHover={{ scale: 1.02 }} className="glass-panel p-4 rounded-xl flex items-center justify-between transition-transform">
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-lg bg-bg-elevated flex items-center justify-center text-sm">📟</div>
      <div>
        <div className="font-semibold text-sm text-text-primary">{name}</div>
        <div className="text-xs text-text-muted">{status} • Battery {battery}%</div>
      </div>
    </div>
    <div className="flex gap-2">
      <Button size="sm" variant="secondary">Sync</Button>
      <Button size="sm" variant="ghost">Disconnect</Button>
    </div>
  </motion.div>
);

const ConnectedDevices = () => {
  const devices = [
    { name: 'Apple Watch', status: 'Connected', battery: 78 },
    { name: 'Fitness Band', status: 'Connected', battery: 56 },
    { name: 'Heart Rate Monitor', status: 'Connected', battery: 92 },
    { name: 'Smart Scale', status: 'Not Connected', battery: 0 },
    { name: 'Camera', status: 'Connected', battery: 100 },
  ];

  return (
    <div className="space-y-3">
      {devices.map((d) => (
        <DeviceCard key={d.name} {...d} />
      ))}
    </div>
  );
};

export default ConnectedDevices;
