import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer" id="about">
      <div className="footer__top">
        <div className="footer__brand">
          <Logo className="footer__logo-svg" />
          <p className="footer__tagline">Simple furniture for soft life</p>
          <div className="footer__payment">
            <span className="footer__payment-label">Secure payment</span>
            <div className="footer__payment-icons">
              {/* Visa */}
              <svg viewBox="0 0 48 16" aria-label="Visa"><rect width="48" height="16" rx="3" fill="#1A1F71"/><text x="7" y="12" fill="#fff" fontFamily="Arial" fontSize="10" fontWeight="700" fontStyle="italic">VISA</text></svg>
              {/* Mastercard */}
              <svg viewBox="0 0 38 24" aria-label="Mastercard"><circle cx="14" cy="12" r="10" fill="#EB001B"/><circle cx="24" cy="12" r="10" fill="#F79E1B"/><path d="M19 6.8a10 10 0 010 10.4A10 10 0 0119 6.8z" fill="#FF5F00"/></svg>
              {/* PayPal */}
              <svg viewBox="0 0 60 20" aria-label="PayPal"><rect width="60" height="20" rx="3" fill="#003087"/><text x="8" y="14" fill="#009CDE" fontFamily="Arial" fontSize="10" fontWeight="700">Pay</text><text x="26" y="14" fill="#fff" fontFamily="Arial" fontSize="10" fontWeight="700">Pal</text></svg>
              {/* Amex */}
              <svg viewBox="0 0 48 16" aria-label="American Express"><rect width="48" height="16" rx="3" fill="#2E77BC"/><text x="6" y="12" fill="#fff" fontFamily="Arial" fontSize="7" fontWeight="700">AMERICAN EXPRESS</text></svg>
            </div>
          </div>
        </div>

        <div className="footer__cols">
          <div className="footer__col">
            <h4>Catalog</h4>
            <ul>
              <li><Link to="/catalog?category=Armchairs">Armchairs</Link></li>
              <li><Link to="/catalog?category=Sofas">Sofas</Link></li>
              <li><Link to="/catalog?category=Lounge+Chairs">Lounge Chairs</Link></li>
              <li><Link to="/catalog?category=Chairs">Modern Chairs</Link></li>
              <li><Link to="/catalog">All products</Link></li>
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
      </div>

      <div className="footer__bottom">
        <p>© 2026 Simply Furniture. All rights reserved.</p>
        <div className="footer__legal-links">
          <Link to="/legal/cgv">Terms & Conditions</Link>
          <Link to="/legal/returns">Returns Policy</Link>
          <Link to="/legal/privacy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
