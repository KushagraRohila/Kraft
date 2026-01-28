import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import Navigation from './components/Navigation'
import LoginForm from './components/LoginForm'
import HomePage from './pages/HomePage'
import FeaturesPage from './pages/FeaturesPage'
import StatsPage from './pages/StatsPage'
import EmergencyContactsPage from './pages/EmergencyContactsPage'
import DangerZonePage from './pages/DangerZonePage'
import AboutUsPage from './pages/AboutUsPage'
import ProfilePage from './pages/ProfilePage'

function App() {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 p-3 md:p-6 flex items-center justify-center">
        <LoginForm />
      </div>
    )
  }

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/emergency" element={<EmergencyContactsPage />} />
        <Route path="/danger-zone" element={<DangerZonePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  )
}

export default App

