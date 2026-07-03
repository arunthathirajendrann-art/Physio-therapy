import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Activity,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Users,
  ArrowRight,
  Clock3,
  FileSearch,
  Target,
  AudioWaveform,
  CheckCircle,
} from 'lucide-react';
import Card from '../components/Card';

const featureCards = [
  {
    icon: Activity,
    title: 'Real-time motion coaching',
    description: 'Camera-based exercise guidance with instant form correction and adaptive pacing.',
  },
  {
    icon: HeartPulse,
    title: 'Personalized recovery plans',
    description: 'Data-driven protocols tailored to injury, progress, and patient goals.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure clinical collaboration',
    description: 'Share outcomes, notes, and alerts with your care team in one secure hub.',
  },
];

const workSteps = [
  {
    label: 'Assess',
    summary: 'Capture baseline mobility and pain patterns with a guided intake flow.',
    icon: FileSearch,
  },
  {
    label: 'Guide',
    summary: 'Deliver personalized rehab sessions and visual exercise cues.',
    icon: Target,
  },
  {
    label: 'Monitor',
    summary: 'Track adherence, range-of-motion, and technique over every session.',
    icon: AudioWaveform,
  },
  {
    label: 'Improve',
    summary: 'Optimize outcomes with AI insights, trend alerts, and progress coaching.',
    icon: CheckCircle,
  },
];

const benefits = [
  {
    title: 'Stronger patient confidence',
    description: 'Patients recover sooner with interactive guidance and consistent feedback.',
  },
  {
    title: 'Faster clinician decisions',
    description: 'Actionable reports and alerts help therapists prioritize high-risk patients.',
  },
  {
    title: 'Clear progress visibility',
    description: 'Track mobility, pain, and adherence in a single health-focused dashboard.',
  },
];

const testimonials = [
  {
    quote: 'PhysioSense AI transformed how my patients engage with rehab. They feel supported between visits and my outcomes are clearer than ever.',
    author: 'Dr. Anita Roy',
    role: 'PT Clinic Director',
  },
  {
    quote: 'The motion coaching feedback is remarkably intuitive. I can see which exercises are improving and where to safely push harder.',
    author: 'Jordan Lee',
    role: 'Post-op Knee Patient',
  },
];

const faqs = [
  {
    question: 'Can I use this with existing clinic workflows?',
    answer: 'Yes. PhysioSense AI is designed to complement current patient programs with exportable reports and clinician-facing dashboards.',
  },
  {
    question: 'How does the app protect sensitive health data?',
    answer: 'We use encrypted storage and secure authentication to keep progress, sessions, and notes private by default.',
  },
  {
    question: 'What devices are supported?',
    answer: 'Any laptop or tablet with a camera works. The platform also syncs with connected wearable sensors for advanced analytics.',
  },
];

const Landing = () => {
  return (
    <div className="relative min-h-screen bg-bg-deep text-text-primary overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-indigo/10 via-transparent to-accent-emerald/10 pointer-events-none" />
      <div className="absolute top-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent-indigo/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent-emerald/10 blur-3xl" />

      <main className="relative mx-auto flex max-w-7xl flex-col gap-20 px-6 py-14 lg:px-10">
        <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-indigo/20 bg-accent-indigo/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-indigo shadow-sm shadow-accent-indigo/5">
              <Sparkles size={14} />
              Launching next-gen rehab AI
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl font-bold leading-tight tracking-tight text-text-primary sm:text-6xl">
                PhysioSense AI for smarter recovery journeys.
              </h1>
              <p className="max-w-2xl text-base text-text-secondary sm:text-lg">
                Combine clinical rehabilitation with AI-powered motion tracking, personalized care plans, and remote progress reporting for patients and therapists.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link to="/login" className="inline-flex items-center justify-center rounded-full bg-accent-indigo px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-indigo/25 transition hover:bg-accent-indigo/90">
                Get started
                <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link to="/login" className="inline-flex items-center justify-center rounded-full border border-border-subtle bg-bg-surface px-6 py-3 text-sm font-semibold text-text-primary transition hover:border-accent-indigo/30 hover:bg-bg-elevated">
                Request a demo
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-border-subtle bg-bg-surface p-5 shadow-glass">
                <div className="text-3xl font-bold text-text-primary">98%</div>
                <p className="text-sm text-text-muted">Exercise adherence for guided rehab journeys</p>
              </div>
              <div className="rounded-3xl border border-border-subtle bg-bg-surface p-5 shadow-glass">
                <div className="text-3xl font-bold text-text-primary">25k+</div>
                <p className="text-sm text-text-muted">Mobility sessions tracked with AI feedback</p>
              </div>
              <div className="rounded-3xl border border-border-subtle bg-bg-surface p-5 shadow-glass">
                <div className="text-3xl font-bold text-text-primary">24/7</div>
                <p className="text-sm text-text-muted">Patient guidance between clinic visits</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="glass-panel border border-border-subtle p-8 shadow-glass">
              <div className="flex items-center justify-between gap-4 text-sm text-text-muted">
                <span className="font-semibold text-text-primary">Workspace preview</span>
                <span className="rounded-full bg-bg-elevated px-3 py-1">Live insights</span>
              </div>
              <div className="mt-8 grid gap-4">
                <div className="rounded-3xl bg-gradient-to-r from-accent-indigo/10 to-accent-emerald/10 p-6">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-accent-indigo">Recovery score</p>
                      <p className="mt-2 text-3xl font-bold text-text-primary">87</p>
                    </div>
                    <div className="rounded-2xl bg-white/90 p-3 shadow-sm">
                      <Users size={26} className="text-accent-emerald" />
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-text-muted">Patient progress, adherence, and therapy dosages in one view.</p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl bg-bg-surface p-5 shadow-sm border border-border-subtle">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-text-muted">Next session</p>
                    <p className="mt-3 text-sm font-semibold text-text-primary">Knee stability training</p>
                    <p className="mt-2 text-xs text-text-muted">7 min · 16 reps · tailored range-of-motion</p>
                  </div>
                  <div className="rounded-3xl bg-bg-surface p-5 shadow-sm border border-border-subtle">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-text-muted">AI insights</p>
                    <p className="mt-3 text-sm font-semibold text-text-primary">Technique drift detected</p>
                    <p className="mt-2 text-xs text-text-muted">Suggested form cues for improved control.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="space-y-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent-indigo">Why PhysioSense AI</p>
            <h2 className="mt-3 text-3xl font-bold text-text-primary sm:text-4xl">
              A modern recovery platform for patients and care teams.
            </h2>
            <p className="mt-4 text-base text-text-secondary sm:text-lg">
              Built to reduce friction, improve compliance, and help clinicians scale personalized rehabilitation with confidence.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {featureCards.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="p-6 border border-border-subtle bg-bg-surface shadow-glass hover:shadow-glass-indigo/50 transition-shadow">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-accent-indigo/10 text-accent-indigo">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-text-primary">{feature.title}</h3>
                  <p className="mt-3 text-sm text-text-secondary">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent-emerald">How it works</p>
            <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">From intake to informed recovery.</h2>
            <p className="max-w-2xl text-base text-text-secondary">
              PhysioSense AI guides every session with evidence-based protocols, motion analysis, and clinician-backed recommendations.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {workSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.label} className="rounded-3xl border border-border-subtle bg-bg-surface p-6 shadow-sm">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-sky/10 text-accent-sky">
                    <Icon size={20} />
                  </div>
                  <p className="mt-5 font-semibold text-text-primary">{step.label}</p>
                  <p className="mt-3 text-sm text-text-secondary">{step.summary}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="rounded-3xl border border-border-subtle bg-bg-surface p-8 shadow-glass">
            <div className="flex items-center gap-3 text-sm text-text-muted">
              <Clock3 size={18} className="text-accent-emerald" />
              <span>Recovery analytics designed for rapid patient engagement.</span>
            </div>
            <div className="mt-8 grid gap-5">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="rounded-3xl bg-bg-elevated p-5">
                  <p className="text-sm font-semibold text-text-primary">{benefit.title}</p>
                  <p className="mt-2 text-sm text-text-secondary">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {testimonials.map((testimony) => (
              <Card key={testimony.author} className="p-6 border border-border-subtle bg-bg-surface shadow-glass">
                <p className="text-sm leading-7 text-text-secondary">“{testimony.quote}”</p>
                <div className="mt-6">
                  <p className="font-semibold text-text-primary">{testimony.author}</p>
                  <p className="text-xs uppercase tracking-[0.22em] text-text-muted">{testimony.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent-indigo">FAQs</p>
            <h2 className="mt-3 text-3xl font-bold text-text-primary">Answers to common questions.</h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {faqs.map((faq) => (
              <Card key={faq.question} className="p-6 border border-border-subtle bg-bg-surface shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-2xl bg-accent-indigo/10 p-3 text-accent-indigo">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary">{faq.question}</h3>
                    <p className="mt-3 text-sm text-text-secondary">{faq.answer}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-border-subtle bg-gradient-to-r from-accent-indigo/10 via-transparent to-accent-emerald/10 p-8 shadow-glass">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent-emerald">Ready to modernize rehab?</p>
              <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">Launch your first AI-assisted recovery program today.</h2>
              <p className="max-w-2xl text-base text-text-secondary">
                From interactive patient sessions to clinician insights, PhysioSense AI keeps care moving forward with clarity and confidence.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/login" className="inline-flex items-center justify-center rounded-full bg-accent-emerald px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-emerald/25 transition hover:bg-accent-emerald/90">
                Start your demo
              </Link>
              <Link to="/login" className="inline-flex items-center justify-center rounded-full border border-border-subtle bg-bg-surface px-6 py-3 text-sm font-semibold text-text-primary transition hover:border-accent-indigo/30 hover:bg-bg-elevated">
                Contact sales
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border-subtle bg-bg-surface/80 py-8 text-sm text-text-secondary">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <div>
            <p className="font-semibold text-text-primary">PhysioSense AI</p>
            <p className="mt-1 text-xs text-text-muted">AI rehab experiences for clinicians and patients.</p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            <Link to="/login" className="hover:text-accent-indigo">Login</Link>
            <Link to="/onboarding" className="hover:text-accent-indigo">Get started</Link>
            <Link to="/patient/dashboard" className="hover:text-accent-indigo">Patient app</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
