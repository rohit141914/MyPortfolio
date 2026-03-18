function ResumePanel() {
  return (
    <div>
      <div id="Profile_secondary" className="gallery-component instance-2">
        <div className="inner">
          <ul>
            <li>
              <a href="/assets/images/Profile_secondary/a3df0269_original.jpg" className="thumbnail n01" onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()} onAuxClick={(e) => e.preventDefault()}><span className="frame"><img src="/assets/images/Profile_secondary/a3df0269_original.jpg" alt="Untitled" title="Untitled" onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()} onAuxClick={(e) => e.preventDefault()} /></span></a>
            </li>
          </ul>
        </div>
      </div>
      <ul id="buttons01" className="buttons-component instance-1">
        <li>
          <a href="#" className="n01" role="button" target="_blank" rel="noreferrer"><svg aria-labelledby="buttons01-icon-1-title"><title id="buttons01-icon-1-title">PDF Document</title><use href="/assets/icons.svg#pdf"></use></svg><span className="label">Download My Resume</span></a>
        </li>
      </ul>
      <div className="text-component instance-11">
        <span className="p"><strong>• • • PROFILE • • •</strong></span>
        <span className="p">Full-stack Software Engineer specializing in backend systems and AI integration. Experienced across startups and BFSI companies — building scalable APIs, LLM-powered workflows, compliance automation, and data pipelines. Proficient in Node.js, Django, Python, React, and AWS. Passionate about applying AI (RAG, LangGraph, fine-tuning) to solve real-world engineering problems efficiently.</span>
      </div>
    </div>
  )
}

export default ResumePanel
