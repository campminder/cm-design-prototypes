# CM Design Prototypes

Shared design prototype hub for multi-designer PM review. Designers add prototypes here; PMs review them via Vercel.

## Key workflows

### View prototypes locally
Run `/start-server` to start the local dev server, then open `http://localhost:5173`.

### Add a new prototype
Run `/new-prototype` and follow the prompts. It will scaffold the component, register it in `designers.js`, and restart the server.

### Connect Figma (one-time setup)
Run `/setup-figma-mcp` to connect Claude to your Figma files via MCP. You'll need a Figma personal access token — the skill walks you through it.

### Push for PM review

**Go live** — pulls latest first so you don't override anyone else's work, then pushes only your files to main:
```
/push-live
```

**Get a preview link first** — pushes to a branch and gives you a Vercel preview URL to share with the PM before it goes live:
```
/push-branch
```

Both skills only stage files in your own folder (`src/pages/{your-slug}/`) and `designers.js`, so you can't accidentally push someone else's changes.

## Project structure

- `src/pages/{designer-slug}/{PrototypeName}/index.jsx` — prototype components
- `src/data/designers.js` — registry of designers and their prototypes
- `.claude/commands/` — skill definitions for Claude Code
