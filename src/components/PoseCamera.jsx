import React from 'react';

export const PoseCamera = React.forwardRef(
  ({ className = '', style = {} }, ref) => {
    return (
      <video
        ref={ref}
        autoPlay
        playsInline
        muted
        className={`w-full h-full object-cover ${className}`}
        style={{
          ...style,
          display: 'block',
        }}
      />
    );
  }
);

PoseCamera.displayName = 'PoseCamera';

export default PoseCamera;
