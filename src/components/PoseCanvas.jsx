import React, { useEffect, useState } from 'react';
import { getLandmarkConnections, getLandmarkDrawingCoords } from '../services/mediapipe/poseDetector';

export const PoseCanvas = React.forwardRef(
  (
    {
      detectionResults,
      videoElement,
      className = '',
      landmarkRadius = 4,
      connectionWidth = 2,
      landmarkColor = '#6366F1',
      connectionColor = '#10B981',
      lowConfidenceColor = '#F59E0B',
      confidenceThreshold = 0.5,
    },
    ref
  ) => {
    const [canvasSize, setCanvasSize] = useState({ width: 640, height: 480 });

    useEffect(() => {
      if (videoElement && videoElement.videoWidth && videoElement.videoHeight) {
        setCanvasSize({
          width: videoElement.videoWidth,
          height: videoElement.videoHeight,
        });
      }
    }, [videoElement]);

    useEffect(() => {
      if (
        !ref?.current ||
        !detectionResults ||
        !detectionResults.landmarks ||
        detectionResults.landmarks.length === 0
      ) {
        return;
      }

      const canvas = ref.current;
      const ctx = canvas.getContext('2d');

      if (!ctx) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const landmarks = detectionResults.landmarks[0];
      if (!landmarks || landmarks.length === 0) {
        return;
      }

      // Draw connections (skeleton)
      const connections = getLandmarkConnections();
      const drawingCoords = getLandmarkDrawingCoords(
        landmarks,
        canvas.width,
        canvas.height
      );

      // Draw connections
      ctx.strokeStyle = connectionColor;
      ctx.lineWidth = connectionWidth;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      connections.forEach(([startIdx, endIdx]) => {
        if (startIdx < drawingCoords.length && endIdx < drawingCoords.length) {
          const start = drawingCoords[startIdx];
          const end = drawingCoords[endIdx];

          // Only draw if both points have sufficient visibility
          if (start.visibility > confidenceThreshold && end.visibility > confidenceThreshold) {
            ctx.beginPath();
            ctx.moveTo(start.x, start.y);
            ctx.lineTo(end.x, end.y);
            ctx.stroke();
          }
        }
      });

      // Draw landmarks
      drawingCoords.forEach((coord, idx) => {
        if (coord.visibility < confidenceThreshold) {
          return; // Skip low confidence landmarks
        }

        const color = coord.visibility > 0.7 ? landmarkColor : lowConfidenceColor;
        const radius = coord.visibility > 0.7 ? landmarkRadius : landmarkRadius * 0.7;

        // Draw filled circle
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(coord.x, coord.y, radius, 0, 2 * Math.PI);
        ctx.fill();

        // Draw border
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });
    }, [detectionResults, ref, canvasSize]);

    return (
      <canvas
        ref={ref}
        width={canvasSize.width}
        height={canvasSize.height}
        className={`absolute inset-0 w-full h-full ${className}`}
        style={{
          display: 'block',
        }}
      />
    );
  }
);

PoseCanvas.displayName = 'PoseCanvas';

export default PoseCanvas;
