import React, { useState, useEffect } from 'react';
import SettingsSidebar from '../components/settings/SettingsSidebar';
import RightInfoPanel from '../components/settings/RightInfoPanel';
import ProfileCard from '../components/settings/ProfileCard';
import MedicalProfile from '../components/settings/MedicalProfile';
import RecoveryGoals from '../components/settings/RecoveryGoals';
import ConnectedDevices from '../components/settings/ConnectedDevices';
import NotificationSettings from '../components/settings/NotificationSettings';
import PrivacyPanel from '../components/settings/PrivacyPanel';
import AccessibilityPanel from '../components/settings/AccessibilityPanel';
import AppearancePanel from '../components/settings/AppearancePanel';
import LanguagePanel from '../components/settings/LanguagePanel';
import SupportPanel from '../components/settings/SupportPanel';
import { Card } from '../components/Card';
import { motion, AnimatePresence } from 'framer-motion';
import Skeleton from '../components/Skeleton';

const sections = [
  'Profile',
  'Account',
  'Medical Profile',
  'Recovery Goals',
  'Connected Devices',
  'Notifications',
  'Privacy & Security',
  'Accessibility',
  'Appearance',
  'Language',
  'Support',
  'About',
];

const Settings = () => {
  const [section, setSection] = useState('Profile');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-bg to-bg-accent transition-colors">
      <h1 className="text-2xl font-semibold mb-6 text-text-primary">Settings</h1>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3">
          <SettingsSidebar sections={sections} value={section} onChange={setSection} />
        </div>

        <div className="col-span-6">
          <Card className="min-h-[520px]">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-semibold text-text-primary">{section}</h2>
                <p className="text-xs text-text-muted">Manage {section.toLowerCase()}</p>
              </div>
            </div>

            <div className="space-y-6">
              <AnimatePresence mode="wait">
                {loading ? (
                  <motion.div key="skeleton" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <div className="space-y-4">
                      <Skeleton className="h-8 w-1/3" />
                      <div className="grid grid-cols-2 gap-4">
                        <Skeleton className="h-40 col-span-1" />
                        <Skeleton className="h-40 col-span-1" />
                      </div>
                      <Skeleton className="h-6 w-full" />
                      <Skeleton className="h-6 w-3/4" />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key={section} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.28 }}>
                    {section === 'Profile' && <ProfileCard />}
                    {section === 'Medical Profile' && <MedicalProfile />}
                    {section === 'Recovery Goals' && <RecoveryGoals />}
                    {section === 'Connected Devices' && <ConnectedDevices />}
                    {section === 'Notifications' && <NotificationSettings />}
                    {section === 'Privacy & Security' && <PrivacyPanel />}
                    {section === 'Accessibility' && <AccessibilityPanel />}
                    {section === 'Appearance' && <AppearancePanel />}
                    {section === 'Language' && <LanguagePanel />}
                    {section === 'Support' && <SupportPanel />}

                    {![
                      'Profile',
                      'Medical Profile',
                      'Recovery Goals',
                      'Connected Devices',
                      'Notifications',
                      'Privacy & Security',
                      'Accessibility',
                      'Appearance',
                      'Language',
                      'Support',
                    ].includes(section) && (
                      <div className="text-sm text-text-muted">This section uses placeholder content.</div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Card>
        </div>

        <div className="col-span-3">
          <RightInfoPanel />
        </div>
      </div>
    </div>
  );
};

export default Settings;
