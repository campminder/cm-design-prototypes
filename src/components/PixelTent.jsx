export default function PixelTent({ className = "" }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="flex">
        <div className="w-4 h-4 bg-camp-tent" />
        <div className="w-4 h-4 bg-camp-tent-dark" />
      </div>
      <div className="flex">
        <div className="w-4 h-4 bg-camp-tent" />
        <div className="w-4 h-4 bg-camp-tent" />
        <div className="w-4 h-4 bg-camp-tent-dark" />
        <div className="w-4 h-4 bg-camp-tent-dark" />
      </div>
      <div className="flex">
        <div className="w-4 h-4 bg-camp-tent" />
        <div className="w-4 h-4 bg-camp-tent" />
        <div className="w-4 h-4 bg-camp-wood-dark" />
        <div className="w-4 h-4 bg-camp-wood-dark" />
        <div className="w-4 h-4 bg-camp-tent-dark" />
        <div className="w-4 h-4 bg-camp-tent-dark" />
      </div>
    </div>
  );
}
