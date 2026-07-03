import React, { useState } from 'react';
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend 
} from 'recharts';
import Card from '../Card';
import Tabs from '../Tabs';

export const ProgressCharts = () => {
  const [activeTab, setActiveTab] = useState('recovery');

  const tabs = [
    { id: 'recovery', label: 'Recovery Trend' },
    { id: 'pain', label: 'Pain & Stiffness' },
    { id: 'rom', label: 'Range of Motion' },
    { id: 'consistency', label: 'Consistency' },
    { id: 'timeline', label: 'Timeline Goals' }
  ];

  // Dummy healthcare recovery logs
  const recoveryData = [
    { name: 'Week 1', score: 45, baseline: 40 },
    { name: 'Week 2', score: 52, baseline: 40 },
    { name: 'Week 3', score: 58, baseline: 40 },
    { name: 'Week 4', score: 65, baseline: 40 },
    { name: 'Week 5', score: 71, baseline: 40 },
    { name: 'Week 6', score: 78, baseline: 40 }
  ];

  const painData = [
    { name: 'Week 1', pain: 7, stiffness: 8 },
    { name: 'Week 2', pain: 6, stiffness: 7 },
    { name: 'Week 3', pain: 5, stiffness: 5 },
    { name: 'Week 4', pain: 4, stiffness: 5 },
    { name: 'Week 5', pain: 3, stiffness: 4 },
    { name: 'Week 6', pain: 3, stiffness: 3 }
  ];

  const romData = [
    { name: 'Mon', flexion: 92, target: 110 },
    { name: 'Tue', flexion: 94, target: 110 },
    { name: 'Wed', flexion: 95, target: 110 },
    { name: 'Thu', flexion: 98, target: 110 },
    { name: 'Fri', flexion: 100, target: 110 },
    { name: 'Sat', flexion: 101, target: 110 },
    { name: 'Sun', flexion: 102, target: 110 }
  ];

  const consistencyData = [
    { name: 'Mon', mins: 30, target: 30 },
    { name: 'Tue', mins: 25, target: 30 },
    { name: 'Wed', mins: 45, target: 30 },
    { name: 'Thu', mins: 35, target: 30 },
    { name: 'Fri', mins: 50, target: 30 },
    { name: 'Sat', mins: 20, target: 30 },
    { name: 'Sun', mins: 30, target: 30 }
  ];

  const timelineData = [
    { name: 'Phase 1', progress: 100, estimate: 100 },
    { name: 'Phase 2', progress: 78, estimate: 80 },
    { name: 'Phase 3', progress: 30, estimate: 50 },
    { name: 'Phase 4', progress: 0, estimate: 20 }
  ];

  const renderTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-panel p-3 rounded-lg shadow-lg border border-border-subtle text-xs font-mono">
          <p className="font-bold text-text-primary mb-1">{label}</p>
          {payload.map((p, index) => (
            <p key={index} style={{ color: p.color }} className="flex justify-between gap-4 font-semibold">
              <span>{p.name}:</span>
              <span>{p.value}{activeTab === 'rom' ? '°' : activeTab === 'consistency' ? ' min' : '%'}</span>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="flex flex-col text-left space-y-6" glow glowColor="indigo">
      {/* Header and navigation tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border-subtle pb-4">
        <div>
          <h3 className="text-sm font-bold text-text-primary">Clinical Metrics Trend</h3>
          <p className="text-[11px] text-text-muted">Analyze your physical telemetry and angle targets over time</p>
        </div>
        <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} variant="pill" />
      </div>

      {/* Chart Canvas Area */}
      <div className="h-[280px] w-full text-xs font-mono">
        <ResponsiveContainer width="100%" height="100%">
          {activeTab === 'recovery' && (
            <AreaChart data={recoveryData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorRecovery" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366F1" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-subtle)" />
              <XAxis dataKey="name" stroke="var(--text-muted)" fontSize={10} />
              <YAxis stroke="var(--text-muted)" domain={[0, 100]} fontSize={10} />
              <Tooltip content={renderTooltip} />
              <Legend iconSize={10} verticalAlign="top" height={36} />
              <Area 
                name="AI Recovery Score" 
                type="monotone" 
                dataKey="score" 
                stroke="#6366F1" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorRecovery)" 
                animationDuration={1500}
              />
              <Line 
                name="Initial Baseline" 
                type="monotone" 
                dataKey="baseline" 
                stroke="#71717A" 
                strokeDasharray="5 5" 
                strokeWidth={1}
                dot={false}
              />
            </AreaChart>
          )}

          {activeTab === 'pain' && (
            <LineChart data={painData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-subtle)" />
              <XAxis dataKey="name" stroke="var(--text-muted)" fontSize={10} />
              <YAxis stroke="var(--text-muted)" domain={[0, 10]} fontSize={10} />
              <Tooltip content={renderTooltip} />
              <Legend iconSize={10} verticalAlign="top" height={36} />
              <Line 
                name="Pain Index" 
                type="monotone" 
                dataKey="pain" 
                stroke="#F43F5E" 
                strokeWidth={2.5}
                activeDot={{ r: 6 }}
                animationDuration={1500}
              />
              <Line 
                name="Joint Stiffness" 
                type="monotone" 
                dataKey="stiffness" 
                stroke="#F59E0B" 
                strokeWidth={2}
                animationDuration={1500}
              />
            </LineChart>
          )}

          {activeTab === 'rom' && (
            <LineChart data={romData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-subtle)" />
              <XAxis dataKey="name" stroke="var(--text-muted)" fontSize={10} />
              <YAxis stroke="var(--text-muted)" domain={[80, 120]} fontSize={10} />
              <Tooltip content={renderTooltip} />
              <Legend iconSize={10} verticalAlign="top" height={36} />
              <Line 
                name="Actual Flexion" 
                type="monotone" 
                dataKey="flexion" 
                stroke="#10B981" 
                strokeWidth={2.5}
                activeDot={{ r: 6 }}
                animationDuration={1500}
              />
              <Line 
                name="Clinical Target" 
                type="monotone" 
                dataKey="target" 
                stroke="#71717A" 
                strokeDasharray="4 4"
                strokeWidth={1}
                dot={false}
              />
            </LineChart>
          )}

          {activeTab === 'consistency' && (
            <BarChart data={consistencyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-subtle)" />
              <XAxis dataKey="name" stroke="var(--text-muted)" fontSize={10} />
              <YAxis stroke="var(--text-muted)" fontSize={10} />
              <Tooltip content={renderTooltip} />
              <Legend iconSize={10} verticalAlign="top" height={36} />
              <Bar 
                name="Active Minutes" 
                dataKey="mins" 
                fill="#6366F1" 
                radius={[4, 4, 0, 0]}
                maxBarSize={30}
                animationDuration={1500}
              />
              <Line 
                name="Daily Target" 
                type="monotone" 
                dataKey="target" 
                stroke="#10B981" 
                strokeWidth={1.5}
                dot={false}
              />
            </BarChart>
          )}

          {activeTab === 'timeline' && (
            <AreaChart data={timelineData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-subtle)" />
              <XAxis dataKey="name" stroke="var(--text-muted)" fontSize={10} />
              <YAxis stroke="var(--text-muted)" domain={[0, 100]} fontSize={10} />
              <Tooltip content={renderTooltip} />
              <Legend iconSize={10} verticalAlign="top" height={36} />
              <Area 
                name="Est. Completion" 
                type="monotone" 
                dataKey="estimate" 
                stroke="#A1A1AA" 
                strokeWidth={1}
                fill="rgba(161, 161, 170, 0.05)"
              />
              <Area 
                name="Actual Milestone Progress" 
                type="monotone" 
                dataKey="progress" 
                stroke="#6366F1" 
                strokeWidth={2}
                fill="rgba(99, 102, 241, 0.1)"
                animationDuration={1500}
              />
            </AreaChart>
          )}
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default ProgressCharts;
