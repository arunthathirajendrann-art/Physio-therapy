import React from 'react';
import { FileText, Video, Image as ImageIcon, Upload, X } from'lucide-react';
import Card, { CardTitle, CardHeader } from '../Card';

export const AttachmentPanel = ({ attachments = [], onUpload, onRemove }) => {
  const attachmentTypes = [
    { id: 1, name: 'Upload Report', icon: FileText, color: 'accent-indigo' },
    { id: 2, name: 'Upload Video', icon: Video, color: 'accent-rose' },
    { id: 3, name: 'Medical Record', icon: FileText, color: 'accent-emerald' },
    { id: 4, name: 'Upload Image', icon: ImageIcon, color: 'accent-sky' },
  ];

  const defaultAttachments = [
    { id: 1, name: 'Recovery_Report_June.pdf', type: 'report', size: '2.4 MB' },
    { id: 2, name: 'Exercise_Video.mp4', type: 'video', size: '15.8 MB' },
  ];

  const attachmentData = attachments.length > 0 ? attachments : defaultAttachments;

  const getColorClass = (color) => {
    switch (color) {
      case 'accent-indigo': return 'text-accent-indigo bg-accent-indigo/10 border-accent-indigo/20';
      case 'accent-emerald': return 'text-accent-emerald bg-accent-emerald/10 border-accent-emerald/20';
      case 'accent-sky': return 'text-accent-sky bg-accent-sky/10 border-accent-sky/20';
      case 'accent-rose': return 'text-accent-rose bg-accent-rose/10 border-accent-rose/20';
      default: return 'text-text-muted bg-bg-elevated border-border-subtle';
    }
  };

  return (
    <Card className="flex flex-col text-left" glow={false}>
      <CardHeader>
        <CardTitle className="text-sm font-bold text-text-primary flex items-center gap-2">
          <Upload size={16} className="text-accent-indigo" />
          Attachments
        </CardTitle>
      </CardHeader>

      {/* Upload Options */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        {attachmentTypes.map((type) => {
          const Icon = type.icon;
          return (
            <button
              key={type.id}
              onClick={() => onUpload && onUpload(type.name)}
              className={`p-3 rounded-lg border ${getColorClass(type.color)} hover:opacity-80 transition-opacity`}
            >
              <Icon size={16} className="mx-auto mb-1" />
              <span className="text-[10px] font-medium">{type.name}</span>
            </button>
          );
        })}
      </div>

      {/* Uploaded Files */}
      {attachmentData.length > 0 && (
        <div className="space-y-2 flex-1">
          <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
            Uploaded Files
          </div>
          {attachmentData.map((attachment) => (
            <div
              key={attachment.id}
              className="p-3 rounded-lg bg-bg-deep/50 border border-border-subtle flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <FileText size={14} className="text-text-muted" />
                <div>
                  <div className="text-xs font-medium text-text-primary">{attachment.name}</div>
                  <div className="text-[10px] text-text-muted">{attachment.size}</div>
                </div>
              </div>
              <button
                onClick={() => onRemove && onRemove(attachment.id)}
                className="p-1 rounded hover:bg-bg-surface text-text-muted hover:text-accent-rose transition-colors"
              >
                <X size={12} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="pt-3 border-t border-border-subtle mt-3">
        <div className="text-[10px] text-text-muted text-center">
          Max file size: 50MB
        </div>
      </div>
    </Card>
  );
};

export default AttachmentPanel;
