import { Link } from 'react-router-dom'

function ContactPage() {
  return (
    <div className="page-container">
      <div className="page-content">
        <Link to="/" className="page-back">← Back</Link>
        <h1>Contact Me</h1>
        <p>Feel free to reach out — I'm always open to discussing new opportunities, collaborations, or just a conversation about tech.</p>

        <div className="contact-item">
          <strong>Email</strong>
          <a href="mailto:rohitnainindian@gmail.com">rohitnainindian@gmail.com</a>
        </div>
        <div className="contact-item">
          <strong>LinkedIn</strong>
          <a href="https://www.linkedin.com/in/rohitnain/" target="_blank" rel="noreferrer">linkedin.com/in/rohitnain</a>
        </div>
        <div className="contact-item">
          <strong>GitHub</strong>
          <a href="https://github.com/rohit141914/" target="_blank" rel="noreferrer">github.com/rohit141914</a>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
