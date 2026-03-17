function ResumePanel() {
  return (
    <div>
      <div id="gallery02" className="gallery-component instance-2">
        <div className="inner">
          <ul>
            <li>
              <a href="/assets/images/gallery02/a3df0269_original.jpg" className="thumbnail n01" onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()} onAuxClick={(e) => e.preventDefault()}><span className="frame"><img src="/assets/images/gallery02/a3df0269_original.jpg" alt="Untitled" title="Untitled" onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()} onAuxClick={(e) => e.preventDefault()} /></span></a>
            </li>
          </ul>
        </div>
      </div>
      <ul id="buttons01" className="buttons-component instance-1">
        <li>
          <a href="#" className="n01" role="button"><svg aria-labelledby="buttons01-icon-1-title"><title id="buttons01-icon-1-title">PDF Document</title><use href="/assets/icons.svg#pdf"></use></svg><span className="label">Download My Resume</span></a>
        </li>
      </ul>
      <span className="p"><strong>• • • PROFILE • • •</strong><br />Software Engineer with experience in backend systems and AI integration. Skilled in building full-stack products, REST APIs, and LLM-powered workflows. Passionate about clean architecture, developer tooling, and building things that scale.</span>
      <span className="p">..................................................................................</span>
    </div>
  )
}

export default ResumePanel
