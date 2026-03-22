import React, { useState } from 'react';
import { useNav } from '../NavContext';
import { AlertCircle as ErrorOutlineIcon } from 'lucide-react';
import { CircleCheck as CheckCircleOutlineIcon } from 'lucide-react';
import { Info as InfoOutlinedIcon } from 'lucide-react';
import { AuthLayout } from '../components/AuthLayout';
import { CAMP, CAMPMINDER_DEFAULT } from '../campBrand';

export const ExpiredLinkFlow = () => {
  const { navigate, search } = useNav();
  const searchParams = new URLSearchParams(search);
  const brand = searchParams.get('brand') === 'default' ? CAMPMINDER_DEFAULT : CAMP;
  const [scenario, setScenario] = useState('verification');
  const [step, setStep] = useState('expired');

  const email = 'jane.smith@email.com';

  return (
    <AuthLayout camp={brand}>
      {step === 'expired' && (
        <>
          <div className="cm-auth-success">
            <div
              className="cm-auth-success__icon"
              style={{
                background: 'var(--color-red-100)',
                color: 'var(--color-error)',
              }}
            >
              <ErrorOutlineIcon size={32} />
            </div>
            <h1 className="cm-auth-title">
              {scenario === 'verification'
                ? 'Your verification link has expired'
                : 'Your reset link has expired'}
            </h1>
            <p className="cm-auth-subtitle">
              {scenario === 'verification'
                ? 'The link you clicked is no longer valid. Verification links expire after 7 days for security.'
                : 'The link you clicked is no longer valid. Password reset links expire after 1 hour for security.'}
            </p>
            <p className="cm-auth-subtitle" style={{ marginTop: 0 }}>
              We can send a new one to <strong>{email}</strong>.
            </p>
          </div>
          <div className="cm-auth-form">
            <button
              className="cm-auth-btn cm-auth-btn--primary"
              onClick={() => setStep('resent')}
            >
              {scenario === 'verification'
                ? 'Resend Verification Email'
                : 'Send New Reset Link'}
            </button>
            <button
              className="cm-auth-btn cm-auth-btn--secondary"
              onClick={() => navigate('/auth')}
            >
              Back to Login
            </button>
          </div>
          <div className="cm-auth-info-banner">
            <InfoOutlinedIcon className="cm-auth-info-banner__icon" size={16} />
            <span>
              <strong>No dead end.</strong> Today, expired links show a generic
              Auth0 error page with &ldquo;contact your camp&rdquo; — no way to
              recover. Here the parent sees camp branding, understands what
              happened, and can request a new link in one click.
            </span>
          </div>

          <label className="cm-auth-test-toggle">
            Scenario:{' '}
            <button
              className="cm-auth-link"
              style={{ fontSize: 'inherit' }}
              onClick={() => {
                setScenario(scenario === 'verification' ? 'reset' : 'verification');
                setStep('expired');
              }}
            >
              Switch to {scenario === 'verification' ? 'password reset' : 'verification'}
            </button>
          </label>
        </>
      )}

      {step === 'resent' && (
        <>
          <div className="cm-auth-success">
            <div className="cm-auth-success__icon">
              <CheckCircleOutlineIcon size={32} />
            </div>
            <h1 className="cm-auth-title">
              {scenario === 'verification'
                ? 'New verification email sent!'
                : 'New reset email sent!'}
            </h1>
            <p className="cm-auth-subtitle">
              Check your inbox at <strong>{email}</strong>.
              {scenario === 'verification'
                ? ' Click the link in the new email to verify your account.'
                : ' Click the link in the new email to reset your password.'}
            </p>
          </div>
          <div className="cm-auth-form">
            <button
              className="cm-auth-btn cm-auth-btn--secondary"
              onClick={() => navigate('/auth')}
            >
              Back to Login
            </button>
          </div>
          <div className="cm-auth-info-banner">
            <InfoOutlinedIcon className="cm-auth-info-banner__icon" size={16} />
            <span>
              <strong>One-click recovery.</strong> The parent went from
              &ldquo;expired link&rdquo; to &ldquo;new email sent&rdquo; in a
              single click. No calling the camp, no confusion about what to do
              next.
            </span>
          </div>
        </>
      )}
    </AuthLayout>
  );
};
