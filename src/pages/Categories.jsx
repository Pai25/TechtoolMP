import { categories } from '../data/categories'
import { tools } from '../data/tools'
import CategoryCard from '../components/CategoryCard'
import './Categories.css'

export default function Categories() {
  return (
    <div className="categories-page page-enter">
      {/* Page header */}
      <div className="page-header">
        <div className="container">
          <span className="section-label">🗂️ Browse</span>
          <h1 className="page-title">All Categories</h1>
          <p className="page-subtitle">
            Explore {tools.length}+ carefully curated tools across {categories.length} categories.
            From AI to developer utilities — find what you need.
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container" style={{ padding: '56px 24px 80px' }}>
        <div className="grid-3">
          {categories.map(cat => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="categories-cta">
          <div className="categories-cta-inner">
            <span className="cta-emoji">🛠️</span>
            <div>
              <h3>Can't find what you're looking for?</h3>
              <p>We're constantly adding new tools. Check back regularly for fresh discoveries.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
