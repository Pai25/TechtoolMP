import { Link } from 'react-router-dom'
import './ToolCard.css'

export default function ToolCard({ tool, size = 'default' }) {
  const stars = Math.round(tool.rating)

  return (
    <Link to={`/tools/${tool.id}`} className={`tool-card card ${size}`}>
      {/* Header */}
      <div className="tool-card-header">
        <div
          className="tool-logo"
          style={{ background: `${tool.color}18`, border: `1px solid ${tool.color}30` }}
        >
          <span>{tool.logo}</span>
        </div>
        <div className="tool-meta">
          <span className="tool-category-badge">
            {tool.category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </span>
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="star" style={{ color: i < stars ? '#F59E0B' : '#D1D5DB' }}>★</span>
            ))}
            <span className="rating-text">{tool.rating}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="tool-card-body">
        <h3 className="tool-name">{tool.name}</h3>
        <p className="tool-tagline">{tool.tagline}</p>
        <p className="tool-description">{tool.description.slice(0, 120)}...</p>
      </div>

      {/* Tags */}
      <div className="tool-tags">
        {tool.tags.slice(0, 3).map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>

      {/* Footer */}
      <div className="tool-card-footer">
        <span className="tool-card-cta">View Details →</span>
      </div>
    </Link>
  )
}
