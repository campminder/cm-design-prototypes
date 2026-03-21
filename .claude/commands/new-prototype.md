Add a new prototype to this shared design prototype hub.

## Steps

1. Ask the user for:
   - Their designer name/slug (must match their folder under `src/pages/` — e.g. `erica`, `mike`, `camila`, `michael`)
   - A name for the prototype (e.g. "Booking Flow Redesign")
   - A short description (optional)

2. Derive a slug from the prototype name: lowercase, spaces replaced with hyphens (e.g. "Booking Flow Redesign" → `booking-flow-redesign`)

3. Create the prototype folder and entry point:
   - Path: `src/pages/{designer-slug}/{PrototypeName}/index.jsx`
   - Use PascalCase for the folder name (e.g. `BookingFlowRedesign`)
   - Scaffold a basic React component with:
     - A "← BACK TO CAMPSITE" link using react-router-dom `Link` back to `/{designer-slug}`
     - A placeholder heading with the prototype name
     - A note that this is where their design goes
     - Use the existing camp theme classes (bg-camp-night, font-pixel, text-camp-fire-yellow, etc.)

4. Register the prototype in `src/data/designers.js`:
   - Find the designer's entry by their slug
   - Add to their `prototypes` array:
     ```js
     { name: 'Prototype Name', slug: 'prototype-slug', component: 'FolderName', description: 'Optional description' }
     ```

5. Restart the dev server so the new prototype is picked up:
   - Kill any existing Vite process: `lsof -ti :5173 | xargs kill -9 2>/dev/null || true`
   - Start it again in the background: `npm run dev`
   - Wait 2 seconds for it to boot

6. Confirm what was created and give them the local URL to preview:
   `http://localhost:5173/{designer-slug}/{prototype-slug}`

7. Ask if they want to commit and push so the PM can review it on Vercel.
   If yes, stage only their new files and the designers.js change, commit with a clear message, and push to main.
