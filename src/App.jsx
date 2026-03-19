import { useEffect } from 'react'
import Header from './components/Header.jsx'
import HomeSection from './components/HomeSection.jsx'
import EsSection from './components/EsSection.jsx'
import KrSection from './components/KrSection.jsx'

let mainJsLoaded = false

function App() {
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
          <EsSection />
          <KrSection />
        </div>
      </div>
    </div>
  )
}

export default App
