export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <span>S</span>
      </div>

      <ul className="navbar__links">
        <li><a href="#about">About us</a></li>
        <li><a href="#catalog">Catalog</a></li>
        <li><a href="#offers">Offers</a></li>
        <li><a href="#delivery">Delivery</a></li>
      </ul>

      <button className="navbar__cart" aria-label="Open cart">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 01-8 0" />
        </svg>
      </button>
    </nav>
  );
}
