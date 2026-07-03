import { ShoulderAbductionRules } from './exerciseRules';

export const analyzeShoulderAbduction = ({ shoulderAngle, elbowAngle, torsoLean }) => {
  const {
    minAngle,
    elbowStraightAngle,
    maxTorsoLean,
    feedback,
  } = ShoulderAbductionRules;

  if (typeof shoulderAngle !== 'number' || typeof elbowAngle !== 'number' || typeof torsoLean !== 'number') {
    return {
      feedback: 'Unable to analyze form. Please provide valid angle measurements.',
      severity: 'medium',
    };
  }

  if (shoulderAngle < minAngle) {
    return {
      feedback: feedback.armTooLow,
      severity: 'moderate',
    };
  }

  if (elbowAngle < elbowStraightAngle) {
    return {
      feedback: feedback.elbowBent,
      severity: 'moderate',
    };
  }

  if (torsoLean > maxTorsoLean) {
    return {
      feedback: feedback.torsoLeaning,
      severity: 'moderate',
    };
  }

  return {
    feedback: feedback.perfectForm,
    severity: 'good',
  };
};

export default analyzeShoulderAbduction;
