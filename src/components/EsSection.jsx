import ProfileCard from './ProfileCard.jsx'
import { asset } from '../utils/asset.js'
import EmploymentEntry from './EmploymentEntry.jsx'
import { employmentEntries } from '../data/employmentData.js'
import ExperienceEntry from './ExperienceEntry.jsx'
import { experienceEntries } from '../data/experienceData.js'

function EsSection() {
  return (
    <section id="es-section">
      <p id="text01" className="text-component instance-1">- DO NOT REPRODUCE OR DISTRIBUTE WITHOUT PERMISSION -</p>
      <div id="container13" className="container-component instance-13 columns">
        <div className="wrapper">
          <div className="inner">
            <div>
              <ProfileCard />
            </div>
            <div>
              <div id="gallery03" className="gallery-component instance-3">
                <div className="inner">
                  <ul>
                    <li>
                      <a href={asset('/assets/images/gallery03/93769694_original.jpg')} className="thumbnail n01" onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()} onAuxClick={(e) => e.preventDefault()}><span className="frame"><img src={asset('/assets/images/gallery03/93769694_original.jpg')} alt="Untitled" title="Untitled" onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()} onAuxClick={(e) => e.preventDefault()} /></span></a>
                    </li>
                  </ul>
                </div>
              </div>
              <ul id="buttons06" className="buttons-component instance-6">
                <li>
                  <a href="#" className="n01" role="button"><svg aria-labelledby="buttons06-icon-1-title"><title id="buttons06-icon-1-title">PDF Document</title><use href={asset('/assets/icons.svg#pdf')}></use></svg><span className="label">Download My Resume</span></a>
                </li>
              </ul>
              <p id="text31" className="text-component instance-31">
                <span className="p"><strong>• • • PROFILE • • •</strong></span>
                <span className="p">Full-stack Software Engineer specializing in backend systems and AI integration. Experienced across startups and BFSI companies — building scalable APIs, LLM-powered workflows, compliance automation, and data pipelines. Proficient in Node.js, Django, Python, React, and AWS. Passionate about applying AI (RAG, LangGraph, fine-tuning) to solve real-world engineering problems efficiently.</span>
                <span className="p">..................................................................................</span>
                <span className="p"><strong>• • • EMPLOYMENT • • •</strong></span>
                {employmentEntries.map((entry, i) => (
                  <EmploymentEntry key={i} {...entry} />
                ))}
                <span className="p">..................................................................................</span>
                <span className="p"><strong>• • • PROFESSIONAL EXPERIENCE • • •</strong></span>
                {experienceEntries.map((entry, i) => (
                  <ExperienceEntry key={i} {...entry} />
                ))}
                <span className="p">..................................................................................</span>
                <span className="p"><strong>• • • EDUCATION • • •</strong></span>
                <span className="p"><code>2021 – 2025</code><br /><u>Lovely Professional University</u><br /><strong>B.Tech in Information Technology</strong><br />Punjab, India</span>
                <span className="p">..................................................................................</span>
                <span className="p"><strong>• • • SKILLS • • •</strong></span>
                <span className="p"><u>AI</u>: LLM Fine-tuning, RAG, LangChain, LangGraph, Gradio, OpenAI, Claude, Generative AI, Ollama</span>
                <span className="p"><u>Development</u>: Node.js, Django, Python, React.js, TypeScript, Express.js, Spring Boot, Prisma, MongoDB, PostgreSQL, HTML, CSS</span>
                <span className="p"><u>Cloud</u>: AWS, CI/CD, Docker, Kubernetes, Cloudflare</span>
                <span className="p"><u>DSA</u>: leetcode.com → 600+ | hackerrank.com → 3 Badges | geeksforgeeks.org → 330+</span>
                <span className="p">..................................................................................</span>
                <span className="p"><strong>• • • LANGUAGES • • •</strong></span>
                <span className="p"><strong>English</strong></span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="container02" data-scroll-id="menu-es" data-scroll-behavior="default" data-scroll-offset="0" data-scroll-speed="3" className="container-component instance-2 default">
        <div className="wrapper">
          <div className="inner">
            <h3 id="text06" className="text-component instance-6">PORTFOLIO MENU</h3>
          </div>
        </div>
      </div>
      <div id="container14" className="container-component instance-14 default">
        <div className="wrapper">
          <div className="inner">
            <ul id="buttons02" className="buttons-component instance-2">
              <li>
                <a href="#s1-es" className="n01" role="button">AI Projects</a>
              </li>
            </ul>
            <ul id="buttons05" className="buttons-component instance-5">
              <li>
                <a href="#s10-es" className="n01" role="button"><svg aria-labelledby="buttons05-icon-1-title"><title id="buttons05-icon-1-title">Folder (Alt)</title><use href={asset('/assets/icons.svg#folder-alt')}></use></svg><span className="label">Gallery</span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ul id="buttons09" data-scroll-id="s1-es" data-scroll-behavior="default" data-scroll-offset="0" data-scroll-speed="3" className="buttons-component instance-9">
        <li>
          <a href="#menu-es" className="n01" role="button"><svg aria-labelledby="buttons09-icon-1-title"><title id="buttons09-icon-1-title">Chevron Up</title><use href={asset('/assets/icons.svg#arrow-up-alt')}></use></svg><span className="label">Back to Portfolio Menu</span></a>
        </li>
      </ul>
      <hr id="divider03" className="divider-component instance-3" />
      <ul id="buttons10" data-scroll-id="s10-es" data-scroll-behavior="default" data-scroll-offset="0" data-scroll-speed="3" className="buttons-component instance-10">
        <li>
          <a href="#menu-es" className="n01" role="button"><svg aria-labelledby="buttons10-icon-1-title"><title id="buttons10-icon-1-title">Chevron Up</title><use href={asset('/assets/icons.svg#arrow-up-alt')}></use></svg><span className="label">Back to Portfolio Menu</span></a>
        </li>
      </ul>
      <hr id="divider07" className="divider-component instance-7" />
      <h2 id="text18" className="text-component instance-18">Thank you for your time and attention!</h2>
      <p id="text04" className="text-component instance-4"><br /></p>
    </section>
  )
}

export default EsSection
