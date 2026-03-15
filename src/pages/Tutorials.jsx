import { useState } from 'react'
import { tutorials } from '../data/tutorials'
import './Tutorials.css'

export default function Tutorials() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [query, setQuery] = useState('')

  const categories = ['All', ...new Set(tutorials.map(t => t.category))]

  const filtered = tutorials.filter(t => {
    const matchesCategory = activeFilter === 'All' || t.category === activeFilter
    const matchesQuery = !query ||
      t.title.toLowerCase().includes(query.toLowerCase()) ||
      t.description.toLowerCase().includes(query.toLowerCase())
    return matchesCategory && matchesQuery
  })

  return (
    <div className="tutorials-page page-enter">
      {/* Header */}
      <div className="page-header">
        <div className="container">
          <span className="section-label">📚 Learn</span>
          <h1 className="page-title">Tutorials & Guides</h1>
          <p className="page-subtitle">
            Beginner-friendly guides to help you get the most out of the best online tools.
            Learn at your own pace, for free.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="container">
        <div className="tutorials-filter-bar">
          <div className="search-container" style={{ flex: 1, maxWidth: '400px' }}>
            <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search tutorials..."
              className="search-input"
              style={{ paddingLeft: '40px', paddingTop: '10px', paddingBottom: '10px' }}
            />
          </div>
          <div className="filter-chips">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-chip ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="results-count">
          Showing <strong>{filtered.length}</strong> tutorial{filtered.length !== 1 ? 's' : ''}
          {activeFilter !== 'All' ? ` in ${activeFilter}` : ''}
        </p>
      </div>

      {/* Tutorials grid */}
      <div className="container" style={{ paddingBottom: '80px' }}>
        {filtered.length > 0 ? (
          <div className="tutorials-grid">
            {filtered.map(tutorial => (
              <TutorialCard key={tutorial.id} tutorial={tutorial} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <span className="empty-state-icon">📖</span>
            <h3>No tutorials found</h3>
            <p>Try a different search term or category.</p>
          </div>
        )}
      </div>
    </div>
  )
}

function TutorialCard({ tutorial }) {
  return (
    <div className="tutorial-card card">
      <div className="tutorial-card-header">
        <div
          className="tutorial-icon"
          style={{ background: `${tutorial.color}18` }}
        >
          {tutorial.icon}
        </div>
        <div className="tutorial-badges">
          <span className={`badge difficulty-${tutorial.difficulty.toLowerCase()}`}>
            {tutorial.difficulty}
          </span>
          <span className="badge" style={{ background: 'var(--bg)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}>
            {tutorial.readTime}
          </span>
        </div>
      </div>

      <div className="tutorial-card-body">
        <span className="tutorial-category">{tutorial.category}</span>
        <h3 className="tutorial-title">{tutorial.title}</h3>
        <p className="tutorial-desc">{tutorial.description}</p>

        {/* Topics */}
        <div className="tutorial-topics">
          {tutorial.topics.map(topic => (
            <span key={topic} className="tag">{topic}</span>
          ))}
        </div>
      </div>

      <div className="tutorial-card-footer">
        <span className="tutorial-date">📅 {tutorial.publishedAt}</span>
        <button className="btn btn-ghost btn-sm">Read More →</button>
      </div>
    </div>
  )
}
