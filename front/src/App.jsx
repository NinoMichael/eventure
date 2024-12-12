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
import WorkspaceUser from './pages/user/WorkspaceUser'
import ListEvent from './pages/user/ListEvent'
import SuggestedListEvent from './pages/user/SuggestedListEvent'
import CategoryEvent from './pages/user/CategoryEvent'
import Event from './pages/admin/ListEvent'
import AddEvent from './pages/admin/AddEvent'
import DetailEvent from './pages/user/DetailEvent'
import SavedEvent from './pages/user/SavedEvent'

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
              <Route path="/explore/recent-event" element={<ListEvent />} />
              <Route path="/explore/suggested-event" element={<SuggestedListEvent />} />
              <Route path="/explore/category-event" element={<CategoryEvent />} />
              <Route path="/discussion" element={<WorkspaceUser />} />
              <Route path="/detail-event" element={<DetailEvent />} />
              <Route path="/saved-event" element={<SavedEvent />} />

              {/* ======= ADMIN ========= */}
              <Route path="/login-admin" element={<LoginAdmin />} />
              <Route path="/dashboard-admin" element={<DashboardAdmin />} />
              <Route path="/workspace" element={<Workspace />} />
              <Route path="/event" element={<Event />} />
              <Route path="/add-event" element={<AddEvent />} />

            </Routes>
          </BrowserRouter>

        </body>
      </AnimatePresence>
    </>
  )


}

export default App
