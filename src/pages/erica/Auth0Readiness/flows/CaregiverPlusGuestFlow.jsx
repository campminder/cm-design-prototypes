import React, { useState } from 'react';
import { useNav } from '../NavContext';
import { Info as InfoOutlinedIcon } from 'lucide-react';
import { CheckCircle as CheckCircleIcon } from 'lucide-react';
import { PlusCircle as AddCircleOutlineIcon } from 'lucide-react';
import { AuthLayout } from '../components/AuthLayout';
import { TextInput } from '../components/TextInput';
import { CAMP_TALL_PINES, CAMP_SUNSHINE, CAMPMINDER_DEFAULT } from '../campBrand';
import './ExistingAccountNewCampFlow.css';
import './GuestEdgeCases.css';

export const CaregiverPlusGuestFlow = () => {
  const { navigate, search } = useNav();
  const searchParams = new URLSearchParams(search);
  const brand = searchParams.get('brand') === 'default' ? CAMPMINDER_DEFAULT : CAMP_SUNSHINE;
  const [step, setStep] = useState('account-found');
  const [loginPassword, setLoginPassword] = useState('');

  return (
    <AuthLayout
      camp={brand}
      onBack={
        step === 'account-found'
          ? () => navigate('/auth')
          : step === 'password'
            ? () => setStep('account-found')
            : undefined
      }
    >
      {step === 'account-found' && (
        <>
          <h1 className="cm-auth-title">We found your campminder account!</h1>
          <div className="cm-auth-found">
            <p className="cm-auth-found__explanation">
              You're already a caregiver at {CAMP_TALL_PINES.name}.
              Confirm your identity to add guest access
              at <strong>{CAMP_SUNSHINE.name}</strong>.
            </p>
            <div className="cm-auth-found__camps">
              <div className="cm-auth-found__camp cm-auth-found__camp--existing">
                <div
                  className="cm-auth-found__camp-initials"
                  style={{ backgroundColor: CAMP_TALL_PINES.accentColor }}
                >
                  {CAMP_TALL_PINES.initials}
                </div>
                <span className="cm-auth-found__camp-name">{CAMP_TALL_PINES.name}</span>
                <span className="cm-auth-found__camp-role cm-auth-found__camp-role--caregiver">
                  Caregiver
                </span>
                <span className="cm-auth-found__camp-badge">
                  <CheckCircleIcon size={14} /> Linked
                </span>
              </div>
              <span className="cm-auth-found__connector">+</span>
              <div className="cm-auth-found__camp cm-auth-found__camp--new">
                <div
                  className="cm-auth-found__camp-initials"
                  style={{ backgroundColor: CAMP_SUNSHINE.accentColor }}
                >
                  {CAMP_SUNSHINE.initials}
                </div>
                <span className="cm-auth-found__camp-name">{CAMP_SUNSHINE.name}</span>
                <span className="cm-auth-found__camp-role cm-auth-found__camp-role--guest">
                  Guest
                </span>
                <span className="cm-auth-found__camp-badge cm-auth-found__camp-badge--adding">
                  <AddCircleOutlineIcon size={14} /> Adding
                </span>
              </div>
            </div>
          </div>
          <div className="cm-auth-form">
            <button
              className="cm-auth-btn cm-auth-btn--primary"
              onClick={() => setStep('password')}
            >
              Confirm identity
            </button>
          </div>
          <div className="cm-auth-info-banner">
            <InfoOutlinedIcon className="cm-auth-info-banner__icon" size={16} />
            <span>
              <strong>Mixed roles, one account.</strong> A caregiver can also be a
              guest at another camp. Both roles live under a single campminder
              identity — no separate accounts needed.
            </span>
          </div>
        </>
      )}

      {step === 'password' && (
        <>
          <h1 className="cm-auth-title">Welcome back, Jane</h1>
          <p className="cm-auth-subtitle">
            Enter your password to confirm your identity and
            add guest access at <strong>{CAMP_SUNSHINE.name}</strong>.
          </p>
          <div className="cm-auth-form">
            <TextInput
              label="Password"
              placeholder="Enter your password"
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <button
              className="cm-auth-btn cm-auth-btn--primary"
              disabled={!loginPassword.trim()}
              onClick={() => setStep('success')}
            >
              Continue
            </button>
            <button
              className="cm-auth-link"
              onClick={() => navigate('/auth/forgot-password')}
            >
              Forgot password?
            </button>
          </div>
          <div className="cm-auth-info-banner">
            <InfoOutlinedIcon className="cm-auth-info-banner__icon" size={16} />
            <span>
              <strong>Identity confirmation.</strong> The caregiver proves they own
              the existing account. After verification, guest access at the
              new camp is automatically added.
            </span>
          </div>
        </>
      )}

      {step === 'success' && (
        <div className="cm-auth-success">
          <div className="cm-auth-success__icon">
            <CheckCircleIcon size={36} />
          </div>
          <h1 className="cm-auth-title">Guest access added!</h1>
          <p className="cm-auth-subtitle">
            Your account now includes both roles under a single login.
          </p>
          <div className="cm-auth-found__camps" style={{ marginTop: 8 }}>
            <div className="cm-auth-found__camp cm-auth-found__camp--existing" style={{ opacity: 1 }}>
              <div
                className="cm-auth-found__camp-initials"
                style={{ backgroundColor: CAMP_TALL_PINES.accentColor }}
              >
                {CAMP_TALL_PINES.initials}
              </div>
              <span className="cm-auth-found__camp-name">{CAMP_TALL_PINES.name}</span>
              <span className="cm-auth-found__camp-role cm-auth-found__camp-role--caregiver">
                Caregiver
              </span>
              <span className="cm-auth-found__camp-badge">
                <CheckCircleIcon size={14} /> Linked
              </span>
            </div>
            <span className="cm-auth-found__connector">+</span>
            <div className="cm-auth-found__camp cm-auth-found__camp--existing" style={{ opacity: 1 }}>
              <div
                className="cm-auth-found__camp-initials"
                style={{ backgroundColor: CAMP_SUNSHINE.accentColor }}
              >
                {CAMP_SUNSHINE.initials}
              </div>
              <span className="cm-auth-found__camp-name">{CAMP_SUNSHINE.name}</span>
              <span className="cm-auth-found__camp-role cm-auth-found__camp-role--guest">
                Guest
              </span>
              <span className="cm-auth-found__camp-badge">
                <CheckCircleIcon size={14} /> Linked
              </span>
            </div>
          </div>
          <div className="cm-auth-form" style={{ marginTop: 8 }}>
            <button
              className="cm-auth-btn cm-auth-btn--primary"
              onClick={() => navigate('/auth')}
            >
              Go to {CAMP_SUNSHINE.name}
            </button>
          </div>
        </div>
      )}
    </AuthLayout>
  );
};
