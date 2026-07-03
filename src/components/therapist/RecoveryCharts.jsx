import React from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card, { CardTitle, CardHeader } from '../Card';

export const RecoveryCharts = () => {
  // Weekly Recovery Trend Data
  const weeklyRecoveryData = [
    { week: 'Week 1', recovery: 65, target: 70 },
    { week: 'Week 2', recovery: 68, target: 72 },
    { week: 'Week 3', recovery: 72, target: 74 },
    { week: 'Week 4', recovery: 75, target: 76 },
    { week: 'Week 5', recovery: 78, target: 78 },
    { week: 'Week 6', recovery: 82, target: 80 },
    { week: 'Week 7', recovery: 84, target: 82 },
    { week: 'Week 8', recovery: 87, target: 84 },
  ];

  // Patient Progress Distribution
  const progressDistribution = [
    { range: '0-20%', count: 5 },
    { range: '21-40%', count: 12 },
    { range: '41-60%', count: 28 },
    { range: '61-80%', count: 45 },
    { range: '81-100%', count: 38 },
  ];

  // Pain Trend Data
  const painTrendData = [
    { month: 'Jan', avgPain: 6.2, severe: 15, moderate: 45, mild: 40 },
    { month: 'Feb', avgPain: 5.8, severe: 12, moderate: 42, mild: 46 },
    { month: 'Mar', avgPain: 5.4, severe: 10, moderate: 40, mild: 50 },
    { month: 'Apr', avgPain: 5.1, severe: 8, moderate: 38, mild: 54 },
    { month: 'May', avgPain: 4.7, severe: 6, moderate: 35, mild: 59 },
    { month: 'Jun', avgPain: 4.3, severe: 5, moderate: 32, mild: 63 },
  ];

  // Session Completion Data
  const sessionCompletionData = [
    { name: 'Completed', value: 342, color: '#10B981' },
    { name: 'Missed', value: 28, color: '#F43F5E' },
    { name: 'Rescheduled', value: 15, color: '#F59E0B' },
  ];

  // Exercise Compliance Data
  const exerciseComplianceData = [
    { exercise: 'Shoulder Flexion', compliance: 92 },
    { exercise: 'Knee Extension', compliance: 88 },
    { exercise: 'Hip Abduction', compliance: 85 },
    { exercise: 'Ankle Dorsiflexion', compliance: 90 },
    { exercise: 'Core Stability', compliance: 87 },
  ];

  // Recovery Timeline Data
  const recoveryTimelineData = [
    { month: 'Jan', patientA: 45, patientB: 52, patientC: 38 },
    { month: 'Feb', patientA: 52, patientB: 58, patientC: 45 },
    { month: 'Mar', patientA: 60, patientB: 65, patientC: 52 },
    { month: 'Apr', patientA: 68, patientB: 72, patientC: 60 },
    { month: 'May', patientA: 75, patientB: 78, patientC: 68 },
    { month: 'Jun', patientA: 82, patientB: 85, patientC: 75 },
  ];

  const COLORS = ['#6366F1', '#10B981', '#F59E0B', '#F43F5E', '#0EA5E9'];

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
                stroke="#6366F1" 
                strokeWidth={3}
                dot={{ fill: '#6366F1', r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line 
                type="monotone" 
                dataKey="target" 
                stroke="#10B981" 
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: '#10B981', r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Patient Progress Distribution */}
      <Card glow glowColor="indigo">
        <CardHeader>
          <CardTitle className="text-sm font-bold text-text-primary">Patient Progress Distribution</CardTitle>
        </CardHeader>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={progressDistribution}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-subtle)" />
              <XAxis dataKey="range" stroke="var(--text-muted)" fontSize={12} />
              <YAxis stroke="var(--text-muted)" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--bg-surface)', 
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="count" fill="#6366F1" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Pain Trend */}
      <Card glow glowColor="rose">
        <CardHeader>
          <CardTitle className="text-sm font-bold text-text-primary">Pain Level Trend</CardTitle>
        </CardHeader>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={painTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-subtle)" />
              <XAxis dataKey="month" stroke="var(--text-muted)" fontSize={12} />
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
                dataKey="avgPain" 
                stroke="#F43F5E" 
                fill="#F43F5E" 
                fillOpacity={0.3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Session Completion */}
      <Card glow glowColor="emerald">
        <CardHeader>
          <CardTitle className="text-sm font-bold text-text-primary">Session Completion Rate</CardTitle>
        </CardHeader>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={sessionCompletionData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {sessionCompletionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--bg-surface)', 
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '8px'
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Exercise Compliance */}
      <Card glow glowColor="amber">
        <CardHeader>
          <CardTitle className="text-sm font-bold text-text-primary">Exercise Compliance</CardTitle>
        </CardHeader>
        <div className="space-y-4">
          {exerciseComplianceData.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-text-secondary font-medium">{item.exercise}</span>
                <span className="text-text-primary font-bold font-mono">{item.compliance}%</span>
              </div>
              <div className="h-2 bg-bg-elevated rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700 ease-out"
                  style={{ 
                    width: `${item.compliance}%`,
                    backgroundColor: COLORS[index % COLORS.length]
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Recovery Timeline */}
      <Card glow glowColor="sky">
        <CardHeader>
          <CardTitle className="text-sm font-bold text-text-primary">Recovery Timeline (Sample Patients)</CardTitle>
        </CardHeader>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={recoveryTimelineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-subtle)" />
              <XAxis dataKey="month" stroke="var(--text-muted)" fontSize={12} />
              <YAxis stroke="var(--text-muted)" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--bg-surface)', 
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Line type="monotone" dataKey="patientA" stroke="#6366F1" strokeWidth={2} dot={{ r: 3 }} />
              <Line type="monotone" dataKey="patientB" stroke="#10B981" strokeWidth={2} dot={{ r: 3 }} />
              <Line type="monotone" dataKey="patientC" stroke="#F59E0B" strokeWidth={2} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};

export default RecoveryCharts;
