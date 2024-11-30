import './index.css'
import './App.css'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Homepage from './pages/user/Homepage'
import Login from './pages/user/Login'
import HomeRegister from './pages/user/HomeRegister'
import EmailRegister from './pages/user/EmailRegister'
import PasswordRegister from './pages/user/PasswordRegister'

import LoginAdmin from './pages/admin/Login'
import DashboardAdmin from './pages/admin/Dashboard'
import Explore from './pages/user/Explore'
import Workspace from './pages/admin/Workspace'

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = () => setLoading(true)
    const handleComplete = () => setLoading(false)

    window.addEventListener('beforeunload', handleStart)
    window.addEventListener('load', handleComplete)

    return () => {
      window.removeEventListener('beforeunload', handleStart)
      window.removeEventListener('load', handleComplete)
    }
  }, [])

  return (
    <>
      <AnimatePresence>
        <body className='min-h-screen'>
          <BrowserRouter>
            <Routes>
              {/* ======= USER ========= */}
              <Route path="/" element={<Homepage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home-register" element={<HomeRegister />} />
              <Route path="/email-register" element={<EmailRegister />} />
              <Route path="/password-register" element={<PasswordRegister />} />
              <Route path="/explore" element={<Explore />} />

              {/* ======= ADMIN ========= */}
              <Route path="/login-admin" element={<LoginAdmin />} />
              <Route path="/dashboard-admin" element={<DashboardAdmin />} />
              <Route path="/workspace" element={<Workspace />} />
            </Routes>
          </BrowserRouter>

        </body>
      </AnimatePresence>
    </>
  )


}

export default App
