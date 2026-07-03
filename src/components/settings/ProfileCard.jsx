import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { motion } from 'framer-motion';

const Field = ({ label, value }) => (
  <div className="grid grid-cols-3 gap-2 items-center">
    <div className="text-xs text-text-muted">{label}</div>
    <div className="col-span-2 text-sm text-text-primary">{value}</div>
  </div>
);

const ProfileCard = () => {
  const [editing, setEditing] = useState(false);

  return (
    <div className="space-y-4">
      <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.36 }} className="flex items-center gap-4">
        <motion.div whileHover={{ scale: 1.03 }} className="h-20 w-20 rounded-full bg-gradient-to-br from-accent-indigo to-accent-emerald flex items-center justify-center text-white font-bold text-xl">AP</motion.div>
        <div>
          <div className="text-lg font-semibold">Aarun Patel</div>
          <div className="text-xs text-text-muted">Patient • 28 yrs</div>
        </div>
        <div className="ml-auto flex gap-2">
          <Button variant="ghost" size="sm" onClick={() => setEditing(!editing)}>Edit Profile</Button>
          <Button size="sm">Upload Photo</Button>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.08 }} className="grid grid-cols-1 gap-3">
        <Field label="Full Name" value="Aarun Patel" />
        <Field label="Age" value="28" />
        <Field label="Gender" value="Male" />
        <Field label="Height" value="178 cm" />
        <Field label="Weight" value="72 kg" />
        <Field label="Blood Group" value="O+" />
        <Field label="Phone" value="(555) 123-4567" />
        <Field label="Email" value="aarun@example.com" />
        <Field label="Emergency Contact" value="Priya Patel — (555) 765-4321" />
      </motion.div>

      <div className="flex justify-end">
        <Button variant="primary">Save Changes</Button>
      </div>
    </div>
  );
};

export default ProfileCard;
