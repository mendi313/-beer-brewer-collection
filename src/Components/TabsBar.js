import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './TabsBar.css'

export default function TabsBar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Beers Catalog
      </Link>
      <ul>
        <CustomLink to="/">Catalog</CustomLink>
        <CustomLink to="/favorits">favorits</CustomLink>
      </ul>
    </nav>  
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}