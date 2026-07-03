import React from 'react';
import { FileText, Download, Sparkles, PenTool, CheckCircle2 } from'lucide-react';
import Card, { CardTitle, CardHeader } from '../Card';
import Button from '../Button';

export const ReportPreview = ({ onDownloadPDF }) => {
  return (
    <Card className="flex flex-col text-left" glow glowColor="indigo">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-bold text-text-primary flex items-center gap-2">
            <FileText size={16} className="text-accent-indigo" />
            Medical Report Preview
          </CardTitle>
          <Button
            variant="primary"
            size="sm"
            onClick={onDownloadPDF}
            className="gap-1.5"
          >
            <Download size={12} />
            Download PDF
          </Button>
        </div>
      </CardHeader>

      <div className="flex-1 space-y-4">
        {/* Patient Information */}
        <div className="p-4 rounded-lg bg-bg-deep/50 border border-border-subtle">
          <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
            Patient Information
          </div>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div>
              <span className="text-text-muted">Name:</span>
              <span className="text-text-primary ml-2">Alex Rivera</span>
            </div>
            <div>
              <span className="text-text-muted">Age:</span>
              <span className="text-text-primary ml-2">34</span>
            </div>
            <div>
              <span className="text-text-muted">Condition:</span>
              <span className="text-text-primary ml-2">Knee ACL Recovery</span>
            </div>
            <div>
              <span className="text-text-muted">Report Date:</span>
              <span className="text-text-primary ml-2">June 30, 2026</span>
            </div>
          </div>
        </div>

        {/* Recovery Summary */}
        <div className="p-4 rounded-lg bg-bg-deep/50 border border-border-subtle">
          <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
            Recovery Summary
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-text-secondary">Overall Recovery</span>
              <span className="text-text-primary font-bold font-mono">89%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-text-secondary">Pain Reduction</span>
              <span className="text-text-primary font-bold font-mono">24%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-text-secondary">ROM Improvement</span>
              <span className="text-text-primary font-bold font-mono">18%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-text-secondary">Sessions Completed</span>
              <span className="text-text-primary font-bold font-mono">36</span>
            </div>
          </div>
        </div>

        {/* Progress Graphs Placeholder */}
        <div className="p-4 rounded-lg bg-bg-deep/50 border border-border-subtle">
          <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
            Progress Graphs
          </div>
          <div className="h-32 bg-bg-elevated rounded-lg flex items-center justify-center border border-border-subtle">
            <div className="text-center">
              <FileText size={24} className="text-text-muted mx-auto mb-2" />
              <p className="text-xs text-text-muted">Charts will be rendered in PDF</p>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="p-4 rounded-lg bg-bg-deep/50 border border-border-subtle">
          <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
            Performance Metrics
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-bg-surface/50 rounded p-2">
              <span className="text-text-muted">Exercise Accuracy</span>
              <div className="text-text-primary font-bold font-mono">92%</div>
            </div>
            <div className="bg-bg-surface/50 rounded p-2">
              <span className="text-text-muted">Current Streak</span>
              <div className="text-text-primary font-bold font-mono">14 Days</div>
            </div>
          </div>
        </div>

        {/* Doctor Notes Placeholder */}
        <div className="p-4 rounded-lg bg-accent-amber/5 border border-accent-amber/20">
          <div className="flex items-center gap-2 text-xs font-semibold text-accent-amber mb-2">
            <PenTool size={12} />
            <span>Doctor Notes</span>
          </div>
          <p className="text-xs text-text-secondary leading-relaxed">
            Patient showing excellent progress. Continue with current exercise regimen. Monitor pain levels during extension exercises.
          </p>
        </div>

        {/* AI Summary Placeholder */}
        <div className="p-4 rounded-lg bg-accent-indigo/5 border border-accent-indigo/20">
          <div className="flex items-center gap-2 text-xs font-semibold text-accent-indigo mb-2">
            <Sparkles size={12} />
            <span>AI Summary (Coming Soon)</span>
          </div>
          <p className="text-xs text-text-secondary leading-relaxed">
            AI-powered analysis of recovery patterns will be available here.
          </p>
        </div>

        {/* Recommendations Placeholder */}
        <div className="p-4 rounded-lg bg-accent-emerald/5 border border-accent-emerald/20">
          <div className="flex items-center gap-2 text-xs font-semibold text-accent-emerald mb-2">
            <CheckCircle2 size={12} />
            <span>Recommendations</span>
          </div>
          <ul className="text-xs text-text-secondary space-y-1 list-disc list-inside">
            <li>Continue shoulder mobility exercises</li>
            <li>Increase hold time by 5 seconds</li>
            <li>Focus on stability training</li>
          </ul>
        </div>

        {/* Signature Area */}
        <div className="p-4 rounded-lg bg-bg-deep/50 border border-border-subtle">
          <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
            Signature
          </div>
          <div className="h-16 bg-bg-surface rounded-lg border border-border-subtle flex items-center justify-center">
            <p className="text-xs text-text-muted">Dr. Sarah Johnson</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ReportPreview;
