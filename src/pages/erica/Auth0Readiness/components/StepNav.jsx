import React from 'react';
import { useNav } from '../NavContext';
import { LayoutGrid as AppsIcon } from 'lucide-react';
import { ArrowLeft as ArrowBackIcon } from 'lucide-react';
import { ArrowRight as ArrowForwardIcon } from 'lucide-react';
import { Eye as VisibilityIcon } from 'lucide-react';
import { EyeOff as VisibilityOffIcon } from 'lucide-react';
import './StepNav.css';

export const StepNav = ({
  currentIndex,
  total,
  canGoBack,
  canGoForward,
  goBack,
  goForward,
  scopeActive,
  onScopeToggle,
}) => {
  const { navigate, search } = useNav();
  const searchParams = new URLSearchParams(search);
  const fromTesting = searchParams.get('from') === 'testing';
  const fromKickoff = searchParams.get('from') === 'kickoff';

  return (
    <div className="cm-step-nav">
      {fromTesting && (
        <>
          <button
            className="cm-step-nav__btn"
            onClick={() => navigate('/prototypes/auth0/conviction-building')}
            aria-label="Back to flows"
            title="Back to flows"
          >
            <AppsIcon size={16} />
          </button>
          <div className="cm-step-nav__divider" />
        </>
      )}
      {fromKickoff && (
        <>
          <button
            className="cm-step-nav__btn"
            onClick={() => navigate('/prototypes/auth0/design-kickoff')}
            aria-label="Back to kickoff"
            title="Back to kickoff"
          >
            <AppsIcon size={16} />
          </button>
          <div className="cm-step-nav__divider" />
        </>
      )}
      <button
        className="cm-step-nav__btn"
        onClick={goBack}
        disabled={!canGoBack}
        aria-label="Previous step"
      >
        <ArrowBackIcon size={16} />
      </button>
      <span className="cm-step-nav__label">
        {currentIndex + 1} / {total}
      </span>
      <button
        className="cm-step-nav__btn"
        onClick={goForward}
        disabled={!canGoForward}
        aria-label="Next step"
      >
        <ArrowForwardIcon size={16} />
      </button>
      {fromKickoff && onScopeToggle && (
        <>
          <div className="cm-step-nav__divider" />
          <button
            className={`cm-step-nav__btn ${scopeActive ? 'cm-step-nav__btn--scope-active' : ''}`}
            onClick={onScopeToggle}
            aria-label={scopeActive ? 'Hide scope' : 'Show scope'}
            title={scopeActive ? 'Hide scope' : 'Show scope'}
          >
            {scopeActive
              ? <VisibilityIcon size={16} />
              : <VisibilityOffIcon size={16} />
            }
          </button>
        </>
      )}
    </div>
  );
};
