import { useState } from 'react'
import { Link } from 'react-router-dom'
import { alternativesData } from '../data/alternatives'
import './Alternatives.css'

export default function Alternatives() {
  const [activeId, setActiveId] = useState(null)

  return (
    <div className="alternatives-page page-enter">
      {/* Header */}
      <div className="page-header">
        <div className="container">
          <span className="section-label">🔄 Compare</span>
          <h1 className="page-title">Tool Alternatives</h1>
          <p className="page-subtitle">
            Not sure if a tool is right for you? Explore the best alternatives to popular tools
            and find the perfect fit for your workflow.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container" style={{ padding: '48px 24px 80px' }}>
        <div className="alt-list">
          {alternativesData.map(entry => (
            <div key={entry.id} className="alt-section">
              {/* Original tool header */}
              <div
                className="alt-original-header"
                onClick={() => setActiveId(activeId === entry.id ? null : entry.id)}
              >
                <div className="alt-original-info">
                  <div
                    className="alt-original-icon"
                    style={{ background: `${entry.original.color}18`, border: `2px solid ${entry.original.color}25` }}
                  >
                    {entry.original.icon}
                  </div>
                  <div>
                    <h2 className="alt-original-name">
                      Alternatives to <span>{entry.original.name}</span>
                    </h2>
                    <p className="alt-original-desc">{entry.original.description}</p>
                  </div>
                </div>
                <div className="alt-toggle">
                  <span className="alt-count">{entry.alternatives.length} alternatives</span>
                  <span className="alt-chevron">{activeId === entry.id ? '▲' : '▼'}</span>
                </div>
              </div>

              {/* Alternatives */}
              {(activeId === entry.id || activeId === null) && (
                <div className="alt-cards-grid">
                  {entry.alternatives.map(alt => (
                    <div key={alt.name} className="alt-card card">
                      <div className="alt-card-header">
                        <div
                          className="alt-card-icon"
                          style={{ background: `${alt.color}18` }}
                        >
                          {alt.icon}
                        </div>
                        <div className="alt-card-info">
                          <h3 className="alt-card-name">{alt.name}</h3>
                          <span className="alt-price-badge">{alt.pricing}</span>
                        </div>
                      </div>

                      <div className="alt-card-body">
                        <div className="alt-section-mini">
                          <div className="alt-mini-label pros">✓ Strengths</div>
                          <ul className="alt-mini-list">
                            {alt.strengths.map(s => (
                              <li key={s}>{s}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="alt-section-mini">
                          <div className="alt-mini-label cons">✗ Weaknesses</div>
                          <ul className="alt-mini-list">
                            {alt.weaknesses.map(w => (
                              <li key={w}>{w}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="alt-best-for">
                          <span className="alt-best-label">Best for:</span>
                          <span className="alt-best-value">{alt.bestFor}</span>
                        </div>
                      </div>

                      {alt.toolId && (
                        <div className="alt-card-footer">
                          <Link to={`/tools/${alt.toolId}`} className="btn btn-ghost btn-sm">
                            View Tool Details →
                          </Link>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
