import React from 'react';
import { Button } from '../../components/Button';

const PrivacyPanel = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-3">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold">Two-Factor Authentication</div>
            <div className="text-xs text-text-muted">Manage 2FA methods</div>
          </div>
          <Button size="sm" variant="secondary">Manage</Button>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold">Password</div>
            <div className="text-xs text-text-muted">Last changed 3 months ago</div>
          </div>
          <Button size="sm">Change</Button>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold">Biometric Login</div>
            <div className="text-xs text-text-muted">Use face or fingerprint</div>
          </div>
          <Button size="sm" variant="ghost">Configure</Button>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold">Device Management</div>
            <div className="text-xs text-text-muted">Active sessions and devices</div>
          </div>
          <Button size="sm" variant="secondary">Manage</Button>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold">Download My Data</div>
            <div className="text-xs text-text-muted">Export your records</div>
          </div>
          <Button size="sm">Export</Button>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold">Delete Account</div>
            <div className="text-xs text-text-muted">This action is irreversible</div>
          </div>
          <Button size="sm" variant="danger">Delete</Button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPanel;
