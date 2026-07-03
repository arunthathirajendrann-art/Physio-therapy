import { PoseLandmarker, FilesetResolver } from '@mediapipe/tasks-vision';

let poseLandmarker = null;
let isInitializing = false;
let initPromise = null;

/**
 * Initialize the Pose Landmarker model asynchronously
 * Uses the official MediaPipe Tasks Vision API
 * Returns a promise that resolves when the model is ready
 */
export const initPoseLandmarker = async () => {
  // If already initialized, return immediately
  if (poseLandmarker) {
    return poseLandmarker;
  }

  // If currently initializing, wait for the existing promise
  if (isInitializing) {
    return initPromise;
  }

  isInitializing = true;
  initPromise = (async () => {
    try {
      // Initialize FilesetResolver with WASM assets from jsDelivr CDN
      console.log("POSE DETECTOR VERSION 999");
      const vision = await FilesetResolver.forVisionTasks(
        'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.35/wasm'
      );

      // Create PoseLandmarker with official configuration
      // Model URL from Google's official MediaPipe models bucket
      poseLandmarker = await PoseLandmarker.createFromOptions(vision, {
       baseOptions: {
         modelAssetPath: '/models/pose_landmarker.task',
            delegate: 'GPU',
            },
        runningMode: 'VIDEO',
        numPoses: 1, // Only detect one person
      });

      console.log('Pose Landmarker initialized successfully');
      isInitializing = false;
      return poseLandmarker;
    } catch (error) {
      console.error('Failed to initialize Pose Landmarker:', error);
      isInitializing = false;
      throw error;
    }
  })();

  return initPromise;
};

/**
 * Detect pose in a video frame
 * Returns normalized landmarks and world landmarks
 */
export const detectPose = (videoElement, timestampMs) => {
  if (!poseLandmarker) {
    throw new Error('Pose Landmarker not initialized');
  }

  try {
    const result = poseLandmarker.detectForVideo(videoElement, timestampMs);
    return result;
  } catch (error) {
    console.error('Error detecting pose:', error);
    throw error;
  }
};

/**
 * Get landmark connections (skeleton)
 * Returns array of [startIndex, endIndex] pairs
 */
export const getLandmarkConnections = () => {
  // MediaPipe Pose landmark connections
  // These represent the skeleton structure
  return [
    // Left side
    [11, 13], [13, 15], // left shoulder -> left elbow -> left wrist
    [11, 23], // left shoulder -> left hip
    [23, 25], // left hip -> left knee
    [25, 27], // left knee -> left ankle

    // Right side
    [12, 14], [14, 16], // right shoulder -> right elbow -> right wrist
    [12, 24], // right shoulder -> right hip
    [24, 26], // right hip -> right knee
    [26, 28], // right knee -> right ankle

    // Center
    [11, 12], // left shoulder -> right shoulder
    [23, 24], // left hip -> right hip
    [5, 6], // left eye -> right eye
    [5, 4], [4, 2], [2, 0], [0, 1], [1, 3], [3, 7], // Head/face landmarks
    [10, 9], // left ear -> nose
    [9, 8], // nose -> right ear
  ];
};

/**
 * Extract drawing coordinates from landmarks
 * Converts normalized coordinates to canvas coordinates
 */
export const getLandmarkDrawingCoords = (landmarks, canvasWidth, canvasHeight) => {
  if (!landmarks || landmarks.length === 0) {
    return [];
  }

  return landmarks.map((landmark) => ({
    x: landmark.x * canvasWidth,
    y: landmark.y * canvasHeight,
    z: landmark.z || 0, // z is depth
    visibility: landmark.visibility || 0,
  }));
};

/**
 * Calculate average confidence across visible landmarks
 */
export const getDetectionConfidence = (landmarks) => {
  if (!landmarks || landmarks.length === 0) {
    return 0;
  }

  const visibleLandmarks = landmarks.filter((l) => l.visibility > 0.5);
  if (visibleLandmarks.length === 0) {
    return 0;
  }

  const avgVisibility = visibleLandmarks.reduce((sum, l) => sum + l.visibility, 0) / visibleLandmarks.length;
  return Math.round(avgVisibility * 100);
};

/**
 * Dispose of the Pose Landmarker (cleanup)
 */
export const disposePoseLandmarker = () => {
  if (poseLandmarker) {
    poseLandmarker.close?.();
    poseLandmarker = null;
    isInitializing = false;
    initPromise = null;
  }
};
