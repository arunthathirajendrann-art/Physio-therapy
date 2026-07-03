import React from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card, { CardTitle, CardHeader } from '../Card';

export const RecoveryCharts = () => {
  // Weekly Recovery Trend
  const weeklyRecoveryData = [
    { week: 'Week 1', recovery: 65, target: 70 },
    { week: 'Week 2', recovery: 68, target: 72 },
    { week: 'Week 3', recovery: 72, target: 74 },
    { week: 'Week 4', recovery: 75, target: 76 },
    { week: 'Week 5', recovery: 78, target: 78 },
    { week: 'Week 6', recovery: 82, target: 80 },
    { week: 'Week 7', recovery: 84, target: 82 },
    { week: 'Week 8', recovery: 89, target: 84 },
  ];

  // Pain Reduction Timeline
  const painReductionData = [
    { week: 'Week 1', pain: 7 },
    { week: 'Week 2', pain: 6 },
    { week: 'Week 3', pain: 6 },
    { week: 'Week 4', pain: 5 },
    { week: 'Week 5', pain: 4 },
    { week: 'Week 6', pain: 4 },
    { week: 'Week 7', pain: 3 },
    { week: 'Week 8', pain: 3 },
  ];

  // ROM Improvement
  const romImprovementData = [
    { week: 'Week 1', rom: 52 },
    { week: 'Week 2', rom: 58 },
    { week: 'Week 3', rom: 65 },
    { week: 'Week 4', rom: 72 },
    { week: 'Week 5', rom: 78 },
    { week: 'Week 6', rom: 84 },
    { week: 'Week 7', rom: 88 },
    { week: 'Week 8', rom: 91 },
  ];

  // Exercise Consistency
  const exerciseConsistencyData = [
    { week: 'Week 1', completed: 5, scheduled: 7 },
    { week: 'Week 2', completed: 6, scheduled: 7 },
    { week: 'Week 3', completed: 7, scheduled: 7 },
    { week: 'Week 4', completed: 6, scheduled: 7 },
    { week: 'Week 5', completed: 7, scheduled: 7 },
    { week: 'Week 6', completed: 7, scheduled: 7 },
    { week: 'Week 7', completed: 7, scheduled: 7 },
    { week: 'Week 8', completed: 7, scheduled: 7 },
  ];

  // Recovery Forecast
  const recoveryForecastData = [
    { week: 'Week 8', current: 89, forecast: 89 },
    { week: 'Week 9', current: null, forecast: 91 },
    { week: 'Week 10', current: null, forecast: 93 },
    { week: 'Week 11', current: null, forecast: 94 },
    { week: 'Week 12', current: null, forecast: 95 },
  ];

  // Exercise Accuracy
  const exerciseAccuracyData = [
    { exercise: 'Shoulder Abduction', accuracy: 94 },
    { exercise: 'Knee Extension', accuracy: 91 },
    { exercise: 'Hip Flexion', accuracy: 89 },
    { exercise: 'Ankle Dorsiflexion', accuracy: 92 },
    { exercise: 'Core Stability', accuracy: 87 },
    { exercise: 'Wrist Rotation', accuracy: 95 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Weekly Recovery Trend */}
      <Card className="col-span-1 lg:col-span-2" glow glowColor="emerald">
        <CardHeader>
          <CardTitle className="text-sm font-bold text-text-primary">Weekly Recovery Trend</CardTitle>
        </CardHeader>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={weeklyRecoveryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-subtle)" />
              <XAxis dataKey="week" stroke="var(--text-muted)" fontSize={12} />
              <YAxis stroke="var(--text-muted)" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--bg-surface)', 
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="recovery" 
                stroke="#10B981" 
                strokeWidth={3}
                dot={{ fill: '#10B981', r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line 
                type="monotone" 
                dataKey="target" 
                stroke="#6366F1" 
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: '#6366F1', r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Pain Reduction Timeline */}
      <Card glow glowColor="rose">
        <CardHeader>
          <CardTitle className="text-sm font-bold text-text-primary">Pain Reduction Timeline</CardTitle>
        </CardHeader>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={painReductionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-subtle)" />
              <XAxis dataKey="week" stroke="var(--text-muted)" fontSize={12} />
              <YAxis stroke="var(--text-muted)" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--bg-surface)', 
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '8px'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="pain" 
                stroke="#F43F5E" 
                fill="#F43F5E" 
                fillOpacity={0.3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* ROM Improvement */}
      <Card glow glowColor="sky">
        <CardHeader>
          <CardTitle className="text-sm font-bold text-text-primary">Range of Motion Improvement</CardTitle>
        </CardHeader>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={romImprovementData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-subtle)" />
              <XAxis dataKey="week" stroke="var(--text-muted)" fontSize={12} />
              <YAxis stroke="var(--text-muted)" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--bg-surface)', 
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '8px'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="rom" 
                stroke="#0EA5E9" 
                fill="#0EA5E9" 
                fillOpacity={0.3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Exercise Consistency */}
      <Card glow glowColor="indigo">
        <CardHeader>
          <CardTitle className="text-sm font-bold text-text-primary">Exercise Consistency</CardTitle>
        </CardHeader>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={exerciseConsistencyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-subtle)" />
              <XAxis dataKey="week" stroke="var(--text-muted)" fontSize={12} />
              <YAxis stroke="var(--text-muted)" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--bg-surface)', 
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Bar dataKey="completed" fill="#10B981" radius={[4, 4, 0, 0]} />
              <Bar dataKey="scheduled" fill="#6366F1" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Recovery Forecast */}
      <Card glow glowColor="amber">
        <CardHeader>
          <CardTitle className="text-sm font-bold text-text-primary">Recovery Forecast</CardTitle>
        </CardHeader>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={recoveryForecastData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-subtle)" />
              <XAxis dataKey="week" stroke="var(--text-muted)" fontSize={12} />
              <YAxis stroke="var(--text-muted)" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--bg-surface)', 
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="current" 
                stroke="#10B981" 
                strokeWidth={3}
                dot={{ fill: '#10B981', r: 4 }}
                connectNulls={false}
              />
              <Line 
                type="monotone" 
                dataKey="forecast" 
                stroke="#F59E0B" 
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: '#F59E0B', r: 3 }}
                connectNulls={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Exercise Accuracy */}
      <Card glow glowColor="emerald">
        <CardHeader>
          <CardTitle className="text-sm font-bold text-text-primary">Exercise Accuracy</CardTitle>
        </CardHeader>
        <div className="space-y-4">
          {exerciseAccuracyData.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-text-secondary font-medium">{item.exercise}</span>
                <span className="text-text-primary font-bold font-mono">{item.accuracy}%</span>
              </div>
              <div className="h-2 bg-bg-elevated rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700 ease-out bg-accent-emerald"
                  style={{ width: `${item.accuracy}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default RecoveryCharts;
