import React, { useMemo } from 'react';
import Card, { CardTitle, CardHeader } from '../Card';

export const CalendarHeatmap = () => {
  // Generate mock year data (52 weeks, 7 days per week)
  const heatmapData = useMemo(() => {
    const data = [];
    const seedRandom = (str) => {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      return Math.abs(hash % 100) / 100;
    };

    // Construct 52 weeks of 7 days
    for (let w = 0; w < 53; w++) {
      const weekDays = [];
      for (let d = 0; d < 7; d++) {
        // Create realistic streaks and patterns using indexes
        const seedStr = `day-${w}-${d}`;
        const rand = seedRandom(seedStr);
        let level = 0;

        // Make recent weeks highly active (Alex is in active recovery)
        if (w > 45) {
          level = rand > 0.3 ? (rand > 0.7 ? 4 : 3) : 2;
        } else if (w > 20) {
          // Mid recovery
          level = rand > 0.4 ? (rand > 0.8 ? 3 : 2) : 1;
        } else {
          // Early injury period (mostly level 0 or level 1 stretches)
          level = rand > 0.75 ? 1 : 0;
        }

        // Sunday rest day pattern
        if (d === 6 && rand > 0.4) {
          level = 0;
        }

        weekDays.push(level);
      }
      data.push(weekDays);
    }
    return data;
  }, []);

  const monthLabels = [
    { label: 'Jul', colSpan: 4 },
    { label: 'Aug', colSpan: 4 },
    { label: 'Sep', colSpan: 5 },
    { label: 'Oct', colSpan: 4 },
    { label: 'Nov', colSpan: 4 },
    { label: 'Dec', colSpan: 5 },
    { label: 'Jan', colSpan: 4 },
    { label: 'Feb', colSpan: 4 },
    { label: 'Mar', colSpan: 5 },
    { label: 'Apr', colSpan: 4 },
    { label: 'May', colSpan: 4 },
    { label: 'Jun', colSpan: 5 },
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 1: return 'bg-accent-emerald/20';
      case 2: return 'bg-accent-emerald/40';
      case 3: return 'bg-accent-emerald/70';
      case 4: return 'bg-accent-emerald';
      default: return 'bg-bg-elevated border border-border-subtle/50';
    }
  };

  return (
    <Card className="flex flex-col text-left space-y-4" glow glowColor="indigo">
      <CardHeader className="border-b border-border-subtle pb-3 mb-1">
        <div>
          <CardTitle className="text-sm font-bold text-text-primary">Annual Compliance Heatmap</CardTitle>
          <p className="text-[11px] text-text-muted mt-0.5">Historical overview of your daily workout consistency over 365 days</p>
        </div>
      </CardHeader>

      <div className="flex flex-col space-y-4 overflow-x-auto pr-2 pb-2">
        {/* Heatmap Grid Wrapper */}
        <div className="min-w-[650px] space-y-1 select-none">
          
          {/* Months label row */}
          <div className="flex pl-8 text-[9px] font-mono text-text-muted font-bold h-4">
            {monthLabels.map((m, idx) => (
              <div 
                key={idx} 
                className="text-left" 
                style={{ width: `${(m.colSpan / 53) * 100}%` }}
              >
                {m.label}
              </div>
            ))}
          </div>

          {/* Core Grid Rows (7 Days) */}
          <div className="flex gap-2">
            {/* Days index col */}
            <div className="flex flex-col justify-between text-[9px] font-mono text-text-muted font-bold h-[82px] py-1 select-none shrink-0 w-6">
              <span>Mon</span>
              <span>Wed</span>
              <span>Fri</span>
            </div>

            {/* Weeks Columns */}
            <div className="flex flex-1 justify-between gap-1">
              {heatmapData.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1">
                  {week.map((level, dIdx) => (
                    <div
                      key={dIdx}
                      className={`w-[9px] h-[9px] rounded-[2px] transition-all duration-300 hover:scale-125 hover:ring-1 hover:ring-accent-indigo ${getLevelColor(level)}`}
                      title={`Week ${wIdx + 1}, Day ${dIdx + 1}: Level ${level}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legend Key */}
        <div className="flex justify-between items-center text-[10px] font-mono text-text-muted mt-2 border-t border-border-subtle pt-3">
          <span>Active Streak: <span className="font-bold text-accent-emerald">8 Days</span></span>
          <div className="flex items-center gap-1">
            <span>Less</span>
            <div className="w-[9px] h-[9px] rounded-[2px] bg-bg-elevated border border-border-subtle" />
            <div className="w-[9px] h-[9px] rounded-[2px] bg-accent-emerald/20" />
            <div className="w-[9px] h-[9px] rounded-[2px] bg-accent-emerald/40" />
            <div className="w-[9px] h-[9px] rounded-[2px] bg-accent-emerald/70" />
            <div className="w-[9px] h-[9px] rounded-[2px] bg-accent-emerald" />
            <span>More</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CalendarHeatmap;
