import { Link } from 'react-router-dom'

function PrivacyPage() {
  return (
    <div className="page-container">
      <div className="page-content">
        <Link to="/" className="page-back">← Back</Link>
        <h1>Privacy Policy</h1>
        <p className="page-updated">Last updated: March 2026</p>

        <h2>1. Information We Collect</h2>
        <p>This portfolio website does not collect any personal data. No forms, tracking cookies, or analytics tools are used beyond what may be inherent to the hosting platform (GitHub Pages).</p>

        <h2>2. Third-Party Services</h2>
        <p>This site links to external platforms such as LinkedIn, GitHub, HuggingFace, and Instagram. Each of these platforms has its own privacy policy, which governs data collected when you visit them.</p>

        <h2>3. Cookies</h2>
        <p>This site does not use cookies for tracking or advertising. Any cookies set are solely for basic site functionality.</p>

        <h2>4. Contact</h2>
        <p>If you have any questions about this privacy policy, you can reach out at <a href="mailto:rohitnainindian@gmail.com">rohitnainindian@gmail.com</a>.</p>

        <h2>5. Changes to This Policy</h2>
        <p>This policy may be updated from time to time. Any changes will be reflected on this page with an updated date.</p>
      </div>
    </div>
  )
}

export default PrivacyPage
