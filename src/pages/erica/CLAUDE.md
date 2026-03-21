# Welcome to your campsite, Erica

This is your workspace in the CM Design Prototypes hub. Use Claude Code here to build and push prototypes for PM review.

## Before you start — set up your accounts

**GitHub** — Erica will get your GitHub access set up. Reach out to her to get started.

**Claude** — Ask Elliot Himmelfarb for access to Claude Code. You'll use it to scaffold and push your prototypes.

**Vercel** — Sign up at vercel.com using your @campminder.com email. During signup, connect your GitHub account when prompted — this lets Vercel detect your pushes and auto-deploy. No extra config needed after that.

## Get running locally

**1. Clone the repo**
```
git clone https://github.com/campminder/cm-design-prototypes.git
```

**2. Install & run**
```
cd cm-design-prototypes
npm install
```

Then start the server — run this in Claude Code:
```
/start-server
```

Or directly in your terminal:
```
npm run dev
```

## Key skills (run these in Claude Code)

**Add a prototype**
```
/new-prototype
```
Claude will scaffold your files and register them automatically.

**Connect Figma (one-time setup)**
```
/setup-figma-mcp
```
You'll need a Figma personal access token — the skill walks you through it.

**Push & share**
```
/push-live
```
Goes live on Vercel — pulls latest first so you don't override anyone else's work.

```
/push-branch
```
Just want PM feedback first? Get a private preview link before going live.

Vercel auto-deploys on push to main.

## Your folder
Your prototypes live in `src/pages/erica/`. You can't accidentally push anyone else's files.
