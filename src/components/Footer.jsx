import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="logo-icon">⚡</span>
              <span><span style={{ color: 'var(--primary)' }}>Tech</span>Tools Hub</span>
            </Link>
            <p className="footer-tagline">
              Your go-to directory for discovering the best online tools across every category.
            </p>
            <div className="footer-social">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">𝕏</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">⬡</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">in</a>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><Link to="/categories">All Categories</Link></li>
              <li><Link to="/categories/ai-tools">AI Tools</Link></li>
              <li><Link to="/categories/developer-tools">Developer Tools</Link></li>
              <li><Link to="/categories/design-tools">Design Tools</Link></li>
              <li><Link to="/categories/productivity-tools">Productivity</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><Link to="/tutorials">Tutorials</Link></li>
              <li><Link to="/alternatives">Alternatives</Link></li>
              <li><Link to="/categories/video-content-tools">Video & Content</Link></li>
              <li><Link to="/categories/learning-tools">Learning Tools</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-col">
            <h4>Stay Updated</h4>
            <p className="footer-newsletter-desc">Get the latest tool discoveries in your inbox weekly.</p>
            <div className="footer-newsletter">
              <input type="email" placeholder="your@email.com" className="footer-email-input" />
              <button className="btn btn-primary btn-sm">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} TechTools Hub. Built for curious people everywhere.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
