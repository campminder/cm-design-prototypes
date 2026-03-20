import { useParams, Link } from 'react-router-dom'
import { designers } from '../data/designers'
import PixelStars from '../components/PixelStars'

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

  // If a specific prototype route is hit, you can render it here.
  // For now, show the designer's prototype gallery.

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
          {/* Setup Guide */}
          <div className="mb-8 border-2 border-camp-fire-yellow/15 bg-camp-night/40 p-6">
            <h3 className="font-pixel text-camp-fire text-[10px] mb-5 tracking-wider">
              SETUP YOUR CAMPSITE
            </h3>

            <div className="space-y-4">
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
                    <code className="text-camp-green-light text-[9px] block">npm run dev</code>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="font-pixel text-camp-fire-yellow text-[10px] shrink-0">3.</span>
                <div>
                  <p className="font-pixel text-camp-fire-yellow/70 text-[8px] leading-relaxed mb-1">ADD A PROTOTYPE</p>
                  <div className="bg-camp-night/80 border border-camp-fire-yellow/10 px-3 py-2 space-y-1">
                    <code className="text-camp-fire-yellow/50 text-[9px] block">// Create your component in:</code>
                    <code className="text-camp-green-light text-[9px] block">src/pages/{designerData.slug}/MyPrototype.jsx</code>
                    <code className="text-camp-fire-yellow/50 text-[9px] block mt-2">// Then register it in:</code>
                    <code className="text-camp-green-light text-[9px] block">src/data/designers.js</code>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="font-pixel text-camp-fire-yellow text-[10px] shrink-0">4.</span>
                <div>
                  <p className="font-pixel text-camp-fire-yellow/70 text-[8px] leading-relaxed mb-1">PUSH & DEPLOY</p>
                  <div className="bg-camp-night/80 border border-camp-fire-yellow/10 px-3 py-2 space-y-1">
                    <code className="text-camp-green-light text-[9px] block">git add .</code>
                    <code className="text-camp-green-light text-[9px] block">git commit -m "Add my prototype"</code>
                    <code className="text-camp-green-light text-[9px] block">git push</code>
                  </div>
                  <p className="font-pixel text-camp-fire-yellow/40 text-[8px] mt-2 leading-relaxed">
                    VERCEL AUTO-DEPLOYS ON PUSH TO MAIN
                  </p>
                </div>
              </div>
            </div>
          </div>

          {designerData.prototypes.length === 0 ? (
            <div className="text-center py-8">
              <p className="font-pixel text-camp-fire-yellow/40 text-[10px]">
                NO PROTOTYPES YET — FOLLOW THE STEPS ABOVE TO GET STARTED
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
