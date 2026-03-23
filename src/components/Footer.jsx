import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer-bar">
      <span className="footer-brand">rohitnain.com</span>
      <div className="footer-links">
        <Link to="/contact">Contact Me</Link>
        <Link to="/terms">Terms and Conditions</Link>
        <Link to="/privacy">Privacy Policy</Link>
      </div>
    </div>
  )
}

export default Footer
