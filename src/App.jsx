import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import HomeSection from './components/HomeSection.jsx'
import ContactPage from './pages/ContactPage.jsx'
import TermsPage from './pages/TermsPage.jsx'
import PrivacyPage from './pages/PrivacyPage.jsx'

let mainJsLoaded = false

function MainSite() {
  useEffect(() => {
    if (mainJsLoaded) return
    mainJsLoaded = true

    const script = document.createElement('script')
    script.src = import.meta.env.BASE_URL + 'assets/main.js'

    script.onload = () => {
      // Fallback: if window 'load' event already fired before main.js loaded,
      // its internal loadHandler won't run — replicate is-loading removal manually.
      if (document.readyState === 'complete' && document.body.classList.contains('is-loading')) {
        setTimeout(() => {
          document.body.classList.remove('is-loading')
          document.body.classList.add('is-playing')
          setTimeout(() => {
            document.body.classList.remove('is-playing')
            document.body.classList.add('is-ready')
          }, 1000)
        }, 100)
      }
    }

    document.body.appendChild(script)
  }, [])

  return (
    <div className="site-wrapper">
      <div className="site-main">
        <div className="inner">
          {/* <Header /> */}
          <HomeSection />
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
