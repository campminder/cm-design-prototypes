import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DesignerPage from './pages/DesignerPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:designer" element={<DesignerPage />} />
      <Route path="/:designer/:prototype" element={<DesignerPage />} />
    </Routes>
  )
}
