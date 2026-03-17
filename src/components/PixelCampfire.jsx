import { useState, useEffect } from "react";

export default function PixelCampfire({ className = "" }) {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((f) => (f + 1) % 3);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  const flames = [
    // Frame 0
    <>
      <div className="flex justify-center">
        <div className="w-3 h-3 bg-camp-fire-yellow" />
      </div>
      <div className="flex justify-center">
        <div className="w-3 h-3 bg-camp-fire" />
        <div className="w-3 h-3 bg-camp-fire-yellow" />
        <div className="w-3 h-3 bg-camp-fire" />
      </div>
    </>,
    // Frame 1
    <>
      <div className="flex justify-center">
        <div className="w-3 h-3 bg-camp-fire" />
        <div className="w-3 h-3 bg-camp-fire-yellow" />
      </div>
      <div className="flex justify-center">
        <div className="w-3 h-3 bg-camp-fire-yellow" />
        <div className="w-3 h-3 bg-camp-fire" />
        <div className="w-3 h-3 bg-camp-fire-yellow" />
      </div>
    </>,
    // Frame 2
    <>
      <div className="flex justify-center">
        <div className="w-3 h-3 bg-camp-fire-yellow" />
        <div className="w-3 h-3 bg-camp-fire" />
      </div>
      <div className="flex justify-center">
        <div className="w-3 h-3 bg-camp-fire" />
        <div className="w-3 h-3 bg-camp-fire-yellow" />
        <div className="w-3 h-3 bg-camp-fire" />
      </div>
    </>,
  ];

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {flames[frame]}
      {/* Logs */}
      <div className="flex justify-center">
        <div className="w-3 h-3 bg-camp-wood-dark" />
        <div className="w-3 h-3 bg-camp-wood" />
        <div className="w-3 h-3 bg-camp-wood-dark" />
        <div className="w-3 h-3 bg-camp-wood" />
      </div>
    </div>
  );
}
