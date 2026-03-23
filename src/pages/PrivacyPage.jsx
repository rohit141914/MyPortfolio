import { Link } from 'react-router-dom'
import EmailLink from '../components/EmailLink'

function PrivacyPage() {
  return (
    <div className="page-container">
      <div className="page-content">
        <Link to="/" className="page-back">← Back</Link>
        <h1>Privacy Policy</h1>
        <p className="page-updated">Last updated: March 23, 2026</p>

        <p>This Privacy Policy applies to all websites, tools, and browser extensions built and maintained by Rohit Nain, accessible from rohitnain.com and its subdomains (e.g., *.rohitnain.com), including any Chrome extensions or web tools hosted under these domains. All of the above are collectively referred to as "rohitnain.com" throughout this document.</p>
        <p>If you have questions about this Privacy Policy, you may contact us at: <EmailLink /></p>

        <h2>Consent</h2>
        <p>By using our website or any of our tools and extensions, you hereby consent to this Privacy Policy and agree to its terms.</p>

        <h2>Information We Collect</h2>
        <p>We collect information in the following ways:</p>
        <ul>
          <li><strong>Information you provide directly</strong> — When you contact us, fill out a form, or register for anything, we may collect your name, email address, and the content of your message.</li>
          <li><strong>Automatically collected information</strong> — When you visit our websites or use our extensions, we may automatically collect technical data such as your browser type, device type, IP address, pages visited, and usage patterns.</li>
          <li><strong>Extension-specific data</strong> — Some browser extensions may request access to specific browser permissions (e.g., active tab, storage). Any data accessed via such permissions is used solely to provide the extension's core functionality and is not transmitted to any external server unless explicitly stated in that extension's description.</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use collected information to:</p>
        <ul>
          <li>Provide, operate, and maintain our websites and tools</li>
          <li>Improve and personalize your experience</li>
          <li>Respond to your inquiries and support requests</li>
          <li>Analyze usage to fix bugs and improve functionality</li>
          <li>Send occasional updates if you have opted in</li>
          <li>Detect and prevent misuse or fraud</li>
        </ul>

        <h2>Log Files</h2>
        <p>rohitnain.com follows standard web hosting practices of maintaining log files. These logs may include IP addresses, browser type, Internet Service Provider (ISP), date/time stamps, and referring pages. This data is used for analytics and security purposes and is not linked to personally identifiable information.</p>

        <h2>Cookies</h2>
        <p>rohitnain.com and its subdomains may use cookies to store your preferences and improve your experience. You can disable cookies at any time through your browser settings. Note that disabling cookies may affect some features of the website.</p>

        <h2>Chrome Extensions</h2>
        <p>Any Chrome extension published under rohitnain.com adheres to the Chrome Web Store Developer Program Policies. Specifically:</p>
        <ul>
          <li>Extensions only request permissions necessary for their stated functionality.</li>
          <li>No personal browsing data is collected, sold, or shared with third parties.</li>
          <li>Any data stored locally (e.g., using chrome.storage) remains on your device and is not transmitted externally unless the feature explicitly requires it (e.g., syncing your own settings).</li>
        </ul>

        <h2>Third-Party Services</h2>
        <p>Our websites may use third-party services such as analytics tools (e.g., Google Analytics) or hosting platforms. These services have their own privacy policies and may collect data independently. rohitnain.com has no control over third-party cookies or data practices.</p>

        <h2>GDPR Data Protection Rights</h2>
        <p>If you are located in the European Economic Area, you have the following rights:</p>
        <ul>
          <li><strong>Right to access</strong> — Request a copy of the personal data we hold about you.</li>
          <li><strong>Right to rectification</strong> — Request correction of inaccurate or incomplete data.</li>
          <li><strong>Right to erasure</strong> — Request deletion of your personal data, under certain conditions.</li>
          <li><strong>Right to restrict processing</strong> — Request that we limit how we process your data.</li>
          <li><strong>Right to data portability</strong> — Request transfer of your data to another organization or directly to you.</li>
          <li><strong>Right to object</strong> — Object to our processing of your personal data under certain conditions.</li>
        </ul>
        <p>We will respond to all requests within one month. To exercise any of these rights, contact us at <EmailLink />.</p>

        <h2>CCPA Privacy Rights (California Residents)</h2>
        <p>If you are a California resident, you have the right to:</p>
        <ul>
          <li>Request disclosure of the personal data we have collected about you.</li>
          <li>Request deletion of your personal data.</li>
          <li>Opt out of the sale of your personal data. (Note: rohitnain.com does not sell personal data.)</li>
        </ul>
        <p>We will respond to all requests within one month. Contact us at <EmailLink />.</p>

        <h2>Children's Privacy</h2>
        <p>rohitnain.com does not knowingly collect personal information from children under the age of 13. If you believe a child has provided us with personal information, please contact us immediately and we will take prompt steps to remove such data.</p>

        <h2>Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date. We encourage you to review this page periodically.</p>
      </div>
    </div>
  )
}

export default PrivacyPage
