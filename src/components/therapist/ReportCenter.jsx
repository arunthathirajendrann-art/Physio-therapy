import React from 'react';
import { FileText, Download, Share2, Sparkles, Calendar, TrendingUp } from 'lucide-react';
import Card, { CardTitle, CardHeader } from '../Card';
import Button from '../Button';

export const ReportCenter = ({ onDownload, onShare, onViewAI }) => {
  const recentReports = [
    { id: 1, patient: 'Alex Rivera', date: 'Jun 28, 2026', type: 'Weekly Progress', status: 'ready' },
    { id: 2, patient: 'Sarah Chen', date: 'Jun 27, 2026', type: 'Initial Assessment', status: 'ready' },
    { id: 3, patient: 'Michael Torres', date: 'Jun 26, 2026', type: 'Recovery Summary', status: 'ready' },
    { id: 4, patient: 'Emily Watson', date: 'Jun 25, 2026', type: 'Monthly Review', status: 'ready' },
  ];

  const recoverySummary = {
    totalPatients: 128,
    averageRecovery: 84,
    improvedThisMonth: 34,
    completedPrograms: 12,
  };

  return (
    <Card className="flex flex-col text-left" glow glowColor="indigo">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText size={16} className="text-accent-indigo" />
            <CardTitle className="text-sm font-bold text-text-primary">Report Center</CardTitle>
          </div>
          <Button variant="secondary" size="sm" className="gap-1.5 text-xs">
            <FileText size={12} />
            New Report
          </Button>
        </div>
      </CardHeader>

      {/* Recovery Summary */}
      <div className="p-4 rounded-xl bg-gradient-to-br from-accent-indigo/10 to-accent-emerald/10 border border-accent-indigo/20 mb-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-accent-indigo mb-3">
          <TrendingUp size={12} />
          <span>Recovery Summary</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <div className="text-[10px] text-text-muted uppercase tracking-wider">Avg Recovery</div>
            <div className="text-xl font-bold text-text-primary font-mono">{recoverySummary.averageRecovery}%</div>
          </div>
          <div>
            <div className="text-[10px] text-text-muted uppercase tracking-wider">Improved</div>
            <div className="text-xl font-bold text-text-primary font-mono">{recoverySummary.improvedThisMonth}</div>
          </div>
          <div>
            <div className="text-[10px] text-text-muted uppercase tracking-wider">Completed</div>
            <div className="text-xl font-bold text-text-primary font-mono">{recoverySummary.completedPrograms}</div>
          </div>
          <div>
            <div className="text-[10px] text-text-muted uppercase tracking-wider">Total Patients</div>
            <div className="text-xl font-bold text-text-primary font-mono">{recoverySummary.totalPatients}</div>
          </div>
        </div>
      </div>

      {/* Latest Reports */}
      <div className="space-y-3 mb-4 flex-1">
        <div className="flex items-center gap-2 text-xs font-semibold text-text-muted uppercase tracking-wider">
          <FileText size={12} />
          <span>Latest Reports</span>
        </div>
        
        {recentReports.map((report) => (
          <div
            key={report.id}
            className="p-3 rounded-lg bg-bg-deep/50 border border-border-subtle hover:border-border-bright transition-all duration-200"
          >
            <div className="flex items-start justify-between mb-1">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-accent-indigo/10 border border-accent-indigo/20 flex items-center justify-center text-accent-indigo font-bold text-xs">
                  {report.patient.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-sm font-medium text-text-primary">{report.patient}</h4>
                  <p className="text-[10px] text-text-muted">{report.type}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 text-[10px] text-text-muted">
                  <Calendar size={10} />
                  <span>{report.date}</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-2 mt-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => onDownload && onDownload(report)}
                className="flex-1 gap-1 text-[10px]"
              >
                <Download size={10} />
                PDF
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => onShare && onShare(report)}
                className="flex-1 gap-1 text-[10px]"
              >
                <Share2 size={10} />
                Share
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* AI Summary */}
      <div className="p-4 rounded-xl bg-accent-amber/5 border border-accent-amber/20">
        <div className="flex items-center gap-2 text-xs font-semibold text-accent-amber mb-2">
          <Sparkles size={12} />
          <span>AI Summary (Coming Soon)</span>
        </div>
        <p className="text-xs text-text-secondary leading-relaxed">
          AI-powered analysis of patient recovery patterns will be available here. Get insights on trends, anomalies, and recommendations.
        </p>
        <Button
          variant="secondary"
          size="sm"
          onClick={onViewAI}
          className="w-full mt-3 gap-1.5 text-xs"
          disabled
        >
          <Sparkles size={12} />
          Generate AI Summary
        </Button>
      </div>
    </Card>
  );
};

export default ReportCenter;
