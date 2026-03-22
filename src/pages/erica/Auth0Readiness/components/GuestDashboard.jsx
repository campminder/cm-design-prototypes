import React from 'react';
import {
  Images as PhotoLibrary,
  Video as Videocam,
  FileText as Article,
  ChevronRight,
  Info as InfoOutlined,
} from 'lucide-react';
import { TestingReturnModal } from './TestingReturnModal';
import './CampInTouchDashboard.css';
import './GuestDashboard.css';

const GUEST_LINKS = [
  { icon: PhotoLibrary, iconColor: '#5a7d9a', label: 'Photos' },
  { icon: Videocam, iconColor: '#5a7d9a', label: 'Videos' },
  { icon: Article, iconColor: '#5a7d9a', label: 'Send Camper a Note' },
];

export const GuestDashboard = ({
  firstName = 'Ruth',
  onHome,
}) => {
  return (
    <div className="cm-cit-dash">
      <header className="cm-cit-dash__topbar">
        <div className="cm-cit-dash__topbar-inner">
          <div className="cm-cit-dash__topbar-brand">
            <div className="cm-cit-dash__topbar-name">
              <span className="cm-cit-dash__topbar-name-sub">Camp</span>
              <span className="cm-cit-dash__topbar-name-main">Tall Pines</span>
            </div>
          </div>
          <div className="cm-cit-dash__topbar-right">
            <span className="cm-cit-dash__topbar-phone">(518) 555-0142</span>
            <button
              className="cm-cit-dash__topbar-home"
              onClick={onHome}
              type="button"
            >
              Return to Index
            </button>
          </div>
        </div>
      </header>

      <div className="cm-cit-dash__body">
        <div className="cm-cit-dash__card">
          <nav className="cm-cit-dash__nav">
            <div className="cm-cit-dash__nav-left">
              <span className="cm-cit-dash__nav-link">Photos</span>
              <span className="cm-cit-dash__nav-sep">|</span>
              <span className="cm-cit-dash__nav-link">Videos</span>
              <span className="cm-cit-dash__nav-sep">|</span>
              <span className="cm-cit-dash__nav-link">Notes</span>
            </div>
            <div className="cm-cit-dash__nav-right">
              <span className="cm-cit-dash__nav-link">Help</span>
              <span className="cm-cit-dash__nav-sep">|</span>
              <span className="cm-cit-dash__nav-link">Log Out</span>
            </div>
          </nav>

          <h1 className="cm-guest-dash__welcome">
            Hi {firstName}, welcome to your Camp Tall Pines guest account!
          </h1>
          <p className="cm-guest-dash__subtitle">
            You have guest access to Tommy Smith's camp experience.
          </p>

          <div className="cm-guest-dash__info">
            <InfoOutlined style={{ flexShrink: 0, marginTop: 1 }} size={16} />
            <span>
              You have guest access to Tommy&rsquo;s camp account.
              What you can see and do depends on your camp&rsquo;s settings.
            </span>
          </div>

          <div className="cm-cit-dash__section">
            <h2 className="cm-guest-dash__section-title">Your Access</h2>
            <div className="cm-cit-dash__link-group">
              {GUEST_LINKS.map((link) => {
                const IconComp = link.icon;
                return (
                  <div className="cm-cit-dash__link-row" key={link.label}>
                    <IconComp
                      className="cm-cit-dash__link-icon"
                      style={{ color: link.iconColor }}
                      size={20}
                    />
                    <span className="cm-cit-dash__link-label">{link.label}</span>
                    <ChevronRight className="cm-cit-dash__link-chevron" size={16} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <TestingReturnModal />
    </div>
  );
};
