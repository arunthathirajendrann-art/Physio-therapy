import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  HeartPulse, 
  ChevronRight, 
  ChevronLeft, 
  Check, 
  Camera, 
  Activity, 
  ShieldCheck, 
  Sparkles,
  FlameKindling
} from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import ThemeToggle from '../components/ThemeToggle';

export const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [selectedJoint, setSelectedJoint] = useState('');
  const [recoveryGoal, setRecoveryGoal] = useState('');
  const [painLevel, setPainLevel] = useState(5);
  const [cameraAccess, setCameraAccess] = useState(false);
  const [isCalibrating, setIsCalibrating] = useState(false);
  const navigate = useNavigate();

  const joints = [
    { id: 'knee', name: 'Knee', desc: 'ACL/MCL recovery, patella stiffness, meniscus repair', icon: '🦵' },
    { id: 'shoulder', name: 'Shoulder', desc: 'Rotator cuff tears, frozen shoulder, impingements', icon: '💪' },
    { id: 'back', name: 'Lower Back', desc: 'Lumber strain, sciatica, herniated disc relief', icon: '🧍' },
    { id: 'elbow', name: 'Elbow', desc: 'Tennis/Golfer elbow, tendonitis relief', icon: '🦾' },
    { id: 'ankle', name: 'Ankle / Foot', desc: 'Sprains, plantar fasciitis, Achilles recovery', icon: '🦶' },
  ];

  const goals = [
    { id: 'range', name: 'Restore Range of Motion', desc: 'Target joint flexion and angle extensions', icon: Activity },
    { id: 'strength', name: 'Rebuild Muscle Strength', desc: 'Graded resistance and joint stabilization', icon: HeartPulse },
    { id: 'pain', name: 'Pain & Stiffness Relief', desc: 'Stretching, blood flow, and flexibility', icon: FlameKindling },
  ];

  const handleNextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Save onboarding state
      localStorage.setItem('onboarding_completed', 'true');
      localStorage.setItem('onboarding_joint', selectedJoint);
      localStorage.setItem('onboarding_goal', recoveryGoal);
      localStorage.setItem('onboarding_pain', painLevel);
      navigate('/patient/dashboard');
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const triggerCameraCalibration = () => {
    setIsCalibrating(true);
    setTimeout(() => {
      setCameraAccess(true);
      setIsCalibrating(false);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen w-screen flex flex-col items-center justify-center p-6 bg-bg-deep overflow-hidden transition-colors duration-200">
      {/* Background glow effects */}
      <div className="absolute top-[-20%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-accent-indigo/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-accent-emerald/5 blur-[120px] pointer-events-none" />

      {/* Header controls */}
      <div className="absolute top-6 right-6">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-2xl flex flex-col items-center relative z-10">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent-indigo text-white shadow-md shadow-accent-indigo/25">
            <HeartPulse size={18} />
          </div>
          <span className="text-lg font-bold tracking-tight text-text-primary">
            Physio<span className="text-accent-indigo">Motion.ai</span>
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full mb-8 flex justify-between items-center px-2">
          {[1, 2, 3, 4].map((s) => (
            <React.Fragment key={s}>
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 border
                  ${s < step 
                    ? 'bg-accent-indigo text-white border-accent-indigo' 
                    : s === step 
                      ? 'bg-bg-surface text-accent-indigo border-accent-indigo shadow-glass-indigo' 
                      : 'bg-bg-surface text-text-muted border-border-subtle'
                  }`}
              >
                {s < step ? <Check size={14} /> : s}
              </div>
              {s < 4 && (
                <div 
                  className={`flex-1 h-0.5 mx-4 rounded transition-all duration-300
                    ${s < step ? 'bg-accent-indigo' : 'bg-border-subtle'}`}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Card Screen content */}
        <Card className="w-full shadow-2xl p-8 border border-border-subtle" glow glowColor="indigo">
          
          {/* Step 1: Joint Picker */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center">
                <span className="text-[10px] uppercase font-bold tracking-wider text-accent-indigo">Step 1: Injury Focus</span>
                <h2 className="text-2xl font-bold text-text-primary mt-1">Select the joint we are rehabbing</h2>
                <p className="text-xs text-text-muted mt-1">This configures the computer vision skeleton nodes and calibration targets.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[300px] overflow-y-auto pr-1">
                {joints.map((joint) => (
                  <button
                    key={joint.id}
                    onClick={() => setSelectedJoint(joint.id)}
                    className={`flex items-start gap-4 p-4 rounded-xl border text-left transition-all duration-200 group
                      ${selectedJoint === joint.id 
                        ? 'border-accent-indigo bg-accent-indigo/5 shadow-glass-indigo' 
                        : 'border-border-subtle bg-bg-surface hover:bg-bg-elevated hover:border-border-bright'
                      }`}
                  >
                    <span className="text-2xl mt-1 select-none">{joint.icon}</span>
                    <div>
                      <h4 className="text-sm font-bold text-text-primary group-hover:text-accent-indigo transition-colors">
                        {joint.name}
                      </h4>
                      <p className="text-[11px] text-text-muted mt-0.5 leading-relaxed">{joint.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Goal Selector */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center">
                <span className="text-[10px] uppercase font-bold tracking-wider text-accent-indigo">Step 2: Recovery Goals</span>
                <h2 className="text-2xl font-bold text-text-primary mt-1">What is your primary focus?</h2>
                <p className="text-xs text-text-muted mt-1">We will tailor the exercise library and coaching metrics to your selection.</p>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {goals.map((goal) => {
                  const Icon = goal.icon;
                  return (
                    <button
                      key={goal.id}
                      onClick={() => setRecoveryGoal(goal.id)}
                      className={`flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-200 group
                        ${recoveryGoal === goal.id 
                          ? 'border-accent-indigo bg-accent-indigo/5 shadow-glass-indigo' 
                          : 'border-border-subtle bg-bg-surface hover:bg-bg-elevated hover:border-border-bright'
                        }`}
                    >
                      <div className={`p-3 rounded-lg border transition-colors
                        ${recoveryGoal === goal.id 
                          ? 'bg-accent-indigo border-accent-indigo text-white' 
                          : 'bg-bg-elevated border-border-subtle text-text-muted group-hover:text-text-primary'
                        }`}
                      >
                        <Icon size={20} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-text-primary group-hover:text-accent-indigo transition-colors">
                          {goal.name}
                        </h4>
                        <p className="text-[11px] text-text-muted mt-0.5 leading-relaxed">{goal.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 3: Pain Calibration */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center">
                <span className="text-[10px] uppercase font-bold tracking-wider text-accent-indigo">Step 3: Baseline Assessment</span>
                <h2 className="text-2xl font-bold text-text-primary mt-1">Calibrate baseline pain & stiffness</h2>
                <p className="text-xs text-text-muted mt-1">Rate the affected joint's current pain index when moving (1 - Comfort, 10 - Extreme pain).</p>
              </div>

              <div className="py-8 px-4 flex flex-col items-center gap-6">
                {/* Large Pain Level Metric */}
                <div className="flex flex-col items-center justify-center w-24 h-24 rounded-full border border-border-subtle bg-bg-elevated relative shadow-inner">
                  <span className="text-4xl font-bold font-mono text-text-primary">{painLevel}</span>
                  <span className="text-[9px] uppercase font-semibold text-text-muted mt-1">Pain Index</span>
                </div>

                {/* Color-changing description label */}
                <div className={`px-3 py-1 rounded-full text-xs font-semibold
                  ${painLevel <= 3 
                    ? 'bg-accent-emerald/10 text-accent-emerald border border-accent-emerald/20' 
                    : painLevel <= 7 
                      ? 'bg-accent-amber/10 text-accent-amber border border-accent-amber/20' 
                      : 'bg-accent-rose/10 text-accent-rose border border-accent-rose/20'
                  }`}
                >
                  {painLevel <= 3 ? 'Mild Stiffness' : painLevel <= 7 ? 'Moderate, Restricting Pain' : 'Severe, Distressing Pain'}
                </div>

                {/* Slider */}
                <div className="w-full">
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={painLevel}
                    onChange={(e) => setPainLevel(parseInt(e.target.value))}
                    className="w-full h-2 rounded bg-bg-elevated appearance-none cursor-pointer accent-accent-indigo focus:outline-none"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-text-muted mt-2">
                    <span>1 (Comfortable)</span>
                    <span>5 (Moderate)</span>
                    <span>10 (Severe)</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Camera Device Calibration */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="text-center">
                <span className="text-[10px] uppercase font-bold tracking-wider text-accent-indigo">Step 4: AI Setup</span>
                <h2 className="text-2xl font-bold text-text-primary mt-1">Webcam calibration for skeletal tracking</h2>
                <p className="text-xs text-text-muted mt-1">
                  We use your device's camera for real-time joint-angle tracking. No raw video feed is uploaded to servers. All logic runs locally.
                </p>
              </div>

              <div className="flex flex-col items-center justify-center p-6 border border-dashed border-border-subtle rounded-xl bg-bg-deep gap-4 relative min-h-[180px]">
                {cameraAccess ? (
                  <div className="flex flex-col items-center gap-2 text-center animate-fade-in">
                    <div className="w-12 h-12 rounded-full bg-accent-emerald/10 border border-accent-emerald/20 flex items-center justify-center text-accent-emerald mb-1">
                      <ShieldCheck size={24} />
                    </div>
                    <h4 className="text-sm font-semibold text-text-primary">Camera calibrated successfully</h4>
                    <p className="text-[11px] text-text-muted max-w-sm">MediaPipe Pose model has been linked. You're ready to start your first workout session.</p>
                  </div>
                ) : isCalibrating ? (
                  <div className="flex flex-col items-center gap-3">
                    <span className="w-8 h-8 border-3 border-accent-indigo border-t-transparent rounded-full animate-spin" />
                    <span className="text-xs text-text-secondary">Requesting hardware link and loading libraries...</span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-3 text-center">
                    <Camera size={36} className="text-text-muted" />
                    <Button 
                      variant="secondary" 
                      onClick={triggerCameraCalibration}
                      className="text-xs gap-1.5"
                    >
                      <Sparkles size={14} className="text-accent-indigo" />
                      Grant Camera Permission
                    </Button>
                    <p className="text-[10px] text-text-muted max-w-xs leading-normal">
                      Accept the browser alert prompt to test and link your webcam framework.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-border-subtle">
            <Button
              variant="ghost"
              onClick={handlePrevStep}
              className={`gap-1 ${step === 1 ? 'opacity-0 pointer-events-none' : ''}`}
            >
              <ChevronLeft size={16} />
              Back
            </Button>

            <Button
              variant="primary"
              onClick={handleNextStep}
              disabled={
                (step === 1 && !selectedJoint) ||
                (step === 2 && !recoveryGoal) ||
                (step === 4 && !cameraAccess)
              }
              className="gap-1 min-w-[100px]"
            >
              {step === 4 ? 'Finish Setup' : 'Next'}
              {step < 4 && <ChevronRight size={16} />}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Onboarding;
