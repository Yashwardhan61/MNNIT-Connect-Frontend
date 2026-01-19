import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import DashboardLayout from './pages/app/DashboardLayout'
import Dashboard from './pages/app/Dashboard'
import Clubs from './pages/app/Clubs'
import Events from './pages/app/Events'
import Resources from './pages/app/Resources'
import Timetable from './pages/app/Timetable'
import LostAndFound from './pages/app/LostAndFound'
import { Toaster } from '@/components/ui/toaster'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/app" element={<DashboardLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="clubs" element={<Clubs />} />
            <Route path="events" element={<Events />} />
            <Route path="resources" element={<Resources />} />
            <Route path="timetable" element={<Timetable />} />
            <Route path="lost-and-found" element={<LostAndFound />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  )
}

export default App
