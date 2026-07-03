import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Mail, Lock, HeartPulse, Sparkles, User, Activity, Globe } from 'lucide-react';
import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';
import ThemeToggle from '../components/ThemeToggle';
import { useAuth } from '../context/AuthContext';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [mode, setMode] = useState('login');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { login, register, loginWithGoogle } = useAuth();

  const from = location.state?.from?.pathname || '/patient/dashboard';

  const handleAuthError = (error) => {
    if (!error || !error.code) {
      return 'Unable to authenticate. Please try again.';
    }

    switch (error.code) {
      case 'auth/invalid-email':
      case 'auth/user-not-found':
      case 'auth/wrong-password':
        return 'Invalid email or password. Please check your credentials.';
      case 'auth/email-already-in-use':
        return 'This email is already registered. Try logging in instead.';
      case 'auth/weak-password':
        return 'Password is too weak. Use at least 6 characters.';
      case 'auth/network-request-failed':
        return 'Network error. Please check your connection and try again.';
      default:
        return error.message || 'Unable to authenticate. Please try again.';
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    setError('');
    setIsLoading(true);

    try {
      if (mode === 'register') {
        await register(email, password);
      } else {
        await login(email, password);
      }
      navigate(from, { replace: true });
    } catch (authError) {
      setError(handleAuthError(authError));
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickLogin = async (role) => {
    setError('');
    setIsLoading(true);

    try {
      if (role === 'patient') {
        await login('patient@physio.ai', 'password123');
        navigate('/patient/dashboard', { replace: true });
      } else {
        await login('therapist@physio.ai', 'password123');
        navigate('/therapist/dashboard', { replace: true });
      }
    } catch (authError) {
      setError(handleAuthError(authError));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-screen flex flex-col items-center justify-center p-6 bg-bg-deep overflow-hidden transition-colors duration-200">
      {/* Decorative background glows (Apple Health / Linear style) */}
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-accent-indigo/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-accent-emerald/10 blur-[100px] pointer-events-none" />

      {/* Top Controls */}
      <div className="absolute top-6 right-6">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-md flex flex-col items-center relative z-10">
        {/* Logo and Tagline */}
        <div className="flex items-center gap-2 mb-6">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent-indigo text-white shadow-lg shadow-accent-indigo/25">
            <HeartPulse size={22} className="animate-pulse" />
          </div>
          <span className="text-xl font-bold tracking-tight text-text-primary">
            Physio<span className="text-accent-indigo">Motion.ai</span>
          </span>
        </div>

        <Card className="w-full shadow-2xl border border-border-subtle" glow glowColor="indigo">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-text-primary">Welcome back</h2>
            <p className="text-xs text-text-muted mt-1">
              Enter your credentials to access your rehabilitation workspace
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              label="Email Address"
              type="email"
              placeholder="name@example.com"
              icon={Mail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />

            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              icon={Lock}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />

            {error && (
              <div className="text-xs text-accent-rose text-center bg-accent-rose/10 border border-accent-rose/20 p-2.5 rounded-lg font-medium">
                {error}
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              className="w-full py-2.5"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Authenticating...
                </div>
              ) : (
                mode === 'login' ? 'Sign In' : 'Create Account'
              )}
            </Button>
          </form>

          <div className="mt-4 flex items-center justify-between text-sm text-text-muted">
            <button
              type="button"
              onClick={() => {
                setError('');
                setMode((prevMode) => (prevMode === 'login' ? 'register' : 'login'));
              }}
              className="font-semibold text-accent-indigo hover:text-accent-indigo/90"
            >
              {mode === 'login' ? 'Need an account?' : 'Already have an account?'}
            </button>
            <button
              type="button"
              onClick={async () => {
                setError('');
                setIsLoading(true);
                try {
                  await loginWithGoogle();
                  navigate(from, { replace: true });
                } catch (authError) {
                  setError(handleAuthError(authError));
                } finally {
                  setIsLoading(false);
                }
              }}
              disabled={isLoading}
              className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-bg-elevated px-4 py-2 text-sm font-semibold text-text-primary hover:bg-bg-surface transition-colors duration-150"
            >
              <Globe size={16} />
              Continue with Google
            </button>
          </div>

          {/* Quick Login Section for Hackathon Demo */}
          <div className="mt-8 pt-6 border-t border-border-subtle">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles size={14} className="text-accent-amber" />
              <span className="text-[10px] uppercase font-bold tracking-wider text-text-muted">
                Quick Access Demo Accounts
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => handleQuickLogin('patient')}
                disabled={isLoading}
                className="flex flex-col items-center gap-1.5 p-3 rounded-xl border border-border-subtle bg-bg-elevated hover:bg-bg-elevated/70 text-text-secondary hover:text-text-primary hover:border-accent-indigo/30 transition-all duration-150 group"
              >
                <Activity size={18} className="text-accent-indigo group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold">Demo Patient</span>
                <span className="text-[9px] text-text-muted">Knee Rehabilitation</span>
              </button>

              <button
                type="button"
                onClick={() => handleQuickLogin('therapist')}
                disabled={isLoading}
                className="flex flex-col items-center gap-1.5 p-3 rounded-xl border border-border-subtle bg-bg-elevated hover:bg-bg-elevated/70 text-text-secondary hover:text-text-primary hover:border-accent-emerald/30 transition-all duration-150 group"
              >
                <User size={18} className="text-accent-emerald group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold">Demo Therapist</span>
                <span className="text-[9px] text-text-muted">Clinical Portal</span>
              </button>
            </div>
          </div>
        </Card>

        {/* Footer */}
        <p className="text-[10px] text-text-muted mt-6 text-center">
          By signing in, you agree to our Terms of Service and Privacy Policy.<br />
          Built for the Health-Tech AI Hackathon.
        </p>
      </div>
    </div>
  );
};

export default Login;
