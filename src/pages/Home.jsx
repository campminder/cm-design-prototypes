import { Link } from 'react-router-dom'
import { designers } from '../data/designers'
import PixelStars from '../components/PixelStars'
import PixelMountains from '../components/PixelMountains'
import PixelTree from '../components/PixelTree'
import PixelCampfire from '../components/PixelCampfire'

export default function Home() {
  return (
    <div className="min-h-screen bg-camp-night overflow-hidden relative">
      {/* Sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-camp-night via-camp-sky-dark to-camp-sky-dark" />

      {/* Stars */}
      <PixelStars />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center min-h-screen">
        {/* Header */}
        <div className="pt-16 pb-8 text-center">
          <h1 className="font-pixel text-camp-fire-yellow text-lg md:text-2xl mb-4 drop-shadow-[0_0_12px_rgba(255,215,0,0.6)]">
            CAMPMINDER
          </h1>
          <h2 className="font-pixel text-camp-fire text-xs md:text-sm mb-2">
            DESIGN PROTOTYPES
          </h2>
          <div className="flex justify-center gap-1 mt-4">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-camp-fire-yellow/30" />
            ))}
          </div>
        </div>

        {/* Designer Cards */}
        <div className="w-full max-w-4xl px-6 py-8">
          <h3 className="font-pixel text-camp-fire-yellow/60 text-[10px] text-center mb-8 tracking-widest">
            SELECT A CAMPSITE
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {designers.map((designer) => (
              <Link
                key={designer.slug}
                to={`/${designer.slug}`}
                className="group relative border-2 border-camp-fire-yellow/20 bg-camp-night/60 hover:bg-camp-night/80 hover:border-camp-fire-yellow/50 transition-all p-6 block"
              >
                {/* Pixel corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-camp-fire-yellow/40 group-hover:border-camp-fire-yellow" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-camp-fire-yellow/40 group-hover:border-camp-fire-yellow" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-camp-fire-yellow/40 group-hover:border-camp-fire-yellow" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-camp-fire-yellow/40 group-hover:border-camp-fire-yellow" />

                <div className="text-3xl mb-3">{designer.emoji}</div>
                <h4 className="font-pixel text-camp-fire-yellow text-xs mb-2">
                  {designer.name.toUpperCase()}'S CAMPSITE
                </h4>
                <p className="font-pixel text-camp-fire-yellow/40 text-[8px]">
                  {designer.prototypes.length} PROTOTYPE{designer.prototypes.length !== 1 ? 'S' : ''}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Scene */}
        <div className="flex-1 flex flex-col justify-end w-full max-w-4xl px-4">
          <div className="flex justify-center mb-0">
            <PixelMountains />
          </div>

          <div className="relative bg-camp-ground w-full py-6">
            <div className="absolute -top-4 left-0 right-0 flex">
              {[...Array(60)].map((_, i) => (
                <div
                  key={i}
                  className="flex-1 h-4"
                  style={{
                    backgroundColor:
                      i % 3 === 0 ? '#2d5a27' : i % 3 === 1 ? '#4a8c3f' : '#3a7230',
                  }}
                />
              ))}
            </div>
            <div className="flex items-end justify-center gap-8 md:gap-16">
              <PixelTree className="hidden md:flex" />
              <PixelTree />
              <PixelCampfire />
              <PixelTree />
              <PixelTree className="hidden md:flex" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full bg-camp-ground-light py-6 text-center">
          <p className="font-pixel text-[8px] md:text-[10px] text-camp-fire-yellow/70 tracking-wider">
            WHERE IDEAS COME TO CAMP
          </p>
        </div>
      </div>
    </div>
  )
}
