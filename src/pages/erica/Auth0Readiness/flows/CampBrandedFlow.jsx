import React, { useState } from 'react';
import { useNav } from '../NavContext';
import { CircleCheck as CheckCircleOutlineIcon } from 'lucide-react';
import { AuthLayout } from '../components/AuthLayout';
import { CampInTouchDashboard } from '../components/CampInTouchDashboard';
import { TextInput } from '../components/TextInput';
import { ALL_CAMPS } from '../campBrand';

const CAMPS = ALL_CAMPS;

export const CampBrandedFlow = () => {
  const { navigate } = useNav();
  const [step, setStep] = useState('pick-camp');
  const [selectedCamp, setSelectedCamp] = useState(CAMPS[0]);

  if (step === 'home') {
    return (
      <CampInTouchDashboard
        firstName="Jane"
        onHome={() => navigate('/auth')}
      />
    );
  }

  if (step === 'pick-camp') {
    return (
      <AuthLayout>
        <h1 className="cm-auth-title">Camp-Branded Login</h1>
        <p className="cm-auth-subtitle">
          Select a camp to see how the login page looks with their branding.
        </p>
        <div className="cm-auth-form">
          {CAMPS.map((camp) => (
            <button
              key={camp.name}
              className="cm-auth-camp-card"
              style={{ borderColor: camp.accentColor }}
              onClick={() => {
                setSelectedCamp(camp);
                setStep('login');
              }}
            >
              <div
                className="cm-auth-camp-card__logo"
                style={{ backgroundColor: camp.accentColor }}
              >
                {camp.initials}
              </div>
              <span className="cm-auth-camp-card__name">{camp.name}</span>
            </button>
          ))}
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      camp={selectedCamp}
      onBack={step === 'login' ? () => setStep('pick-camp') : undefined}
    >
      {step === 'login' && (
        <>
          <h1 className="cm-auth-title">Sign in to {selectedCamp.name}</h1>
          <p className="cm-auth-subtitle">
            Enter your credentials to access your camp account.
          </p>
          <div className="cm-auth-form">
            <TextInput
              label="Email address"
              placeholder="parent@example.com"
              type="email"
            />
            <TextInput
              label="Password"
              placeholder="Enter your password"
              type="password"
            />
            <button
              className="cm-auth-btn cm-auth-btn--primary"
              onClick={() => setStep('success')}
            >
              Sign In
            </button>
            <button
              className="cm-auth-link"
              onClick={() => navigate('/auth/password-reset')}
            >
              Forgot password?
            </button>
            <div className="cm-auth-divider">Don't have an account?</div>
            <button
              className="cm-auth-link"
              style={{ textAlign: 'center' }}
              onClick={() => navigate('/auth/signup')}
            >
              Create an account
            </button>
          </div>
        </>
      )}

      {step === 'success' && (
        <div className="cm-auth-success">
          <div className="cm-auth-success__icon">
            <CheckCircleOutlineIcon size={32} />
          </div>
          <h1 className="cm-auth-title">Welcome!</h1>
          <p className="cm-auth-subtitle">
            You're signed in to {selectedCamp.name}.
          </p>
          <button
            className="cm-auth-btn cm-auth-btn--primary"
            onClick={() => setStep('home')}
          >
            Go to My Account
          </button>
        </div>
      )}
    </AuthLayout>
  );
};
