import React from 'react';

export const Skeleton = ({ className = '' }) => (
  <div className={`animate-pulse bg-bg-elevated/60 rounded ${className}`} />
);

export default Skeleton;
