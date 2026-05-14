import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartDrawer from './CartDrawer';
import Logo from './Logo';

export default function Navbar() {
  const { totalCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar__logo" aria-label="Simply Furniture — Home">
          <Logo className="navbar__logo-svg" />
        </Link>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <li><NavLink to="/#about" onClick={() => setMenuOpen(false)}>About us</NavLink></li>
          <li><NavLink to="/catalog" onClick={() => setMenuOpen(false)}>Catalog</NavLink></li>
          <li><NavLink to="/#offers" onClick={() => setMenuOpen(false)}>Offers</NavLink></li>
          <li><NavLink to="/#delivery" onClick={() => setMenuOpen(false)}>Delivery</NavLink></li>
        </ul>

        <div className="navbar__right">
          <button
            className="navbar__cart"
            aria-label={`Open cart — ${totalCount} item${totalCount !== 1 ? 's' : ''}`}
            onClick={() => setCartOpen(true)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            {totalCount > 0 && (
              <span className="navbar__cart-badge" aria-hidden>{totalCount}</span>
            )}
          </button>

          <button
            className="navbar__hamburger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className={`navbar__burger-line ${menuOpen ? 'navbar__burger-line--top-open' : ''}`} />
            <span className={`navbar__burger-line ${menuOpen ? 'navbar__burger-line--mid-open' : ''}`} />
            <span className={`navbar__burger-line ${menuOpen ? 'navbar__burger-line--bot-open' : ''}`} />
          </button>
        </div>
      </nav>

      {menuOpen && <div className="navbar__overlay" onClick={() => setMenuOpen(false)} aria-hidden />}

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
