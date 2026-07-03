import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { 
  Users, 
  FilePlus, 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  Bell, 
  ChevronDown,
  LogOut,
  HeartPulse
} from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';
import { useAuth } from '../context/AuthContext';

export const TherapistLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [showWorkspaceMenu, setShowWorkspaceMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const navItems = [
    { name: 'Patient Board', path: '/therapist/dashboard', icon: Users },
    { name: 'Plan Builder', path: '/therapist/builder', icon: FilePlus },
  ];

  const handleWorkspaceChange = (role) => {
    setShowWorkspaceMenu(false);
    if (role === 'therapist') {
      navigate('/therapist/dashboard');
    } else {
      navigate('/patient/dashboard');
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-bg-deep transition-colors duration-200">
      {/* Sidebar */}
      <aside 
        className={`flex flex-col border-r border-border-subtle bg-bg-surface transition-all duration-300 z-30 ${
          collapsed ? 'w-16' : 'w-64'
        }`}
      >
        {/* Workspace Switcher */}
        <div className="relative border-b border-border-subtle p-3">
          <button 
            onClick={() => setShowWorkspaceMenu(!showWorkspaceMenu)}
            className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-bg-elevated transition-colors duration-150"
          >
            <div className="flex items-center gap-2 overflow-hidden text-left">
              <div className="flex items-center justify-center w-6 h-6 rounded bg-accent-emerald text-white font-bold text-xs shrink-0">
                T
              </div>
              {!collapsed && (
                <div className="truncate">
                  <h4 className="text-xs font-bold leading-none text-text-primary">Therapist Board</h4>
                  <span className="text-[10px] text-text-muted">Clinical dashboard</span>
                </div>
              )}
            </div>
            {!collapsed && <ChevronDown size={14} className="text-text-muted shrink-0 ml-1" />}
          </button>

          {/* Workspace Dropdown */}
          {showWorkspaceMenu && !collapsed && (
            <div className="absolute left-3 right-3 top-full mt-1 glass-panel rounded-lg shadow-lg z-50 p-1 flex flex-col gap-0.5">
              <button 
                onClick={() => handleWorkspaceChange('patient')}
                className="flex items-center gap-2 w-full p-2 text-xs rounded text-left hover:bg-bg-elevated text-text-secondary hover:text-text-primary"
              >
                <div className="w-4 h-4 rounded bg-accent-indigo text-white font-bold flex items-center justify-center text-[10px]">P</div>
                Patient Portal
              </button>
              <button 
                onClick={() => handleWorkspaceChange('therapist')}
                className="flex items-center gap-2 w-full p-2 text-xs rounded text-left hover:bg-bg-elevated text-text-primary font-medium"
              >
                <div className="w-4 h-4 rounded bg-accent-emerald text-white font-bold flex items-center justify-center text-[10px]">T</div>
                Therapist Portal
              </button>
            </div>
          )}
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-150 ${
                  isActive 
                    ? 'bg-accent-emerald/10 text-accent-emerald font-medium border-l-2 border-accent-emerald rounded-l-none' 
                    : 'text-text-secondary hover:bg-bg-elevated hover:text-text-primary'
                }`}
              >
                <Icon size={18} className={isActive ? 'text-accent-emerald' : 'text-text-muted'} />
                {!collapsed && <span className="truncate">{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        {/* User Footer info */}
        <div className="p-3 border-t border-border-subtle flex justify-between items-center">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-bg-elevated border border-border-subtle flex items-center justify-center text-text-secondary">
                <HeartPulse size={12} className="text-accent-emerald" />
              </div>
              <div className="text-left overflow-hidden">
                <p className="text-xs font-medium text-text-primary truncate">Dr. Sarah Jenkins</p>
                <p className="text-[10px] text-text-muted truncate">Chief DPT, OCS</p>
              </div>
            </div>
          )}
          <button 
            onClick={() => setCollapsed(!collapsed)}
            className="p-1.5 rounded bg-bg-elevated border border-border-subtle hover:border-border-bright text-text-secondary hover:text-text-primary transition-colors duration-150 ml-auto"
          >
            {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
          </button>
        </div>
      </aside>

      {/* Main Body */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between h-14 border-b border-border-subtle bg-bg-surface/80 backdrop-blur-md px-6 z-20">
          {/* Search Trigger */}
          <div className="relative w-64 max-w-full">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
            <input 
              type="text" 
              placeholder="Search patients or templates... (Cmd K)" 
              className="w-full pl-9 pr-4 py-1.5 bg-bg-elevated border border-border-subtle rounded-lg text-xs focus:outline-none focus:border-border-bright text-text-primary placeholder:text-text-muted transition-colors duration-150"
              readOnly
              onClick={() => {}}
            />
            <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-0.5 px-1.5 py-0.5 rounded border border-border-subtle bg-bg-surface text-[9px] text-text-muted font-mono pointer-events-none">
              <span>⌘</span><span>K</span>
            </div>
          </div>

          {/* Right Header Controls */}
          <div className="flex items-center gap-3">
            {/* Status Alert Indicator */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent-emerald/10 border border-accent-emerald/20 text-accent-emerald text-[10px] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse" />
              Clinical Mode
            </div>

            {/* Notifications */}
            <button className="p-2 rounded-lg hover:bg-bg-elevated border border-border-subtle hover:border-border-bright text-text-secondary hover:text-text-primary transition-all duration-150 relative">
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-accent-rose animate-pulse" />
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Logout */}
            <button 
              onClick={async () => {
                await logout();
                navigate('/login', { replace: true });
              }}
              className="p-2 rounded-lg hover:bg-bg-elevated border border-border-subtle hover:border-accent-rose/30 text-text-secondary hover:text-accent-rose transition-all duration-150"
              title="Log out"
            >
              <LogOut size={18} />
            </button>
          </div>
        </header>

        {/* Page Content Panel */}
        <main className="flex-1 overflow-y-auto p-8 relative">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default TherapistLayout;
