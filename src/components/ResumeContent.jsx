import { Fragment } from 'react'
import ResumeRow from './ResumeRow.jsx'
import { resumeRows } from '../data/resumeData.js'

function ResumeContent() {
  return (
    <div id="text11" className="text-component instance-11">
      {/* Headers */}
      <span className="p dots-separator">{'.' .repeat(200)}</span>
      <div className="resume-header-row">
        <span className="p resume-col-1"><strong>• • • EMPLOYMENT • • •</strong></span>
        <span className="p resume-col-2"><strong>• • • PROFESSIONAL EXPERIENCE • • •</strong></span>
      </div>

      {/* Paired rows */}
      {resumeRows.map((row, i) => (
        <Fragment key={i}>
          <ResumeRow {...row} />
          {i < resumeRows.length - 1 && <hr className="divider-component instance-6" />}
        </Fragment>
      ))}

      {/* Education, Skills, Languages */}
      <span className="p dots-separator">{'.' .repeat(200)}</span>
      <span className="p"><strong>• • • SKILLS • • •</strong></span>
      <span className="p"><u>AI</u>: LLM Fine-tuning, RAG, LangChain, LangGraph, Gradio, OpenAI, Claude, Generative AI, Ollama</span>
      <span className="p"><u>Development</u>: Node.js, Django, Python, React.js, TypeScript, Express.js, Spring Boot, Prisma, MongoDB, PostgreSQL, HTML, CSS</span>
      <span className="p"><u>Cloud</u>: AWS, CI/CD, Docker, Kubernetes, Cloudflare</span>
      <span className="p"><u>DSA</u>: leetcode.com → 600+ | hackerrank.com → 3 Badges | geeksforgeeks.org → 330+</span>
      <span className="p dots-separator">{'.' .repeat(200)}</span>
      <div className="resume-bottom-row">
        <div className="resume-col-1">
          <span className="p"><strong>• • • EDUCATION • • •</strong></span>
          <span className="p"><code>2021 – 2025</code><br /><u>Lovely Professional University</u><br /><strong>B.Tech in Information Technology</strong><br />Punjab, India</span>
        </div>
        <div className="resume-col-2">
          <span className="p"><strong>• • • LANGUAGES • • •</strong></span>
          <span className="p"><strong>English</strong></span>
          <span className="p"><strong>Hindi</strong></span>
        </div>
      </div>
    </div>
  )
}

export default ResumeContent
