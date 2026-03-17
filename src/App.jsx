import PixelTree from "./components/PixelTree";
import PixelTent from "./components/PixelTent";
import PixelCampfire from "./components/PixelCampfire";
import PixelMountains from "./components/PixelMountains";
import PixelStars from "./components/PixelStars";

export default function App() {
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

        {/* Scene */}
        <div className="flex-1 flex flex-col justify-end w-full max-w-4xl px-4">
          {/* Mountains */}
          <div className="flex justify-center mb-0">
            <PixelMountains />
          </div>

          {/* Ground scene */}
          <div className="relative bg-camp-ground w-full py-8">
            {/* Grass edge */}
            <div className="absolute -top-4 left-0 right-0 flex">
              {[...Array(60)].map((_, i) => (
                <div
                  key={i}
                  className="flex-1 h-4"
                  style={{
                    backgroundColor:
                      i % 3 === 0
                        ? "#2d5a27"
                        : i % 3 === 1
                          ? "#4a8c3f"
                          : "#3a7230",
                  }}
                />
              ))}
            </div>

            {/* Scene elements */}
            <div className="flex items-end justify-center gap-6 md:gap-12">
              <PixelTree className="hidden md:flex" />
              <PixelTree />
              <PixelTent />
              <PixelCampfire />
              <PixelTent />
              <PixelTree />
              <PixelTree className="hidden md:flex" />
            </div>
          </div>

          {/* Water / Lake */}
          <div className="relative w-full h-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-camp-water to-camp-water-light" />
            <div className="absolute inset-0 flex flex-wrap">
              {[...Array(40)].map((_, i) => (
                <div
                  key={i}
                  className="h-2 bg-white/10"
                  style={{
                    width: `${12 + Math.random() * 20}px`,
                    marginLeft: `${Math.random() * 30}px`,
                    marginTop: `${4 + Math.random() * 40}px`,
                  }}
                />
              ))}
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
  );
}
