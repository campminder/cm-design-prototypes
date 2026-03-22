import React from 'react';
import { useNav } from './NavContext';
import { FlaskConical as ScienceIcon } from 'lucide-react';
import { Compass as ExploreIcon } from 'lucide-react';
import { Rocket as RocketLaunchIcon } from 'lucide-react';
import { ArrowRight as ArrowForwardIcon } from 'lucide-react';
import './Auth0Hub.css';

const sections = [
  {
    title: 'Exploration',
    description:
      'All caregiver journey prototypes, edge cases, reference tools, and brand toggle. The full design exploration space.',
    icon: <ExploreIcon size={24} />,
    route: '/prototypes/auth0/exploration',
    actionLabel: 'View exploration',
  },
  {
    title: 'Conviction Building',
    description:
      'Clean, shareable flows for user testing and stakeholder demos. No internal context — just the experience.',
    icon: <ScienceIcon size={24} />,
    route: '/prototypes/auth0/conviction-building',
    actionLabel: 'View flows',
  },
  {
    title: 'Design Kickoff',
    description:
      'Current vs. new design side-by-side. Toggle to see scope — what Team Delta owns highlighted, everything else in black & white.',
    icon: <RocketLaunchIcon size={24} />,
    route: '/prototypes/auth0/design-kickoff',
    actionLabel: 'View kickoff',
  },
];

export const Auth0Hub = () => {
  const { navigate } = useNav();

  return (
    <div className="cm-auth0hub">
      <div className="cm-auth0hub__hero">
        <div className="cm-auth0hub__logo-text">CampMinder</div>
        <h1 className="cm-auth0hub__title">Auth0 Migration</h1>
        <p className="cm-auth0hub__subtitle">
          Caregiver authentication experience — from exploration to engineering handoff.
        </p>
      </div>

      <div className="cm-auth0hub__grid">
        {sections.map((card) => (
          <button
            key={card.route}
            className="cm-auth0hub__card"
            onClick={() => navigate(card.route)}
            type="button"
          >
            <div className="cm-auth0hub__card-icon">{card.icon}</div>
            <h2 className="cm-auth0hub__card-title">{card.title}</h2>
            <p className="cm-auth0hub__card-desc">{card.description}</p>
            <span className="cm-auth0hub__card-action">
              {card.actionLabel} <ArrowForwardIcon size={16} />
            </span>
          </button>
        ))}
      </div>

      <button
        className="cm-auth0hub__back"
        onClick={() => navigate('/prototypes')}
        type="button"
      >
        &larr; Back to prototypes
      </button>
    </div>
  );
};
