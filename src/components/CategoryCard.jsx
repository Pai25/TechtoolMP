import { Link } from 'react-router-dom'
import './CategoryCard.css'

export default function CategoryCard({ category }) {
  return (
    <Link to={`/categories/${category.id}`} className="category-card card">
      <div className="category-icon-wrap" style={{ background: `${category.color}15` }}>
        <span className="category-icon">{category.icon}</span>
      </div>
      <div className="category-card-body">
        <h3 className="category-name">{category.name}</h3>
        <p className="category-desc">{category.description}</p>
      </div>
      <div className="category-card-footer">
        <span className="category-count">{category.count} tools</span>
        <span className="category-arrow" style={{ color: category.color }}>→</span>
      </div>
      <div
        className="category-accent"
        style={{ background: category.color }}
      />
    </Link>
  )
}
