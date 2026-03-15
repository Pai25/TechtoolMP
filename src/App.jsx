import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Categories from './pages/Categories'
import CategoryTools from './pages/CategoryTools'
import ToolDetails from './pages/ToolDetails'
import Tutorials from './pages/Tutorials'
import Alternatives from './pages/Alternatives'
import SearchResults from './pages/SearchResults'

function ScrollRestoration() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:categoryId" element={<CategoryTools />} />
          <Route path="/tools/:toolId" element={<ToolDetails />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/alternatives" element={<Alternatives />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
