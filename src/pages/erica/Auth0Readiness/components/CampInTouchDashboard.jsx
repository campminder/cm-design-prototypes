import React from 'react';
import {
  FileText as Description,
  Users as People,
  ClipboardList as ContentPaste,
  Tag as LocalOffer,
  Stethoscope as MedicalServices,
  User as Person,
  Phone,
  BookUser as Contacts,
  DollarSign as AttachMoney,
  Landmark as AccountBalance,
  Trophy as EmojiEvents,
  Heart as VolunteerActivism,
  Mail as Email,
  FileText as Article,
  Video as Videocam,
  Images as PhotoLibrary,
  ShoppingCart,
  Users as PeopleAlt,
  CreditCard,
  ChevronRight,
} from 'lucide-react';
import { TestingReturnModal } from './TestingReturnModal';
import './CampInTouchDashboard.css';

const SECTIONS = [
  {
    title: 'Forms Dashboard',
    links: [
      { icon: Description, iconColor: '#2d6a4f', label: 'Forms & Documents' },
      { icon: People, iconColor: '#2d6a4f', label: 'Camper Referral Form' },
    ],
  },
  {
    title: 'Your Camper',
    links: [
      { icon: ContentPaste, iconColor: '#5a7d9a', label: 'Camper Application' },
      { icon: LocalOffer, iconColor: '#c2782a', label: 'Camper Clothing Labels' },
      { icon: MedicalServices, iconColor: '#b0413e', label: 'Camper Medication Review' },
      { icon: Person, iconColor: '#c2782a', label: 'Camper Information' },
      { icon: Phone, iconColor: '#2d6a4f', label: 'Phone Reservation System' },
    ],
  },
  {
    title: 'Your Family',
    links: [
      { icon: Contacts, iconColor: '#5a7d9a', label: 'Contact Information' },
      { icon: AttachMoney, iconColor: '#b0413e', label: 'Financial Management' },
      { icon: AccountBalance, iconColor: '#2d6a4f', label: 'View Accounts' },
    ],
  },
  {
    title: 'Your Account',
    links: [
      { icon: EmojiEvents, iconColor: '#c2782a', label: 'CampStamps (20 remaining)' },
      { icon: VolunteerActivism, iconColor: '#b0413e', label: 'Online Donations' },
    ],
  },
  {
    title: 'Online Community',
    links: [
      { icon: Email, iconColor: '#5a7d9a', label: 'Email' },
      { icon: Article, iconColor: '#5a7d9a', label: 'News' },
      { icon: Videocam, iconColor: '#5a7d9a', label: 'Video' },
      { icon: PhotoLibrary, iconColor: '#5a7d9a', label: 'Photos' },
      { icon: ShoppingCart, iconColor: '#5a7d9a', label: 'Cart' },
      { icon: PeopleAlt, iconColor: '#5a7d9a', label: 'Guest Accounts' },
      { icon: CreditCard, iconColor: '#5a7d9a', label: 'CampStamps Payment' },
    ],
  },
];

export const CampInTouchDashboard = ({
  firstName = 'Jane',
  onHome,
  onLinkClick,
}) => {
  return (
    <div className="cm-cit-dash">
      {/* Top branded nav bar */}
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
        {/* Top nav */}
        <nav className="cm-cit-dash__nav">
          <div className="cm-cit-dash__nav-left">
            <span className="cm-cit-dash__nav-link">Email</span>
            <span className="cm-cit-dash__nav-sep">|</span>
            <span className="cm-cit-dash__nav-link">News</span>
            <span className="cm-cit-dash__nav-sep">|</span>
            <span className="cm-cit-dash__nav-link">Videos</span>
            <span className="cm-cit-dash__nav-sep">|</span>
            <span className="cm-cit-dash__nav-link">Photos</span>
            <span className="cm-cit-dash__nav-sep">|</span>
            <span className="cm-cit-dash__nav-link">Cart</span>
          </div>
          <div className="cm-cit-dash__nav-right">
            <span className="cm-cit-dash__nav-link">My Account</span>
            <span className="cm-cit-dash__nav-sep">|</span>
            <span className="cm-cit-dash__nav-link">Help</span>
            <span className="cm-cit-dash__nav-sep">|</span>
            <span className="cm-cit-dash__nav-link">Log Out</span>
          </div>
        </nav>

        <div className="cm-cit-dash__not-you">
          Not {firstName}? <span className="cm-cit-dash__nav-link">Click here</span>
        </div>

        {/* Welcome */}
        <h1 className="cm-cit-dash__welcome">
          Hi {firstName}, welcome to your Camp Tall Pines account!
        </h1>

        {/* Forms alert */}
        <div className="cm-cit-dash__alert">
          <div className="cm-cit-dash__alert-header">Forms</div>
          <div className="cm-cit-dash__alert-body">
            Don&rsquo;t forget to fill out your forms; they are due may 31.
          </div>
        </div>

        {/* Sections */}
        {SECTIONS.map((section) => (
          <div className="cm-cit-dash__section" key={section.title}>
            <h2 className="cm-cit-dash__section-title">{section.title}</h2>
            <div className="cm-cit-dash__link-group">
              {section.links.map((link) => {
                const clickHandler = onLinkClick?.[link.label];
                const Tag = clickHandler ? 'button' : 'div';
                const IconComp = link.icon;
                return (
                  <Tag
                    className={`cm-cit-dash__link-row${clickHandler ? ' cm-cit-dash__link-row--clickable' : ''}`}
                    key={link.label}
                    onClick={clickHandler}
                    type={clickHandler ? 'button' : undefined}
                  >
                    <IconComp
                      className="cm-cit-dash__link-icon"
                      style={{ color: link.iconColor }}
                      size={20}
                    />
                    <span className="cm-cit-dash__link-label">{link.label}</span>
                    <ChevronRight className="cm-cit-dash__link-chevron" size={16} />
                  </Tag>
                );
              })}
            </div>
          </div>
        ))}

      </div>
      </div>
      <TestingReturnModal />
    </div>
  );
};
