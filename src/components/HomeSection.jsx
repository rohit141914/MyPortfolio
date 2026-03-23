import { Fragment } from 'react'
import PortfolioMenu from './PortfolioMenu.jsx'
import ProfileCard from './ProfileCard.jsx'
import ResumePanel from './ResumePanel.jsx'
import ResumeContent from './ResumeContent.jsx'
import PortfolioSection from './PortfolioSection.jsx'
import { portfolioSections } from '../data/portfolioSectionsData.js'
import GallerySection from './GallerySection.jsx'
import { gallerySection } from '../data/gallerySectionData.js'
import Footer from './Footer.jsx'

function HomeSection() {
  return (
    <section id="home-section">
      <p id="text12" className="text-component instance-12 tagline">engineering, databases, and systems. always building.</p>
      {/* <p id="text30" className="text-component instance-30" style={{fontSize: "16px"}}>(Backend Software Engineer)</p> */}
      <div id="container04" className="container-component instance-4 columns">
        <div className="wrapper">
          <div className="inner" style={{ display: 'flex' }}>
            <div style={{ flex: 1, paddingLeft: '33px' }}><ProfileCard /></div>
            <div style={{ flex: 2 }}><ResumePanel /></div>
          </div>
          <ResumeContent />
        </div>
      </div>
      <p id="text28" className="text-component instance-28"><br /></p>
      <h3 id="text37" data-scroll-id="menu" data-scroll-behavior="default" data-scroll-offset="0" data-scroll-speed="3" className="text-component instance-37">PORTFOLIO MENU</h3>
      <PortfolioMenu />
      <p id="text29" data-scroll-id="s1" data-scroll-behavior="default" data-scroll-offset="0" data-scroll-speed="3" className="text-component instance-29"><br /></p>
      <p id="text27" className="text-component instance-27">• Projects</p>
      {portfolioSections.map((section, i) => (
        <Fragment key={section.containerId}>
          {i > 0 && <hr id="divider06" className="divider-component instance-6" />}
          <PortfolioSection {...section} />
        </Fragment>
      ))}
      <hr id="divider09" className="divider-component instance-9" />
      <GallerySection {...gallerySection} />
      <Footer />
      <h2 id="text38" className="text-component instance-38">Thank you for your time and attention!</h2>
      <p id="text20" className="text-component instance-20"><br /></p>
    </section>
  )
}

export default HomeSection
