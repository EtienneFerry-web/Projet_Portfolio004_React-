import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer" id="about">
      <div className="footer__brand">
        <div className="footer__logo">S</div>
        <p className="footer__tagline">Simple furniture for soft life</p>
      </div>

      <div className="footer__cols">
        <div className="footer__col">
          <h4>Catalog</h4>
          <ul>
            <li><Link to="/catalog?category=Armchairs">Armchairs</Link></li>
            <li><Link to="/catalog?category=Sofas">Sofas</Link></li>
            <li><Link to="/catalog?category=Lounge+Chairs">Lounge Chairs</Link></li>
            <li><Link to="/catalog?category=Chairs">Modern Chairs</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/#about">About us</Link></li>
            <li><Link to="/#offers">Offers</Link></li>
            <li><Link to="/#delivery">Delivery</Link></li>
            <li><a href="mailto:hello@simplyfurniture.com">Contact</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Follow us</h4>
          <ul>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2026 Simply Furniture. All rights reserved.</p>
      </div>
    </footer>
  );
}
