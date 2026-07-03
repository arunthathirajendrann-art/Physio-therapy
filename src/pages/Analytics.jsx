import React from 'react';
import ReportHeader from '../components/reports/ReportHeader';
import SummaryCards from '../components/reports/SummaryCards';
import RecoveryCharts from '../components/reports/RecoveryCharts';
import SessionHistory from '../components/reports/SessionHistory';
import ComparisonPanel from '../components/reports/ComparisonPanel';
import RecoveryTimeline from '../components/reports/RecoveryTimeline';
import BodyPerformance from '../components/reports/BodyPerformance';
import ReportPreview from '../components/reports/ReportPreview';
import RecommendationsPanel from '../components/reports/RecommendationsPanel';
import Achievements from '../components/reports/Achievements';

export const Analytics = () => {
  const handleDownloadPDF = () => {
    console.log('Download PDF');
  };

  const handlePrint = () => {
    console.log('Print report');
  };

  const handleShare = () => {
    console.log('Share report');
  };

  return (
    <div className="space-y-6 text-left max-w-[1800px] mx-auto">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-text-primary">Recovery Analytics</h1>
        <p className="text-xs text-text-muted mt-1">Track your recovery progress with detailed analytics and reports.</p>
      </div>

      {/* Report Header */}
      <ReportHeader
        patientName="Alex Rivera"
        reportPeriod="June 1 - June 30, 2026"
        onDownloadPDF={handleDownloadPDF}
        onPrint={handlePrint}
        onShare={handleShare}
      />

      {/* Summary Cards */}
      <SummaryCards />

      {/* Recovery Charts */}
      <RecoveryCharts />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Session History */}
        <div className="lg:col-span-1">
          <SessionHistory />
        </div>

        {/* Comparison Panel */}
        <div className="lg:col-span-1">
          <ComparisonPanel />
        </div>
      </div>

      {/* Recovery Timeline */}
      <RecoveryTimeline />

      {/* Body Performance */}
      <BodyPerformance />

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Report Preview */}
        <div className="lg:col-span-2">
          <ReportPreview onDownloadPDF={handleDownloadPDF} />
        </div>

        {/* Right Column */}
        <div className="lg:col-span-1 space-y-4">
          <RecommendationsPanel />
          <Achievements />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
