import { Link } from 'react-router-dom'

function TermsPage() {
  return (
    <div className="page-container">
      <div className="page-content">
        <Link to="/" className="page-back">← Back</Link>
        <h1>Terms &amp; Conditions</h1>
        <p className="page-updated">Last updated: March 23, 2026</p>

        <p>These Terms and Conditions govern your use of all websites, tools, and browser extensions created and maintained by Rohit Nain, accessible from rohitnain.com and its subdomains (collectively referred to as "rohitnain.com"). By accessing or using any part of these services, you agree to be bound by these terms. If you do not agree, please discontinue use immediately.</p>
        <p>These terms are governed by the laws of India.</p>

        <h2>Terminology</h2>
        <p>Throughout this document, <strong>"You" / "User"</strong> refers to the person accessing or using the service. <strong>"We" / "Us" / "Our"</strong> refers to Rohit Nain, the owner and operator of rohitnain.com. <strong>"Service"</strong> refers to all websites, pages, browser extensions, and tools hosted under rohitnain.com and its subdomains.</p>

        <h2>Cookies</h2>
        <p>By using rohitnain.com, you agree to the use of cookies in accordance with our Privacy Policy. Cookies help us deliver a better experience and enable certain site functionality.</p>

        <h2>License</h2>
        <p>Unless otherwise stated, Rohit Nain owns all intellectual property rights for the content and code published on rohitnain.com. All rights are reserved. You may access and use the content for personal, non-commercial purposes, subject to these terms.</p>
        <p>You must not:</p>
        <ul>
          <li>Republish, sell, rent, or sub-license any material from rohitnain.com</li>
          <li>Reproduce, duplicate, or copy content from rohitnain.com for commercial use</li>
          <li>Redistribute or mirror any content without explicit written permission</li>
          <li>Reverse engineer, decompile, or tamper with any browser extension or tool published under rohitnain.com</li>
        </ul>
        <p>You may share links to our projects freely. Any testimonials or feedback you provide may be used by rohitnain.com for promotional purposes under a non-exclusive license.</p>

        <h2>Chrome Extensions — Acceptable Use</h2>
        <p>When using any browser extension published under rohitnain.com, you agree to:</p>
        <ul>
          <li>Use the extension only for its intended and stated purpose</li>
          <li>Not attempt to bypass, modify, or abuse any functionality of the extension</li>
          <li>Not use the extension in any way that violates applicable law or third-party rights</li>
        </ul>
        <p>We reserve the right to update, modify, or discontinue any extension at any time without notice.</p>

        <h2>Disclaimer of Warranties</h2>
        <p>All services, tools, and extensions provided through rohitnain.com are offered "as is" without any warranties, expressed or implied. We do not warrant that:</p>
        <ul>
          <li>The service will be uninterrupted or error-free</li>
          <li>Any defects will be corrected</li>
          <li>The service is free from viruses or harmful components</li>
        </ul>
        <p>To the maximum extent permitted by applicable law, we disclaim all representations, warranties, and conditions relating to rohitnain.com and its tools.</p>

        <h2>Limitation of Liability</h2>
        <p>rohitnain.com and Rohit Nain will not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of — or inability to use — any part of the service. This includes, but is not limited to, loss of data, loss of income, or any other financial or personal loss.</p>
        <p>As long as our services are provided free of charge, we shall not be held responsible for any loss or damage of any nature.</p>

        <h2>iFrames</h2>
        <p>You may not create frames or embed rohitnain.com pages in a way that alters or misrepresents the visual appearance or branding of the website without prior written permission.</p>

        <h2>Content Liability</h2>
        <p>We shall not be held responsible for any content that appears on third-party websites that link to or from rohitnain.com. You agree to protect and defend us against any claims arising from your own website or content.</p>

        <h2>Your Privacy</h2>
        <p>Please refer to our <Link to="/privacy">Privacy Policy</Link> for details on how we handle your data.</p>

        <h2>Reservation of Rights</h2>
        <p>We reserve the right to request the removal of any link to our website and to amend these Terms and Conditions at any time. By continuing to use rohitnain.com after any changes are posted, you agree to be bound by the updated terms.</p>

        <h2>Changes to These Terms</h2>
        <p>We may revise these Terms and Conditions from time to time. Updates will be reflected on this page with a new "Last updated" date. It is your responsibility to check this page periodically.</p>

        <h2>Contact</h2>
        <p>For any questions regarding these Terms, please contact: <a href="mailto:rohitnainindian@gmail.com">rohitnainindian@gmail.com</a></p>
      </div>
    </div>
  )
}

export default TermsPage
