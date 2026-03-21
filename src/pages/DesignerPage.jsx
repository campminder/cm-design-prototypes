import { useParams, Link } from 'react-router-dom'
import { Suspense, lazy, useState } from 'react'
import { designers } from '../data/designers'
import PixelStars from '../components/PixelStars'

function SetupGuide({ designerData }) {
  const [open, setOpen] = useState(designerData.prototypes.length === 0)

  return (
    <div className="mb-8">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between border-2 border-camp-fire-yellow/15 bg-camp-night/40 px-6 py-4 hover:border-camp-fire-yellow/30 transition-colors"
      >
        <span className="font-pixel text-camp-fire text-[10px] tracking-wider">SETUP YOUR CAMPSITE</span>
        <span className="font-pixel text-camp-fire-yellow/50 text-[10px]">{open ? '▲' : '▼'}</span>
      </button>

      {open && (
        <div className="border-2 border-t-0 border-camp-fire-yellow/15 bg-camp-night/40 p-6 space-y-4">

          {/* Pre-work */}
          <p className="font-pixel text-camp-fire-yellow/60 text-[8px] tracking-widest mb-2">BEFORE YOU START — SET UP YOUR ACCOUNTS</p>
          <div className="space-y-3 mb-6 pl-2 border-l-2 border-camp-fire-yellow/10">
            <div>
              <p className="font-pixel text-camp-fire-yellow text-[8px] mb-1">GITHUB</p>
              <p className="font-pixel text-camp-fire-yellow/40 text-[8px] leading-relaxed">Erica will get your GitHub access set up — reach out to her to get started.</p>
            </div>
            <div>
              <p className="font-pixel text-camp-fire-yellow text-[8px] mb-1">CLAUDE</p>
              <p className="font-pixel text-camp-fire-yellow/40 text-[8px] leading-relaxed">Ask <span className="text-camp-green-light">Elliot Himmelfarb</span> for access to Claude Code. You'll use it to scaffold and push your prototypes.</p>
            </div>
            <div>
              <p className="font-pixel text-camp-fire-yellow text-[8px] mb-1">VERCEL</p>
              <p className="font-pixel text-camp-fire-yellow/40 text-[8px] leading-relaxed">Sign up at <span className="text-camp-green-light">vercel.com</span> using your <span className="text-camp-green-light">@campminder.com</span> email. During signup, connect your GitHub account when prompted — this lets Vercel detect your pushes and auto-deploy. No extra config needed after that.</p>
            </div>
          </div>

          <p className="font-pixel text-camp-fire-yellow/60 text-[8px] tracking-widest mb-2">THEN — GET RUNNING LOCALLY</p>

          <div className="flex gap-3">
            <span className="font-pixel text-camp-fire-yellow text-[10px] shrink-0">1.</span>
            <div>
              <p className="font-pixel text-camp-fire-yellow/70 text-[8px] leading-relaxed mb-1">CLONE THE REPO</p>
              <div className="bg-camp-night/80 border border-camp-fire-yellow/10 px-3 py-2">
                <code className="text-camp-green-light text-[9px]">git clone https://github.com/campminder/cm-design-prototypes.git</code>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <span className="font-pixel text-camp-fire-yellow text-[10px] shrink-0">2.</span>
            <div>
              <p className="font-pixel text-camp-fire-yellow/70 text-[8px] leading-relaxed mb-1">INSTALL & RUN</p>
              <div className="bg-camp-night/80 border border-camp-fire-yellow/10 px-3 py-2 space-y-1">
                <code className="text-camp-green-light text-[9px] block">cd cm-design-prototypes</code>
                <code className="text-camp-green-light text-[9px] block">npm install</code>
                <code className="text-camp-fire-yellow/50 text-[9px] block mt-2">// Then start the server — run this in Claude Code:</code>
                <code className="text-camp-green-light text-[9px] block">/start-server</code>
                <code className="text-camp-fire-yellow/50 text-[9px] block mt-2">// Or directly in your terminal:</code>
                <code className="text-camp-green-light text-[9px] block">npm run dev</code>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <span className="font-pixel text-camp-fire-yellow text-[10px] shrink-0">3.</span>
            <div>
              <p className="font-pixel text-camp-fire-yellow/70 text-[8px] leading-relaxed mb-1">ADD A PROTOTYPE WITH CLAUDE</p>
              <div className="bg-camp-night/80 border border-camp-fire-yellow/10 px-3 py-2 space-y-1">
                <code className="text-camp-fire-yellow/50 text-[9px] block">// Open Claude Code in this repo and run:</code>
                <code className="text-camp-green-light text-[9px] block">/new-prototype</code>
                <code className="text-camp-fire-yellow/50 text-[9px] block mt-2">// Claude will scaffold your files and register them automatically</code>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <span className="font-pixel text-camp-fire-yellow text-[10px] shrink-0">4.</span>
            <div>
              <p className="font-pixel text-camp-fire-yellow/70 text-[8px] leading-relaxed mb-1">CONNECT FIGMA (ONE-TIME)</p>
              <div className="bg-camp-night/80 border border-camp-fire-yellow/10 px-3 py-2 space-y-1">
                <code className="text-camp-fire-yellow/50 text-[9px] block">// Run this in Claude Code — you'll need a Figma personal access token:</code>
                <code className="text-camp-green-light text-[9px] block">/setup-figma-mcp</code>
                <code className="text-camp-fire-yellow/50 text-[9px] block mt-2">// Claude will walk you through it</code>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <span className="font-pixel text-camp-fire-yellow text-[10px] shrink-0">5.</span>
            <div>
              <p className="font-pixel text-camp-fire-yellow/70 text-[8px] leading-relaxed mb-1">PUSH & SHARE</p>
              <div className="bg-camp-night/80 border border-camp-fire-yellow/10 px-3 py-2 space-y-1">
                <code className="text-camp-fire-yellow/50 text-[9px] block">// Go live on Vercel (pulls latest first so you don't override anyone):</code>
                <code className="text-camp-green-light text-[9px] block">/push-live</code>
                <code className="text-camp-fire-yellow/50 text-[9px] block mt-2">// Just want PM feedback first? Get a private preview link:</code>
                <code className="text-camp-green-light text-[9px] block">/push-branch</code>
              </div>
              <p className="font-pixel text-camp-fire-yellow/40 text-[8px] mt-2 leading-relaxed">
                VERCEL AUTO-DEPLOYS ON PUSH TO MAIN
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function DesignerPage() {
  const { designer, prototype } = useParams()
  const designerData = designers.find((d) => d.slug === designer)

  if (!designerData) {
    return (
      <div className="min-h-screen bg-camp-night flex items-center justify-center">
        <div className="text-center">
          <p className="font-pixel text-camp-fire text-sm mb-4">CAMPSITE NOT FOUND</p>
          <Link to="/" className="font-pixel text-camp-fire-yellow text-[10px] hover:underline">
            BACK TO BASE CAMP
          </Link>
        </div>
      </div>
    )
  }

  // If a specific prototype is requested, lazy-load and render it
  if (prototype) {
    const protoData = designerData.prototypes.find((p) => p.slug === prototype)
    if (!protoData) {
      return (
        <div className="min-h-screen bg-camp-night flex items-center justify-center">
          <div className="text-center">
            <p className="font-pixel text-camp-fire text-sm mb-4">PROTOTYPE NOT FOUND</p>
            <Link to={`/${designer}`} className="font-pixel text-camp-fire-yellow text-[10px] hover:underline">
              ← BACK TO CAMPSITE
            </Link>
          </div>
        </div>
      )
    }

    const modules = import.meta.glob('./*/*/index.jsx')
    const key = `./${designer}/${protoData.component}/index.jsx`
    const ProtoComponent = lazy(modules[key])

    return (
      <Suspense fallback={
        <div className="min-h-screen bg-camp-night flex items-center justify-center">
          <p className="font-pixel text-camp-fire-yellow text-[10px] animate-pulse">LOADING...</p>
        </div>
      }>
        <div className="fixed top-0 left-0 right-0 z-50 flex items-center gap-4 bg-camp-night/90 border-b border-camp-fire-yellow/15 px-4 py-2">
          <Link to="/" className="font-pixel text-camp-fire-yellow/50 text-[8px] hover:text-camp-fire-yellow transition-colors">
            ⌂ BASE CAMP
          </Link>
          <span className="font-pixel text-camp-fire-yellow/20 text-[8px]">/</span>
          <Link to={`/${designer}`} className="font-pixel text-camp-fire-yellow/50 text-[8px] hover:text-camp-fire-yellow transition-colors">
            {designerData.emoji} {designerData.name.toUpperCase()}'S CAMPSITE
          </Link>
          <span className="font-pixel text-camp-fire-yellow/20 text-[8px]">/</span>
          <span className="font-pixel text-camp-fire-yellow/40 text-[8px]">{protoData.name.toUpperCase()}</span>
        </div>
        <ProtoComponent />
      </Suspense>
    )
  }

  return (
    <div className="min-h-screen bg-camp-night overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-camp-night via-camp-sky-dark to-camp-sky-dark" />
      <PixelStars />

      <div className="relative z-10 flex flex-col items-center min-h-screen">
        {/* Header */}
        <div className="pt-12 pb-6 text-center">
          <Link
            to="/"
            className="font-pixel text-camp-fire-yellow/50 text-[8px] hover:text-camp-fire-yellow transition-colors mb-6 inline-block"
          >
            ← BASE CAMP
          </Link>
          <div className="text-4xl mb-4">{designerData.emoji}</div>
          <h1 className="font-pixel text-camp-fire-yellow text-sm md:text-lg mb-2 drop-shadow-[0_0_12px_rgba(255,215,0,0.6)]">
            {designerData.name.toUpperCase()}'S CAMPSITE
          </h1>
          <div className="flex justify-center gap-1 mt-4">
            {[...Array(14)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-camp-fire-yellow/30" />
            ))}
          </div>
        </div>

        {/* Prototypes */}
        <div className="w-full max-w-3xl px-6 py-8">
          {/* Setup Guide — collapsible, open by default when no prototypes */}
          <SetupGuide designerData={designerData} />

          {designerData.prototypes.length === 0 ? (
            <div className="text-center py-8">
              <p className="font-pixel text-camp-fire-yellow/40 text-[10px]">
                NO PROTOTYPES YET — ASK CLAUDE TO RUN /new-prototype TO GET STARTED
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {designerData.prototypes.map((proto) => (
                <Link
                  key={proto.slug}
                  to={`/${designerData.slug}/${proto.slug}`}
                  className="group relative border-2 border-camp-fire-yellow/20 bg-camp-night/60 hover:bg-camp-night/80 hover:border-camp-fire-yellow/50 transition-all p-5 block"
                >
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-camp-fire-yellow/40 group-hover:border-camp-fire-yellow" />
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-camp-fire-yellow/40 group-hover:border-camp-fire-yellow" />
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-camp-fire-yellow/40 group-hover:border-camp-fire-yellow" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-camp-fire-yellow/40 group-hover:border-camp-fire-yellow" />

                  <h4 className="font-pixel text-camp-fire-yellow text-[10px] mb-1">
                    {proto.name.toUpperCase()}
                  </h4>
                  {proto.description && (
                    <p className="font-pixel text-camp-fire-yellow/40 text-[8px]">
                      {proto.description}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-auto w-full bg-camp-ground-light py-6 text-center">
          <p className="font-pixel text-[8px] md:text-[10px] text-camp-fire-yellow/70 tracking-wider">
            WHERE IDEAS COME TO CAMP
          </p>
        </div>
      </div>
    </div>
  )
}
