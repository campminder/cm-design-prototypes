// Add your name and prototypes here!
// Each designer gets a card on the landing page and their own route.
//
// To add a prototype:
//   1. Create your component at src/pages/{your-slug}/MyPrototype.jsx
//   2. Add an entry below with:
//      - name: display name shown on your campsite
//      - slug: URL-safe identifier (e.g. 'my-prototype' → /{slug}/my-prototype)
//      - component: filename without .jsx (must match your file name exactly)
//      - description: optional short description

export const designers = [
  {
    name: 'Michael',
    slug: 'michael',
    color: 'camp-fire-yellow',
    emoji: '👶',
    prototypes: [],
  },
  {
    name: 'Mike',
    slug: 'mike',
    color: 'camp-water',
    emoji: '🎣',
    prototypes: [],
  },
  {
    name: 'Camila',
    slug: 'camila',
    color: 'camp-green-light',
    emoji: '🌲',
    prototypes: [],
  },
  {
    name: 'Erica',
    slug: 'erica',
    color: 'camp-fire',
    emoji: '🏕️',
    prototypes: [
      { name: 'Auth0 Readiness', slug: 'auth0-readiness', component: 'Auth0Readiness', description: 'Caregiver authentication experience — from exploration to engineering handoff.' },
    ],
  },
]
