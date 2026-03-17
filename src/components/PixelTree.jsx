export default function PixelTree({ className = "" }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Tree top */}
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 bg-camp-green-light" />
        <div className="flex">
          <div className="w-4 h-4 bg-camp-green-light" />
          <div className="w-4 h-4 bg-camp-green" />
          <div className="w-4 h-4 bg-camp-green-light" />
        </div>
        <div className="flex">
          <div className="w-4 h-4 bg-camp-green" />
          <div className="w-4 h-4 bg-camp-green-light" />
          <div className="w-4 h-4 bg-camp-green" />
          <div className="w-4 h-4 bg-camp-green-light" />
          <div className="w-4 h-4 bg-camp-green" />
        </div>
        <div className="flex">
          <div className="w-4 h-4 bg-camp-green-light" />
          <div className="w-4 h-4 bg-camp-green" />
          <div className="w-4 h-4 bg-camp-green-light" />
          <div className="w-4 h-4 bg-camp-green" />
          <div className="w-4 h-4 bg-camp-green-light" />
          <div className="w-4 h-4 bg-camp-green" />
          <div className="w-4 h-4 bg-camp-green-light" />
        </div>
      </div>
      {/* Trunk */}
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 bg-camp-wood" />
        <div className="w-4 h-4 bg-camp-wood-dark" />
      </div>
    </div>
  );
}
