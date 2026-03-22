import { NavProvider, useNav } from './NavContext'
import './tokens.css'
import { Auth0Hub } from './Auth0Hub'
import { AuthIndex } from './AuthIndex'
import { UserTestingIndex } from './UserTestingIndex'
import { DesignKickoff } from './DesignKickoff'
import { NewParentFlow } from './flows/NewParentFlow'
import { ReturningParentFlow } from './flows/ReturningParentFlow'
import { ForgotPasswordFlow } from './flows/ForgotPasswordFlow'
import { GuestAccountFlow } from './flows/GuestAccountFlow'
import { CampanionFlow } from './flows/CampanionFlow'
import { ExistingAccountNewCampFlow } from './flows/ExistingAccountNewCampFlow'
import { GuestMultiCaregiverFlow } from './flows/GuestMultiCaregiverFlow'
import { GuestMultiCampFlow } from './flows/GuestMultiCampFlow'
import { CaregiverPlusGuestFlow } from './flows/CaregiverPlusGuestFlow'
import { GuestToCaregiverFlow } from './flows/GuestToCaregiverFlow'
import { EmailPreviewFlow } from './flows/EmailPreviewFlow'
import { AccountLookupFlow } from './flows/AccountLookupFlow'
import { ExpiredLinkFlow } from './flows/ExpiredLinkFlow'
import { MigratedParentFlow } from './flows/MigratedParentFlow'
import { ClaimAccountFlow } from './flows/ClaimAccountFlow'
import { SignupFlow } from './flows/SignupFlow'
import { UnifiedEntryFlow } from './flows/UnifiedEntryFlow'
import { PasswordResetFlow } from './flows/PasswordResetFlow'
import { CampBrandedFlow } from './flows/CampBrandedFlow'
import { WrongPathFlow } from './flows/WrongPathFlow'
import { MultiCampFlow } from './flows/MultiCampFlow'

function Auth0Router() {
  const { path } = useNav()
  const routes = {
    '/': Auth0Hub,
    '/prototypes/auth0': Auth0Hub,
    '/prototypes/auth0/exploration': AuthIndex,
    '/prototypes/auth0/conviction-building': UserTestingIndex,
    '/prototypes/auth0/design-kickoff': DesignKickoff,
    '/auth': AuthIndex,
    '/auth/new-parent': NewParentFlow,
    '/auth/returning-parent': ReturningParentFlow,
    '/auth/forgot-password': ForgotPasswordFlow,
    '/auth/guest': GuestAccountFlow,
    '/auth/campanion': CampanionFlow,
    '/auth/existing-account-new-camp': ExistingAccountNewCampFlow,
    '/auth/guest-multi-caregiver': GuestMultiCaregiverFlow,
    '/auth/guest-multi-camp': GuestMultiCampFlow,
    '/auth/caregiver-plus-guest': CaregiverPlusGuestFlow,
    '/auth/guest-to-caregiver': GuestToCaregiverFlow,
    '/auth/emails': EmailPreviewFlow,
    '/auth/account-lookup': AccountLookupFlow,
    '/auth/expired-link': ExpiredLinkFlow,
    '/auth/migrated-parent': MigratedParentFlow,
    '/auth/claim-account': ClaimAccountFlow,
    '/auth/signup': SignupFlow,
    '/auth/unified-entry': UnifiedEntryFlow,
    '/auth/password-reset': PasswordResetFlow,
    '/auth/camp-branded': CampBrandedFlow,
    '/auth/wrong-path': WrongPathFlow,
    '/auth/multi-camp': MultiCampFlow,
  }
  const Component = routes[path] || Auth0Hub
  return <Component />
}

export default function Auth0Readiness() {
  return (
    <div className="cm-auth0-root">
      <NavProvider>
        <Auth0Router />
      </NavProvider>
    </div>
  )
}
