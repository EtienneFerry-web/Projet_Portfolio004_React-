import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { useSEO } from '../hooks/useSEO';
import { useWishlist } from '../context/WishlistContext';
import ProductReviews from '../components/ProductReviews';
import '../styles/ProductDetail.css';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="pd__stars">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={s <= Math.round(rating) ? 'pd__star pd__star--filled' : 'pd__star'}>★</span>
      ))}
      <span className="pd__rating-value">{rating}</span>
    </div>
  );
}

const trustItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1" /><path d="M16 8h4l3 5v3h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    label: 'Free delivery from €200',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
      </svg>
    ),
    label: '30-day free returns',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    label: '5-year warranty',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    label: 'Secure payment',
  },
];

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { addItem } = useCart();
  const { showToast } = useToast();
  const { toggle: toggleWish, has: inWishlist } = useWishlist();
  const product = products.find((p) => p.id === Number(id));

  const [activeImg, setActiveImg] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [qty, setQty] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [activeTab, setActiveTab] = useState<'features' | 'dimensions' | 'materials'>('features');
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistSent, setWaitlistSent] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useSEO({
    title: product ? product.name : 'Product',
    description: product?.description,
    image: product?.images[0],
    url: product ? `/product/${product.id}` : undefined,
    type: 'product',
  });

  // Schema.org JSON-LD
  const schemaInjected = useRef(false);
  useEffect(() => {
    if (!product || schemaInjected.current) return;
    schemaInjected.current = true;

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      description: product.description,
      image: product.images,
      brand: { '@type': 'Brand', name: 'Simply Furniture' },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'EUR',
        price: product.price,
        availability: product.inStock
          ? 'https://schema.org/InStock'
          : 'https://schema.org/OutOfStock',
        url: window.location.href,
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: product.rating,
        reviewCount: product.reviews,
      },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'product-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => { document.getElementById('product-schema')?.remove(); };
  }, [product]);

  if (!product) {
    return (
      <div className="pd__not-found">
        <h2>Product not found</h2>
        <Link to="/catalog" className="btn btn--dark">Browse catalog</Link>
      </div>
    );
  }

  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .concat(products.filter((p) => p.id !== product.id && p.category !== product.category))
    .slice(0, 3);

  function handleAddToCart() {
    for (let i = 0; i < qty; i++) {
      addItem({
        id: product!.id,
        name: product!.name,
        price: product!.price,
        img: product!.images[0],
        color: product!.colors[selectedColor].value,
      });
    }
    setAddedToCart(true);
    showToast(`${product!.name} added to cart`);
    setTimeout(() => setAddedToCart(false), 2000);
  }

  function handleWaitlist(e: React.FormEvent) {
    e.preventDefault();
    setWaitlistSent(true);
    setWaitlistEmail('');
  }

  return (
    <div className="pd">
      <nav className="pd__breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/catalog">Catalog</Link>
        <span>/</span>
        <Link to={`/catalog?category=${encodeURIComponent(product.category)}`}>{product.category}</Link>
        <span>/</span>
        <span>{product.name}</span>
      </nav>

      <div className="pd__main">
        {/* Gallery */}
        <div className="pd__gallery">
          <div className="pd__thumbs">
            {product.images.map((img, i) => (
              <button
                key={i}
                className={`pd__thumb ${i === activeImg ? 'pd__thumb--active' : ''}`}
                onClick={() => setActiveImg(i)}
                aria-label={`View image ${i + 1}`}
              >
                <img src={img} alt={`${product.name} view ${i + 1}`} loading="lazy"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = '0'; }} />
              </button>
            ))}
          </div>
          <div className="pd__img-main" onClick={() => setLightboxOpen(true)} style={{ cursor: 'zoom-in' }}>
            <img src={product.images[activeImg]} alt={product.name} loading="eager"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = '0'; }} />
            {!product.inStock && <span className="pd__badge pd__badge--out">Out of stock</span>}
            {product.inStock && <span className="pd__badge pd__badge--new">New arrival</span>}
            <span className="pd__zoom-hint">🔍 Click to zoom</span>
          </div>

          {/* Lightbox */}
          {lightboxOpen && (
            <div className="pd__lightbox" onClick={() => setLightboxOpen(false)} role="dialog" aria-modal aria-label="Image zoom">
              <button className="pd__lightbox-close" onClick={() => setLightboxOpen(false)} aria-label="Close">✕</button>
              <div className="pd__lightbox-prev-next">
                <button onClick={(e) => { e.stopPropagation(); setActiveImg((i) => Math.max(0, i - 1)); }} aria-label="Previous image">←</button>
                <button onClick={(e) => { e.stopPropagation(); setActiveImg((i) => Math.min(product.images.length - 1, i + 1)); }} aria-label="Next image">→</button>
              </div>
              <img
                src={product.images[activeImg].replace('w=800', 'w=1400')}
                alt={product.name}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}
        </div>

        {/* Info */}
        <div className="pd__info">
          <p className="pd__category">{product.category}</p>
          <h1 className="pd__name">{product.name}</h1>
          <p className="pd__subtitle">{product.subtitle}</p>

          <div className="pd__meta">
            <StarRating rating={product.rating} />
            <span className="pd__reviews">({product.reviews} reviews)</span>
          </div>

          <p className="pd__price">€{product.price.toLocaleString()}</p>

          <p className="pd__desc">{product.description}</p>

          {/* Colour picker */}
          <div className="pd__option-group">
            <p className="pd__option-label">
              Colour — <strong>{product.colors[selectedColor].label}</strong>
            </p>
            <div className="pd__colors">
              {product.colors.map((c, i) => (
                <button
                  key={c.value}
                  className={`pd__color-swatch ${i === selectedColor ? 'pd__color-swatch--active' : ''}`}
                  style={{ backgroundColor: c.value }}
                  onClick={() => setSelectedColor(i)}
                  aria-label={c.label}
                  title={c.label}
                />
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="pd__option-group">
            <p className="pd__option-label">Quantity</p>
            <div className="pd__qty">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease">−</button>
              <span>{qty}</span>
              <button onClick={() => setQty((q) => Math.min(10, q + 1))} aria-label="Increase">+</button>
            </div>
          </div>

          {/* Actions */}
          <div className="pd__actions">
            <button
              className={`btn btn--dark pd__cta ${addedToCart ? 'pd__cta--added' : ''}`}
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              {addedToCart ? '✓ Added to cart' : 'Add to cart'}
            </button>
            <button
              className={`pd__wish-btn ${inWishlist(product.id) ? 'pd__wish-btn--active' : ''}`}
              onClick={() => toggleWish(product.id)}
              aria-label={inWishlist(product.id) ? 'Remove from wishlist' : 'Save to wishlist'}
            >
              ♥ {inWishlist(product.id) ? 'Saved' : 'Save'}
            </button>
          </div>

          {/* Trust signals */}
          <ul className="pd__trust">
            {trustItems.map((t) => (
              <li key={t.label} className="pd__trust-item">
                <span className="pd__trust-icon">{t.icon}</span>
                <span>{t.label}</span>
              </li>
            ))}
          </ul>

          {/* Waitlist */}
          {!product.inStock && (
            <div className="pd__waitlist">
              {waitlistSent ? (
                <p className="pd__waitlist-confirm">You're on the list! We'll notify you when it's back.</p>
              ) : (
                <form className="pd__waitlist-form" onSubmit={handleWaitlist}>
                  <p className="pd__stock-note">Out of stock — join the waitlist to be notified.</p>
                  <div className="pd__waitlist-row">
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={waitlistEmail}
                      onChange={(e) => setWaitlistEmail(e.target.value)}
                      className="pd__waitlist-input"
                      aria-label="Email for waitlist"
                    />
                    <button type="submit" className="btn btn--dark">Notify me</button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* Tabs */}
          <div className="pd__tabs">
            <div className="pd__tab-nav">
              {(['features', 'dimensions', 'materials'] as const).map((tab) => (
                <button
                  key={tab}
                  className={`pd__tab-btn ${activeTab === tab ? 'pd__tab-btn--active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            <div className="pd__tab-content">
              {activeTab === 'features' && (
                <ul className="pd__list">
                  {product.features.map((f) => (
                    <li key={f}><span className="pd__list-dot" />{f}</li>
                  ))}
                </ul>
              )}
              {activeTab === 'dimensions' && (
                <div className="pd__dim-wrap">
                  <svg className="pd__dim-svg" viewBox="0 0 320 220" fill="none" aria-hidden>
                    {/* Chair silhouette */}
                    <rect x="60" y="60" width="200" height="110" rx="12" fill="#f5f0eb" stroke="#c4703a" strokeWidth="1.5"/>
                    <rect x="60" y="60" width="200" height="55" rx="12" fill="#e8ddd3" stroke="#c4703a" strokeWidth="1.5"/>
                    <rect x="60" y="170" width="22" height="36" rx="4" fill="#d4c4b0" stroke="#c4703a" strokeWidth="1.5"/>
                    <rect x="238" y="170" width="22" height="36" rx="4" fill="#d4c4b0" stroke="#c4703a" strokeWidth="1.5"/>
                    {/* Width arrow */}
                    <line x1="60" y1="215" x2="260" y2="215" stroke="#888" strokeWidth="1"/>
                    <line x1="60" y1="210" x2="60" y2="220" stroke="#888" strokeWidth="1"/>
                    <line x1="260" y1="210" x2="260" y2="220" stroke="#888" strokeWidth="1"/>
                    <text x="160" y="213" textAnchor="middle" fontSize="10" fill="#555">{product.dimensions.width ?? product.dimensions.w ?? '–'}</text>
                    {/* Height arrow */}
                    <line x1="18" y1="60" x2="18" y2="206" stroke="#888" strokeWidth="1"/>
                    <line x1="13" y1="60" x2="23" y2="60" stroke="#888" strokeWidth="1"/>
                    <line x1="13" y1="206" x2="23" y2="206" stroke="#888" strokeWidth="1"/>
                    <text x="12" y="138" textAnchor="middle" fontSize="10" fill="#555" transform="rotate(-90 12 138)">{product.dimensions.height ?? product.dimensions.h ?? '–'}</text>
                    {/* Depth arrow */}
                    <line x1="60" y1="28" x2="260" y2="28" stroke="#888" strokeWidth="1"/>
                    <line x1="60" y1="23" x2="60" y2="33" stroke="#888" strokeWidth="1"/>
                    <line x1="260" y1="23" x2="260" y2="33" stroke="#888" strokeWidth="1"/>
                    <text x="160" y="26" textAnchor="middle" fontSize="10" fill="#555">{product.dimensions.depth ?? product.dimensions.d ?? '–'}</text>
                    {/* Seat height */}
                    <line x1="295" y1="115" x2="295" y2="206" stroke="#c4703a" strokeDasharray="3 2" strokeWidth="1"/>
                    <line x1="290" y1="115" x2="300" y2="115" stroke="#c4703a" strokeWidth="1"/>
                    <line x1="290" y1="206" x2="300" y2="206" stroke="#c4703a" strokeWidth="1"/>
                    <text x="308" y="164" textAnchor="middle" fontSize="9" fill="#c4703a" transform="rotate(-90 308 164)">{product.dimensions.seatHeight ?? product.dimensions.seat ?? '–'}</text>
                  </svg>
                  <table className="pd__table">
                    <tbody>
                      {Object.entries(product.dimensions).map(([key, val]) => (
                        <tr key={key}>
                          <td className="pd__table-key">{key.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase())}</td>
                          <td>{val}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {activeTab === 'materials' && (
                <ul className="pd__list">
                  {product.materials.map((m) => (
                    <li key={m}><span className="pd__list-dot" />{m}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      <ProductReviews productId={product.id} />

      {/* Related products */}
      <section className="pd__related">
        <h2 className="pd__related-title">You might also like</h2>
        <div className="pd__related-grid">
          {related.map((p) => (
            <Link key={p.id} to={`/product/${p.id}`} className="pd__related-card">
              <div className="pd__related-img">
                <img src={p.images[0]} alt={p.name} loading="lazy"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = '0'; }} />
              </div>
              <div className="pd__related-info">
                <p className="pd__related-name">{p.name}</p>
                <p className="pd__related-price">€{p.price.toLocaleString()}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
