import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { tools } from '../data/tools'
import { categories } from '../data/categories'
import ToolCard from '../components/ToolCard'
import CategoryCard from '../components/CategoryCard'
import './SearchResults.css'

export default function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') || '')

  const q = searchParams.get('q') || ''

  const matchedTools = q
    ? tools.filter(t =>
        t.name.toLowerCase().includes(q.toLowerCase()) ||
        t.description.toLowerCase().includes(q.toLowerCase()) ||
        t.tags.some(tag => tag.toLowerCase().includes(q.toLowerCase())) ||
        t.tagline.toLowerCase().includes(q.toLowerCase()) ||
        t.category.toLowerCase().replace(/-/g, ' ').includes(q.toLowerCase())
      )
    : []

  const matchedCategories = q
    ? categories.filter(c =>
        c.name.toLowerCase().includes(q.toLowerCase()) ||
        c.description.toLowerCase().includes(q.toLowerCase())
      )
    : []

  const totalResults = matchedTools.length + matchedCategories.length

  const handleSearch = (e) => {
    e.preventDefault()
    if (query.trim()) {
      setSearchParams({ q: query.trim() })
    }
  }

  return (
    <div className="search-results-page page-enter">
      <div className="search-results-header">
        <div className="container">
          <h1 className="page-title">
            {q ? `Results for "${q}"` : 'Search Tools'}
          </h1>
          {q && (
            <p className="page-subtitle">
              Found <strong>{totalResults}</strong> result{totalResults !== 1 ? 's' : ''}
            </p>
          )}
          {/* Search bar */}
          <form onSubmit={handleSearch} className="search-results-form">
            <div className="search-container">
              <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search for tools..."
                className="search-input"
                style={{ fontSize: '16px', padding: '14px 20px 14px 52px' }}
                autoFocus
              />
            </div>
            <button type="submit" className="btn btn-primary">Search</button>
          </form>
        </div>
      </div>

      <div className="container" style={{ padding: '40px 24px 80px' }}>
        {!q && (
          <div className="empty-state">
            <span className="empty-state-icon">🔍</span>
            <h3>Start Searching</h3>
            <p>Type a tool name, category, or feature to find what you need.</p>
          </div>
        )}

        {q && totalResults === 0 && (
          <div className="empty-state">
            <span className="empty-state-icon">😕</span>
            <h3>No results for "{q}"</h3>
            <p>Try different keywords or browse all categories below.</p>
            <div style={{ marginTop: '24px' }}>
              <Link to="/categories" className="btn btn-primary">Browse Categories</Link>
            </div>
          </div>
        )}

        {matchedCategories.length > 0 && (
          <div className="results-section">
            <h2 className="results-section-title">Categories ({matchedCategories.length})</h2>
            <div className="grid-3" style={{ marginBottom: '16px' }}>
              {matchedCategories.map(cat => (
                <CategoryCard key={cat.id} category={cat} />
              ))}
            </div>
          </div>
        )}

        {matchedTools.length > 0 && (
          <div className="results-section">
            <h2 className="results-section-title">Tools ({matchedTools.length})</h2>
            <div className="grid-3">
              {matchedTools.map(tool => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
