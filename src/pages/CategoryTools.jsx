import { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { getCategoryById } from '../data/categories'
import { getToolsByCategory } from '../data/tools'
import ToolCard from '../components/ToolCard'
import './CategoryTools.css'

export default function CategoryTools() {
  const { categoryId } = useParams()
  const [sortBy, setSortBy] = useState('rating')
  const [query, setQuery] = useState('')

  const category = getCategoryById(categoryId)
  const allTools = getToolsByCategory(categoryId)

  if (!category) return <Navigate to="/categories" replace />

  const filtered = allTools
    .filter(t =>
      !query ||
      t.name.toLowerCase().includes(query.toLowerCase()) ||
      t.description.toLowerCase().includes(query.toLowerCase()) ||
      t.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating
      if (sortBy === 'name') return a.name.localeCompare(b.name)
      return 0
    })

  return (
    <div className="category-tools-page page-enter">
      {/* Header */}
      <div className="category-page-header" style={{ background: `${category.color}08`, paddingTop: '68px' }}>
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/categories">Categories</Link>
            <span>/</span>
            <span>{category.name}</span>
          </div>
          <div className="category-page-header-inner">
            <div
              className="category-big-icon"
              style={{ background: `${category.color}20`, border: `2px solid ${category.color}30` }}
            >
              {category.icon}
            </div>
            <div>
              <h1 className="page-title" style={{ margin: 0 }}>{category.name}</h1>
              <p className="page-subtitle" style={{ marginTop: '8px' }}>{category.description}</p>
              <div style={{ marginTop: '12px' }}>
                <span className="badge" style={{ background: `${category.color}15`, color: category.color }}>
                  {allTools.length} tools available
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter bar */}
      <div className="container">
        <div className="tools-filter-bar">
          <div className="search-container" style={{ flex: 1, maxWidth: '360px' }}>
            <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder={`Search ${category.name}...`}
              className="search-input"
              style={{ paddingLeft: '40px', paddingTop: '10px', paddingBottom: '10px' }}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto' }}>
            <span className="filter-label">Sort:</span>
            <div className="filter-chips">
              {[
                { value: 'rating', label: '⭐ Rating' },
                { value: 'name', label: '🔤 Name' },
              ].map(opt => (
                <button
                  key={opt.value}
                  className={`filter-chip ${sortBy === opt.value ? 'active' : ''}`}
                  onClick={() => setSortBy(opt.value)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tools grid */}
      <div className="container" style={{ paddingBottom: '80px' }}>
        {filtered.length > 0 ? (
          <div className="grid-3">
            {filtered.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <span className="empty-state-icon">🔍</span>
            <h3>No tools found</h3>
            <p>Try a different search term.</p>
          </div>
        )}
      </div>
    </div>
  )
}
