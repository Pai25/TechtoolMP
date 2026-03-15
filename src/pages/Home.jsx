import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { tools, getFeaturedTools } from '../data/tools'
import { categories } from '../data/categories'
import ToolCard from '../components/ToolCard'
import CategoryCard from '../components/CategoryCard'
import './Home.css'

export default function Home() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const featuredTools = getFeaturedTools()

  const handleSearch = (e) => {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  const stats = [
    { value: `${tools.length}+`, label: 'Curated Tools' },
    { value: `${categories.length}`, label: 'Categories' },
    { value: '50K+', label: 'Monthly Users' },
    { value: '100%', label: 'Free to Browse' },
  ]

  return (
    <div className="home page-enter">
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-orb hero-orb-3" />
          <div className="hero-grid" />
        </div>
        <div className="container hero-content">
          <div className="hero-badge">
            <span>🚀</span> Discover the tools that power the modern web
          </div>
          <h1 className="hero-title">
            Find the Perfect
            <br />
            <span className="hero-highlight">Online Tools</span>
            <br />
            for Every Task
          </h1>
          <p className="hero-subtitle">
            TechTools Hub is your curated directory of the best AI tools, developer utilities,
            design software, and productivity apps — all in one place.
          </p>

          {/* Search */}
          <form onSubmit={handleSearch} className="hero-search">
            <div className="search-container">
              <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search for tools, categories, features..."
                className="search-input hero-search-input"
              />
            </div>
            <button type="submit" className="btn btn-primary hero-search-btn">
              Search
            </button>
          </form>

          <div className="hero-quick-links">
            <span>Popular:</span>
            {['AI Tools', 'Developer Tools', 'Design Tools', 'Productivity'].map(cat => (
              <Link
                key={cat}
                to={`/categories/${cat.toLowerCase().replace(/ /g, '-').replace('productivity', 'productivity-tools')}`}
                className="quick-link"
              >
                {cat}
              </Link>
            ))}
          </div>

          {/* Stats */}
          <div className="hero-stats">
            {stats.map(s => (
              <div key={s.label} className="hero-stat">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Tools ── */}
      <section className="section featured-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">⭐ Editor's Picks</span>
            <h2 className="section-title">Featured Tools This Month</h2>
            <p className="section-subtitle">
              Hand-picked by our editors — the most impactful tools making waves right now.
            </p>
          </div>
          <div className="grid-3">
            {featuredTools.slice(0, 6).map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/categories" className="btn btn-secondary">
              Browse All Tools →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Categories ── */}
      <section className="section categories-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">🗂️ Categories</span>
            <h2 className="section-title">Explore by Category</h2>
            <p className="section-subtitle">
              We organize the best tools into clear categories so you can find exactly what you need.
            </p>
          </div>
          <div className="grid-3">
            {categories.map(cat => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Why TechTools Hub ── */}
      <section className="section why-section">
        <div className="container">
          <div className="why-inner">
            <div className="why-text">
              <span className="section-label">💡 Why Us</span>
              <h2 className="section-title" style={{ textAlign: 'left', margin: '16px 0' }}>
                Your trusted guide to the digital toolkit
              </h2>
              <p className="section-subtitle" style={{ textAlign: 'left', margin: 0 }}>
                We research, test, and curate tools so you don't have to. Every tool on TechTools Hub
                has been evaluated for quality, usability, and value.
              </p>
              <div className="why-features">
                {[
                  { icon: '🔍', title: 'Carefully Curated', desc: 'Every tool is reviewed before being listed.' },
                  { icon: '🆓', title: 'Always Free', desc: 'Browse and discover tools at no cost.' },
                  { icon: '🔄', title: 'Regularly Updated', desc: 'New tools added and reviewed weekly.' },
                  { icon: '⚡', title: 'Fast Discovery', desc: 'Find the right tool in seconds with smart search.' },
                ].map(f => (
                  <div key={f.title} className="why-feature">
                    <span className="why-feature-icon">{f.icon}</span>
                    <div>
                      <h4>{f.title}</h4>
                      <p>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/categories" className="btn btn-primary" style={{ marginTop: '8px' }}>
                Start Exploring →
              </Link>
            </div>
            <div className="why-visual">
              <div className="why-cards-preview">
                {tools.slice(0, 4).map((tool, i) => (
                  <div key={tool.id} className="preview-card" style={{ '--i': i }}>
                    <span className="preview-logo">{tool.logo}</span>
                    <div>
                      <div className="preview-name">{tool.name}</div>
                      <div className="preview-rating">{'★'.repeat(Math.round(tool.rating))} {tool.rating}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-inner">
            <h2 className="cta-title">Ready to discover your next favorite tool?</h2>
            <p className="cta-subtitle">
              Join thousands of creators, developers, and professionals who use TechTools Hub every day.
            </p>
            <div className="cta-actions">
              <Link to="/categories" className="btn btn-primary">Browse Categories</Link>
              <Link to="/tutorials" className="btn btn-secondary cta-btn-light">Read Tutorials</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
