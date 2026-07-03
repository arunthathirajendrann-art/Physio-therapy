import { shoulderAngle, elbowAngle } from "../services/analysis/jointAngles";
import { useEffect, useRef, useState, useCallback } from 'react';
import {
  initPoseLandmarker,
  detectPose,
  disposePoseLandmarker,
  getDetectionConfidence,
} from '../services/mediapipe/poseDetector';
import { updateShoulderRep } from "../services/analysis/repCounter";
import { analyzeShoulderAbduction } from '../services/analysis/aiCoach';
export const usePoseDetection = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const animationFrameRef = useRef(null);
  const lastDetectionTimeRef = useRef(0);
  const fpsRef = useRef(0);
  const frameCountRef = useRef(0);
  const lastFpsUpdateRef = useRef(0);

  const [isInitializing, setIsInitializing] = useState(true);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [permissionDenied, setPermissionDenied] = useState(false);
  const [detectionResults, setDetectionResults] = useState(null);
  const [fps, setFps] = useState(0);
  const [confidence, setConfidence] = useState(0);
  const [error, setError] = useState('');
  const [isPoseDetected, setIsPoseDetected] = useState(false);

  // Initialize camera
  useEffect(() => {
    const initCamera = async () => {
      try {
        setIsInitializing(true);
        setError('');

        // Request camera permission
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: { ideal: 640 },
            height: { ideal: 480 },
            facingMode: 'user',
          },
        });

        setHasPermission(true);
        setPermissionDenied(false);
        streamRef.current = stream;

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = () => {
            videoRef.current?.play();
            setIsCameraReady(true);
            setIsInitializing(false);
          };
        }
      } catch (err) {
        if (err.name === 'NotAllowedError') {
          setPermissionDenied(true);
          setHasPermission(false);
          setError('Camera permission denied. Please enable camera access in your browser settings.');
        } else if (err.name === 'NotFoundError') {
          setError('No camera device found. Please connect a camera.');
        } else {
          setError('Failed to access camera. Please try again.');
        }
        console.error('Camera access error:', err);
        setIsInitializing(false);
      }
    };

    initCamera();

    return () => {
      // Cleanup camera stream
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
      }
    };
  }, []);

  // Initialize MediaPipe model
  useEffect(() => {
    const initModel = async () => {
      try {
        await initPoseLandmarker();
        // Model is now ready
      } catch (err) {
        console.error('Failed to initialize MediaPipe model:', err);
        setError('Failed to load pose detection model.');
      }
    };

    initModel();

    return () => {
      // Don't dispose model on unmount - it's a singleton and might be used elsewhere
      // Just cancel animation frames
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Detection loop
  const detectPoseFrame = useCallback(async () => {
    if (
      !videoRef.current ||
      !isCameraReady ||
      videoRef.current.readyState !== videoRef.current.HAVE_ENOUGH_DATA
    ) {
      animationFrameRef.current = requestAnimationFrame(detectPoseFrame);
      return;
    }

    try {
      const now = performance.now();
      const result = await detectPose(videoRef.current, now);
      //console.log(result);
      // Update detection results
      setDetectionResults(result);

      // Check if pose is detected
      const hasPose = result.landmarks && result.landmarks.length > 0 && result.landmarks[0].length > 0;
      setIsPoseDetected(hasPose);
  if (hasPose) {
    const landmarks = result.landmarks[0];

    const rightShoulder = shoulderAngle(landmarks, 12, 14, 24);
    const rightElbow = elbowAngle(landmarks, 12, 14, 16);
    const torsoLean = 0;

    const coach = analyzeShoulderAbduction({
      shoulderAngle: rightShoulder,
      elbowAngle: rightElbow,
      torsoLean,
    });

    console.log('AI Coach:', coach.feedback);

    const counter = updateShoulderRep(rightShoulder);
    console.log('Angle:', rightShoulder.toFixed(1), 'Reps:', counter.reps, 'State:', counter.state);
  }

      // Calculate confidence
      if (hasPose) {
        const conf = getDetectionConfidence(result.landmarks[0]);
        setConfidence(conf);
      } else {
        setConfidence(0);
      }

      // Calculate FPS
      frameCountRef.current++;
      const timeSinceLastUpdate = now - lastFpsUpdateRef.current;
      if (timeSinceLastUpdate >= 1000) {
        fpsRef.current = frameCountRef.current;
        setFps(frameCountRef.current);
        frameCountRef.current = 0;
        lastFpsUpdateRef.current = now;
      }

      lastDetectionTimeRef.current = now;
    } catch (err) {
      console.error('Pose detection error:', err);
    }

    animationFrameRef.current = requestAnimationFrame(detectPoseFrame);
  }, [isCameraReady]);

  // Start detection when camera is ready
  useEffect(() => {
    if (isCameraReady && !animationFrameRef.current) {
      animationFrameRef.current = requestAnimationFrame(detectPoseFrame);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [isCameraReady, detectPoseFrame]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
      // Optional: dispose model on complete unmount
      // disposePoseLandmarker();
    };
  }, []);

  return {
    videoRef,
    canvasRef,
    isInitializing,
    isCameraReady,
    hasPermission,
    permissionDenied,
    detectionResults,
    fps,
    confidence,
    error,
    isPoseDetected,
  };
};

export default usePoseDetection;
