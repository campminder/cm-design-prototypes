import React, { useState } from 'react';
import clsx from 'clsx';
import { Lock as LockOutlinedIcon, Eye as VisibilityIcon, EyeOff as VisibilityOffIcon } from 'lucide-react';
import './AuthLayout.css';

export const AuthLayout = ({
  children,
  camp,
  onBack,
  scopeActive = false,
  scopeAnnotations,
}) => {
  const [showNotes, setShowNotes] = useState(false);

  return (
    <div
      className={clsx('cm-auth', camp && 'cm-auth--branded', !showNotes && 'cm-auth--hide-notes', scopeActive && 'cm-auth--scope')}
      style={camp ? {
        '--camp-accent': camp.accentColor,
        ...(camp.backgroundUrl ? { '--camp-bg': `url(${camp.backgroundUrl})` } : {}),
      } : undefined}
    >
      {/* Camp branding above the card (Auth0 page template zone) */}
      {camp && (
        <div className="cm-auth__branding">
          {camp.logoUrl ? (
            <img
              src={camp.logoUrl}
              alt={camp.name}
              className={clsx('cm-auth__branding-logo', camp.logoFit === 'wide' && 'cm-auth__branding-logo--wide')}
            />
          ) : (
            <div className="cm-auth__branding-initials">{camp.initials}</div>
          )}
          {camp.logoFit !== 'wide' && (
            <span className="cm-auth__branding-name">{camp.name}</span>
          )}
          {camp.tagline && (
            <span className="cm-auth__branding-tagline">{camp.tagline}</span>
          )}
        </div>
      )}

      <div className="cm-auth__card">
        <div className="cm-auth__body">
          {children}

          {onBack && (
            <button className="cm-auth__back" onClick={onBack}>
              Go back
            </button>
          )}
        </div>
      </div>

      {/* Below-card zone (Auth0 page template) */}
      <p className="cm-auth__terms">
        By signing in, you agree to campminder&rsquo;s{' '}
        <button className="cm-auth__terms-link">Terms of Service</button> and{' '}
        <button className="cm-auth__terms-link">Privacy Policy</button>.
      </p>
      <div className="cm-auth__wordmark">
        <LockOutlinedIcon size={12} className="cm-auth__wordmark-lock" />
        Powered by campminder
      </div>

      {scopeActive && scopeAnnotations && scopeAnnotations.length > 0 && (
        <div className="cm-auth__scope-panel">
          <span className="cm-auth__scope-panel-title">Team Delta will build:</span>
          <ul className="cm-auth__scope-panel-list">
            {scopeAnnotations.map((note, i) => (
              <li key={i} className="cm-auth__scope-panel-item">{note}</li>
            ))}
          </ul>
        </div>
      )}

      <button
        className="cm-auth__notes-fab"
        onClick={() => setShowNotes((v) => !v)}
        title={showNotes ? 'Hide design notes' : 'Show design notes'}
      >
        {showNotes
          ? <VisibilityOffIcon size={16} />
          : <VisibilityIcon size={16} />
        }
      </button>
    </div>
  );
};
