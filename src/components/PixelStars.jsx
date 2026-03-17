import { useState, useEffect } from "react";

export default function PixelStars() {
  const [twinkle, setTwinkle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTwinkle((t) => (t + 1) % 2);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const stars = [
    { top: "8%", left: "10%" },
    { top: "5%", left: "25%" },
    { top: "15%", left: "40%" },
    { top: "3%", left: "55%" },
    { top: "12%", left: "70%" },
    { top: "7%", left: "85%" },
    { top: "18%", left: "15%" },
    { top: "10%", left: "92%" },
    { top: "20%", left: "50%" },
    { top: "6%", left: "65%" },
    { top: "14%", left: "35%" },
    { top: "2%", left: "78%" },
  ];

  return (
    <>
      {stars.map((pos, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-camp-fire-yellow transition-opacity duration-500"
          style={{
            ...pos,
            opacity: (i + twinkle) % 3 === 0 ? 0.3 : 1,
          }}
        />
      ))}
    </>
  );
}
