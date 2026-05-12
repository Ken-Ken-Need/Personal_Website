import { NavLink } from 'react-router-dom'
import { profile } from '../../data/profile'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={`page ${styles.inner}`}>
        <NavLink to="/" className={styles.brand}>
          {profile.name}
        </NavLink>
        <ul className={styles.links}>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''}>about</NavLink></li>
          <li><NavLink to="/projects" className={({ isActive }) => isActive ? styles.active : ''}>projects</NavLink></li>
          <li><NavLink to="/research" className={({ isActive }) => isActive ? styles.active : ''}>research</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : ''}>contact</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}
