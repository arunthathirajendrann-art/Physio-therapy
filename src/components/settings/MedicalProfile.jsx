import React from 'react';

const Row = ({ label, value }) => (
  <div className="flex items-start gap-4">
    <div className="w-40 text-xs text-text-muted">{label}</div>
    <div className="text-sm text-text-primary">{value}</div>
  </div>
);

const MedicalProfile = () => {
  return (
    <div className="space-y-4">
      <Row label="Primary Condition" value="Rotator cuff tendinopathy" />
      <Row label="Affected Joint" value="Right Shoulder" />
      <Row label="Pain Level" value="5 / 10" />
      <Row label="Previous Surgeries" value="None" />
      <Row label="Current Medications" value="Ibuprofen 200mg PRN" />
      <Row label="Allergies" value="Penicillin" />
      <Row label="Therapist Assigned" value="Dr. Lin" />
      <Row label="Recovery Goal" value="Restore ROM to 95°" />
      <div className="text-xs text-text-muted">Notes: Placeholder medical notes describing the condition and relevant history.</div>
    </div>
  );
};

export default MedicalProfile;
