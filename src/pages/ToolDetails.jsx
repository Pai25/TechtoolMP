import { Link, useParams, Navigate } from 'react-router-dom'
import { getToolById, getAlternativeTools } from '../data/tools'
import { getCategoryById } from '../data/categories'
import './ToolDetails.css'

export default function ToolDetails() {
  const { toolId } = useParams()
  const tool = getToolById(toolId)

  if (!tool) return <Navigate to="/categories" replace />

  const category = getCategoryById(tool.category)
  const alternatives = getAlternativeTools(tool.alternatives || [])

  return (
    <div className="tool-detail-page page-enter">
      {/* Header */}
      <div className="tool-detail-header">
        <div className="container">
          {/* Breadcrumb */}
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/categories">Categories</Link>
            <span>/</span>
            <Link to={`/categories/${tool.category}`}>{category?.name}</Link>
            <span>/</span>
            <span>{tool.name}</span>
          </div>

          <div className="tool-detail-header-grid">
            <div>
              {/* Logo */}
              <div
                className="tool-detail-logo"
                style={{ background: `${tool.color}18`, border: `2px solid ${tool.color}25` }}
              >
                {tool.logo}
              </div>

              <h1 className="tool-detail-name">{tool.name}</h1>
              <p className="tool-detail-tagline">{tool.tagline}</p>

              {/* Meta */}
              <div className="tool-detail-meta">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: i < Math.round(tool.rating) ? '#F59E0B' : '#D1D5DB', fontSize: '18px' }}>★</span>
                  ))}
                  <span style={{ marginLeft: '6px', fontWeight: '700', fontSize: '16px' }}>{tool.rating}</span>
                </div>
                <span
                  className="badge"
                  style={{ background: `${tool.color}15`, color: tool.color }}
                >
                  {category?.name}
                </span>
                {tool.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="tool-detail-sidebar">
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="tool-visit-btn"
              >
                Visit {tool.name}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
              <Link to={`/categories/${tool.category}`} className="btn btn-secondary" style={{ textAlign: 'center', justifyContent: 'center' }}>
                ← Back to {category?.name}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="tool-detail-body">
        <div className="container">
          <div className="tool-detail-grid">
            {/* Left column */}
            <div>
              {/* Description */}
              <div className="detail-section">
                <h3>About {tool.name}</h3>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-muted)' }}>
                  {tool.description}
                </p>
              </div>

              {/* Key Features */}
              <div className="detail-section">
                <h3>Key Features</h3>
                <ul className="feature-list">
                  {tool.features.map(f => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>

              {/* Use Cases */}
              <div className="detail-section">
                <h3>Use Cases</h3>
                <div className="use-cases-grid">
                  {tool.useCases.map(uc => (
                    <div key={uc} className="use-case-item">{uc}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right sidebar */}
            <div>
              {/* Quick info */}
              <div className="info-card">
                <h4>Tool Info</h4>
                <div className="info-row">
                  <span className="info-row-label">Category</span>
                  <span className="info-row-value">{category?.name}</span>
                </div>
                <div className="info-row">
                  <span className="info-row-label">Rating</span>
                  <span className="info-row-value" style={{ color: '#F59E0B' }}>
                    ★ {tool.rating} / 5
                  </span>
                </div>
                <div className="info-row">
                  <span className="info-row-label">Tags</span>
                  <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                    {tool.tags.map(t => (
                      <span key={t} className="tag" style={{ fontSize: '11px' }}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className="info-row">
                  <span className="info-row-label">Website</span>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--primary)', fontSize: '13px', fontWeight: '600' }}
                  >
                    Visit ↗
                  </a>
                </div>
              </div>

              {/* Similar Tools */}
              {alternatives.length > 0 && (
                <div className="info-card">
                  <h4>Similar Tools</h4>
                  <div className="similar-tools">
                    {alternatives.map(alt => (
                      <Link key={alt.id} to={`/tools/${alt.id}`} className="similar-tool-card">
                        <div
                          className="similar-tool-logo"
                          style={{ background: `${alt.color}18` }}
                        >
                          {alt.logo}
                        </div>
                        <div>
                          <div className="similar-tool-name">{alt.name}</div>
                          <div className="similar-tool-tagline">{alt.tagline}</div>
                        </div>
                        <div style={{ marginLeft: 'auto', color: 'var(--primary)', fontSize: '14px' }}>→</div>
                      </Link>
                    ))}
                  </div>
                  <div style={{ marginTop: '16px' }}>
                    <Link
                      to="/alternatives"
                      className="btn btn-ghost btn-sm"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      See all alternatives →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
