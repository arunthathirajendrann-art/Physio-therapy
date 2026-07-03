/**
 * Calculate the angle at pointB formed by the segments pointB-pointA and pointB-pointC.
 * Uses standard vector math and returns degrees.
 *
 * @param {{x:number,y:number,z?:number}} pointA
 * @param {{x:number,y:number,z?:number}} pointB
 * @param {{x:number,y:number,z?:number}} pointC
 * @returns {number}
 */
export const calculateAngle = (pointA, pointB, pointC) => {
  if (!pointA || !pointB || !pointC) {
    return 0;
  }

  const vectorBA = {
    x: pointA.x - pointB.x,
    y: pointA.y - pointB.y,
    z: (pointA.z || 0) - (pointB.z || 0),
  };

  const vectorBC = {
    x: pointC.x - pointB.x,
    y: pointC.y - pointB.y,
    z: (pointC.z || 0) - (pointB.z || 0),
  };

  const dotProduct = vectorBA.x * vectorBC.x + vectorBA.y * vectorBC.y + vectorBA.z * vectorBC.z;
  const magnitudeBA = Math.sqrt(vectorBA.x ** 2 + vectorBA.y ** 2 + vectorBA.z ** 2);
  const magnitudeBC = Math.sqrt(vectorBC.x ** 2 + vectorBC.y ** 2 + vectorBC.z ** 2);

  if (magnitudeBA === 0 || magnitudeBC === 0) {
    return 0;
  }

  const cosineAngle = Math.min(1, Math.max(-1, dotProduct / (magnitudeBA * magnitudeBC)));
  return Math.acos(cosineAngle) * (180 / Math.PI);
};

const getPoint = (landmarks, index) => {
  if (!Array.isArray(landmarks) || typeof index !== 'number') {
    return null;
  }
  return landmarks[index] || null;
};

/**
 * Calculate shoulder angle using landmark indices.
 * @param {Array} landmarks
 * @param {number} shoulderIndex
 * @param {number} elbowIndex
 * @param {number} hipIndex
 * @returns {number}
 */
export const shoulderAngle = (landmarks, shoulderIndex, elbowIndex, hipIndex) => {
  const shoulder = getPoint(landmarks, shoulderIndex);
  const elbow = getPoint(landmarks, elbowIndex);
  const hip = getPoint(landmarks, hipIndex);
  return calculateAngle(elbow, shoulder, hip);
};

/**
 * Calculate elbow angle using landmark indices.
 * @param {Array} landmarks
 * @param {number} shoulderIndex
 * @param {number} elbowIndex
 * @param {number} wristIndex
 * @returns {number}
 */
export const elbowAngle = (landmarks, shoulderIndex, elbowIndex, wristIndex) => {
  const shoulder = getPoint(landmarks, shoulderIndex);
  const elbow = getPoint(landmarks, elbowIndex);
  const wrist = getPoint(landmarks, wristIndex);
  return calculateAngle(shoulder, elbow, wrist);
};

/**
 * Calculate hip angle using landmark indices.
 * @param {Array} landmarks
 * @param {number} shoulderIndex
 * @param {number} hipIndex
 * @param {number} kneeIndex
 * @returns {number}
 */
export const hipAngle = (landmarks, shoulderIndex, hipIndex, kneeIndex) => {
  const shoulder = getPoint(landmarks, shoulderIndex);
  const hip = getPoint(landmarks, hipIndex);
  const knee = getPoint(landmarks, kneeIndex);
  return calculateAngle(shoulder, hip, knee);
};

/**
 * Calculate knee angle using landmark indices.
 * @param {Array} landmarks
 * @param {number} hipIndex
 * @param {number} kneeIndex
 * @param {number} ankleIndex
 * @returns {number}
 */
export const kneeAngle = (landmarks, hipIndex, kneeIndex, ankleIndex) => {
  const hip = getPoint(landmarks, hipIndex);
  const knee = getPoint(landmarks, kneeIndex);
  const ankle = getPoint(landmarks, ankleIndex);
  return calculateAngle(hip, knee, ankle);
};

export default {
  calculateAngle,
  shoulderAngle,
  elbowAngle,
  hipAngle,
  kneeAngle,
};