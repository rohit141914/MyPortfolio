import { Link } from 'react-router-dom'

function TermsPage() {
  return (
    <div className="page-container">
      <div className="page-content">
        <Link to="/" className="page-back">← Back</Link>
        <h1>Terms and Conditions</h1>
        <p className="page-updated">Last updated: March 2026</p>

        <h2>1. Acceptance of Terms</h2>
        <p>By accessing this portfolio website, you agree to be bound by these terms and conditions. If you do not agree, please do not use this site.</p>

        <h2>2. Intellectual Property</h2>
        <p>All content on this website — including text, images, project descriptions, and code snippets — is the intellectual property of Rohit Nain unless otherwise stated. Reproduction or distribution without prior written permission is prohibited.</p>

        <h2>3. Use of Content</h2>
        <p>You may view and reference the content on this site for personal, non-commercial purposes. Any other use requires explicit permission from the owner.</p>

        <h2>4. Disclaimer</h2>
        <p>This website is provided "as is" without warranties of any kind. The information presented is for informational purposes only and may be updated at any time without notice.</p>

        <h2>5. External Links</h2>
        <p>This site may contain links to third-party websites. Rohit Nain is not responsible for the content or privacy practices of those sites.</p>

        <h2>6. Changes to Terms</h2>
        <p>These terms may be updated periodically. Continued use of the site constitutes acceptance of any revised terms.</p>
      </div>
    </div>
  )
}

export default TermsPage
