import { Link } from 'react-router-dom'

export default function Example() {
  return (
    <div className="min-h-screen bg-camp-night flex flex-col items-center justify-center p-8">
      <Link
        to="/erica"
        className="font-pixel text-camp-fire-yellow/50 text-[8px] hover:text-camp-fire-yellow transition-colors mb-8 self-start max-w-md w-full"
      >
        ← BACK TO CAMPSITE
      </Link>
      <div className="max-w-md w-full border-2 border-camp-fire-yellow/30 bg-camp-night/60 p-8 text-center">
        <h1 className="font-pixel text-camp-fire-yellow text-sm mb-4">EXAMPLE PROTOTYPE</h1>
        <p className="font-pixel text-camp-fire-yellow/50 text-[10px] leading-relaxed">
          This is a sample prototype. Replace this file with your own design at{' '}
          <span className="text-camp-green-light">src/pages/erica/Example/index.jsx</span>
        </p>
      </div>
    </div>
  )
}
