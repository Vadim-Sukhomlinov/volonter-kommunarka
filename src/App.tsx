import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout"
import HomePage from './pages/HomePage'
import ActivitiesPage from './pages/ActivitiesPage'
import SportsPage from './pages/activities/SportsPage'
import NvpPage from './pages/activities/NvpPage'
import { ReportsPage } from './pages/activities/ReportsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/activities/sports" element={<SportsPage />} />
          <Route path="/activities/nvp" element={<NvpPage />} />
          <Route path="/activities/reports" element={<ReportsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App