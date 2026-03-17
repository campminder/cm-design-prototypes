export default function PixelMountains({ className = "" }) {
  return (
    <div className={`flex items-end justify-center gap-0 ${className}`}>
      {/* Left mountain */}
      <div className="flex flex-col items-center -mr-4">
        <div className="w-4 h-4 bg-gray-300" />
        <div className="flex">
          <div className="w-4 h-4 bg-gray-400" />
          <div className="w-4 h-4 bg-gray-300" />
          <div className="w-4 h-4 bg-gray-400" />
        </div>
        <div className="flex">
          <div className="w-4 h-4 bg-gray-500" />
          <div className="w-4 h-4 bg-gray-400" />
          <div className="w-4 h-4 bg-gray-500" />
          <div className="w-4 h-4 bg-gray-400" />
          <div className="w-4 h-4 bg-gray-500" />
        </div>
        <div className="flex">
          <div className="w-4 h-4 bg-gray-600" />
          <div className="w-4 h-4 bg-gray-500" />
          <div className="w-4 h-4 bg-gray-600" />
          <div className="w-4 h-4 bg-gray-500" />
          <div className="w-4 h-4 bg-gray-600" />
          <div className="w-4 h-4 bg-gray-500" />
          <div className="w-4 h-4 bg-gray-600" />
        </div>
      </div>
      {/* Right mountain (taller) */}
      <div className="flex flex-col items-center -ml-4">
        <div className="w-4 h-4 bg-gray-200" />
        <div className="flex">
          <div className="w-4 h-4 bg-gray-300" />
          <div className="w-4 h-4 bg-gray-200" />
          <div className="w-4 h-4 bg-gray-300" />
        </div>
        <div className="flex">
          <div className="w-4 h-4 bg-gray-400" />
          <div className="w-4 h-4 bg-gray-300" />
          <div className="w-4 h-4 bg-gray-400" />
          <div className="w-4 h-4 bg-gray-300" />
          <div className="w-4 h-4 bg-gray-400" />
        </div>
        <div className="flex">
          <div className="w-4 h-4 bg-gray-500" />
          <div className="w-4 h-4 bg-gray-400" />
          <div className="w-4 h-4 bg-gray-500" />
          <div className="w-4 h-4 bg-gray-400" />
          <div className="w-4 h-4 bg-gray-500" />
          <div className="w-4 h-4 bg-gray-400" />
          <div className="w-4 h-4 bg-gray-500" />
        </div>
        <div className="flex">
          <div className="w-4 h-4 bg-gray-600" />
          <div className="w-4 h-4 bg-gray-500" />
          <div className="w-4 h-4 bg-gray-600" />
          <div className="w-4 h-4 bg-gray-500" />
          <div className="w-4 h-4 bg-gray-600" />
          <div className="w-4 h-4 bg-gray-500" />
          <div className="w-4 h-4 bg-gray-600" />
          <div className="w-4 h-4 bg-gray-500" />
          <div className="w-4 h-4 bg-gray-600" />
        </div>
      </div>
    </div>
  );
}
