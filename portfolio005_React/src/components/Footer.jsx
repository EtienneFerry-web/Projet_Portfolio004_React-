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
            <li><a href="#">Armchairs</a></li>
            <li><a href="#">Sofas</a></li>
            <li><a href="#">Lounge Chairs</a></li>
            <li><a href="#">Modern Chairs</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Offers</a></li>
            <li><a href="#">Delivery</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Follow us</h4>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Pinterest</a></li>
            <li><a href="#">Facebook</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2026 Simply Furniture. All rights reserved.</p>
      </div>
    </footer>
  );
}
