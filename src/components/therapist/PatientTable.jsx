import React, { useState } from 'react';
import { Search, Filter, ChevronDown, Eye } from 'lucide-react';
import Card, { CardTitle } from '../Card';
import Button from '../Button';

export const PatientTable = ({ patients = [], onPatientSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');
  const [filterStatus, setFilterStatus] = useState('all');

  const defaultPatients = [
    { id: 1, name: 'Alex Rivera', age: 34, condition: 'Knee ACL Recovery', recovery: 78, pain: 3, status: 'improving', risk: 'low', nextSession: 'Today, 2:00 PM' },
    { id: 2, name: 'Sarah Chen', age: 28, condition: 'Shoulder Rotator Cuff', recovery: 62, pain: 5, status: 'needs-attention', risk: 'medium', nextSession: 'Tomorrow, 10:00 AM' },
    { id: 3, name: 'Michael Torres', age: 45, condition: 'Lower Back Strain', recovery: 45, pain: 7, status: 'critical', risk: 'high', nextSession: 'Today, 4:00 PM' },
    { id: 4, name: 'Emily Watson', age: 31, condition: 'Ankle Sprain', recovery: 89, pain: 2, status: 'improving', risk: 'low', nextSession: 'Wed, 11:00 AM' },
    { id: 5, name: 'James Kim', age: 38, condition: 'Elbow Tendonitis', recovery: 71, pain: 4, status: 'improving', risk: 'low', nextSession: 'Thu, 3:00 PM' },
    { id: 6, name: 'Lisa Johnson', age: 42, condition: 'Hip Replacement', recovery: 56, pain: 6, status: 'needs-attention', risk: 'medium', nextSession: 'Fri, 9:00 AM' },
    { id: 7, name: 'David Park', age: 29, condition: 'Knee Meniscus', recovery: 92, pain: 1, status: 'completed', risk: 'low', nextSession: 'Completed' },
    { id: 8, name: 'Anna Martinez', age: 35, condition: 'Wrist Fracture', recovery: 68, pain: 4, status: 'improving', risk: 'low', nextSession: 'Mon, 2:00 PM' },
  ];

  const patientData = patients.length > 0 ? patients : defaultPatients;

  const getStatusBadge = (status) => {
    switch (status) {
      case 'improving':
        return 'bg-accent-emerald/10 text-accent-emerald border-accent-emerald/20';
      case 'needs-attention':
        return 'bg-accent-amber/10 text-accent-amber border-accent-amber/20';
      case 'critical':
        return 'bg-accent-rose/10 text-accent-rose border-accent-rose/20';
      case 'completed':
        return 'bg-accent-indigo/10 text-accent-indigo border-accent-indigo/20';
      default:
        return 'bg-bg-elevated text-text-muted border-border-subtle';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'improving': return 'Improving';
      case 'needs-attention': return 'Needs Attention';
      case 'critical': return 'Critical';
      case 'completed': return 'Completed';
      default: return status;
    }
  };

  const getRiskBadge = (risk) => {
    switch (risk) {
      case 'low': return 'text-accent-emerald';
      case 'medium': return 'text-accent-amber';
      case 'high': return 'text-accent-rose';
      default: return 'text-text-muted';
    }
  };

  const filteredPatients = patientData.filter(patient => {
    const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.condition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || patient.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const sortedPatients = [...filteredPatients].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];
    
    if (typeof aValue === 'string') {
      return sortDirection === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
    }
    return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
  });

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  return (
    <Card className="flex flex-col text-left" glow={false}>
      {/* Header */}
      <div className="pb-4 border-b border-border-subtle mb-4 flex items-center justify-between">
        <CardTitle className="text-sm font-bold text-text-primary flex items-center gap-2">
          Patient Caseload
          <span className="px-2 py-0.5 rounded-full bg-accent-indigo/10 text-accent-indigo text-[10px] font-semibold">
            {patientData.length}
          </span>
        </CardTitle>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            placeholder="Search patients or conditions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-bg-surface border border-border-subtle rounded-lg text-sm focus:outline-none focus:border-border-bright text-text-primary placeholder:text-text-muted"
          />
        </div>
        <div className="flex items-center gap-2">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 bg-bg-surface border border-border-subtle rounded-lg text-sm focus:outline-none focus:border-border-bright text-text-primary"
          >
            <option value="all">All Status</option>
            <option value="improving">Improving</option>
            <option value="needs-attention">Needs Attention</option>
            <option value="critical">Critical</option>
            <option value="completed">Completed</option>
          </select>
          <Button variant="secondary" size="sm" className="gap-1.5">
            <Filter size={14} />
            <span className="hidden sm:inline">Filter</span>
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto flex-1">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border-subtle">
              <th className="text-left py-3 px-2 text-[10px] font-semibold text-text-muted uppercase tracking-wider cursor-pointer hover:text-text-primary" onClick={() => handleSort('name')}>
                Patient <ChevronDown size={12} className="inline ml-1" />
              </th>
              <th className="text-left py-3 px-2 text-[10px] font-semibold text-text-muted uppercase tracking-wider cursor-pointer hover:text-text-primary" onClick={() => handleSort('age')}>
                Age <ChevronDown size={12} className="inline ml-1" />
              </th>
              <th className="text-left py-3 px-2 text-[10px] font-semibold text-text-muted uppercase tracking-wider">
                Condition
              </th>
              <th className="text-left py-3 px-2 text-[10px] font-semibold text-text-muted uppercase tracking-wider cursor-pointer hover:text-text-primary" onClick={() => handleSort('recovery')}>
                Recovery % <ChevronDown size={12} className="inline ml-1" />
              </th>
              <th className="text-left py-3 px-2 text-[10px] font-semibold text-text-muted uppercase tracking-wider">
                Pain Level
              </th>
              <th className="text-left py-3 px-2 text-[10px] font-semibold text-text-muted uppercase tracking-wider">
                Status
              </th>
              <th className="text-left py-3 px-2 text-[10px] font-semibold text-text-muted uppercase tracking-wider">
                Risk
              </th>
              <th className="text-left py-3 px-2 text-[10px] font-semibold text-text-muted uppercase tracking-wider">
                Next Session
              </th>
              <th className="text-center py-3 px-2 text-[10px] font-semibold text-text-muted uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedPatients.map((patient) => (
              <tr key={patient.id} className="border-b border-border-subtle hover:bg-bg-elevated/50 transition-colors">
                <td className="py-3 px-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent-indigo/10 border border-accent-indigo/20 flex items-center justify-center text-accent-indigo font-bold text-xs">
                      {patient.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-sm font-medium text-text-primary">{patient.name}</span>
                  </div>
                </td>
                <td className="py-3 px-2 text-sm text-text-secondary">{patient.age}</td>
                <td className="py-3 px-2 text-sm text-text-secondary max-w-[150px] truncate">{patient.condition}</td>
                <td className="py-3 px-2">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 bg-bg-elevated rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${
                          patient.recovery >= 80 ? 'bg-accent-emerald' :
                          patient.recovery >= 60 ? 'bg-accent-indigo' :
                          patient.recovery >= 40 ? 'bg-accent-amber' : 'bg-accent-rose'
                        }`}
                        style={{ width: `${patient.recovery}%` }}
                      />
                    </div>
                    <span className="text-sm font-bold text-text-primary font-mono">{patient.recovery}%</span>
                  </div>
                </td>
                <td className="py-3 px-2">
                  <div className="flex items-center gap-1">
                    <span className={`text-sm font-bold font-mono ${
                      patient.pain <= 3 ? 'text-accent-emerald' :
                      patient.pain <= 6 ? 'text-accent-amber' : 'text-accent-rose'
                    }`}>
                      {patient.pain}
                    </span>
                    <span className="text-xs text-text-muted">/10</span>
                  </div>
                </td>
                <td className="py-3 px-2">
                  <span className={`px-2 py-1 rounded-full text-[10px] font-semibold border ${getStatusBadge(patient.status)}`}>
                    {getStatusLabel(patient.status)}
                  </span>
                </td>
                <td className="py-3 px-2">
                  <span className={`text-xs font-semibold ${getRiskBadge(patient.risk)}`}>
                    {patient.risk.charAt(0).toUpperCase() + patient.risk.slice(1)}
                  </span>
                </td>
                <td className="py-3 px-2 text-xs text-text-secondary">{patient.nextSession}</td>
                <td className="py-3 px-2 text-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onPatientSelect && onPatientSelect(patient)}
                    className="gap-1"
                  >
                    <Eye size={14} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pt-4 border-t border-border-subtle flex items-center justify-between">
        <div className="text-xs text-text-muted">
          Showing {sortedPatients.length} of {patientData.length} patients
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm" disabled>Previous</Button>
          <Button variant="secondary" size="sm">Next</Button>
        </div>
      </div>
    </Card>
  );
};

export default PatientTable;
