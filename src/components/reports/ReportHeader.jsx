import React from 'react';
import { Download, Printer, Share2, Calendar } from'lucide-react';
import Button from '../Button';
import ThemeToggle from '../ThemeToggle';

export const ReportHeader = ({
  patientName = 'Alex Rivera',
  reportPeriod = 'June 1 - June 30, 2026',
  onDownloadPDF,
  onPrint,
  onShare
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-bg-surface border border-border-subtle rounded-xl">
      {/* Patient Info */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-accent-indigo/10 border border-accent-indigo/20 flex items-center justify-center text-accent-indigo font-bold text-lg">
          {patientName.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <h2 className="text-lg font-bold text-text-primary">{patientName}</h2>
          <div className="flex items-center gap-2 text-xs text-text-muted">
            <Calendar size={12} />
            <span>{reportPeriod}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        <Button
          variant="secondary"
          size="sm"
          onClick={onDownloadPDF}
          className="gap-2"
        >
          <Download size={14} />
          <span className="hidden sm:inline">Download PDF</span>
        </Button>
        
        <Button
          variant="secondary"
          size="sm"
          onClick={onPrint}
          className="gap-2"
        >
          <Printer size={14} />
          <span className="hidden sm:inline">Print</span>
        </Button>
        
        <Button
          variant="secondary"
          size="sm"
          onClick={onShare}
          className="gap-2"
        >
          <Share2 size={14} />
          <span className="hidden sm:inline">Share</span>
        </Button>

        <ThemeToggle />
      </div>
    </div>
  );
};

export default ReportHeader;
