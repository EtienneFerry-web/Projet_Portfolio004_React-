import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import '../styles/ProductDetail.css';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="pd__stars">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={s <= Math.round(rating) ? 'pd__star pd__star--filled' : 'pd__star'}>
          ★
        </span>
      ))}
      <span className="pd__rating-value">{rating}</span>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const product = products.find((p) => p.id === Number(id));

  const [activeImg, setActiveImg] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [qty, setQty] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [activeTab, setActiveTab] = useState<'features' | 'dimensions' | 'materials'>('features');
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistSent, setWaitlistSent] = useState(false);

  useEffect(() => {
    if (product) {
      document.title = `${product.name} — Simply Furniture`;
    }
    return () => { document.title = 'Simply Furniture'; };
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
        <span>{product.category}</span>
        <span>/</span>
        <span>{product.name}</span>
      </nav>

      <div className="pd__main">
        <div className="pd__gallery">
          <div className="pd__thumbs">
            {product.images.map((img, i) => (
              <button
                key={i}
                className={`pd__thumb ${i === activeImg ? 'pd__thumb--active' : ''}`}
                onClick={() => setActiveImg(i)}
                aria-label={`View image ${i + 1}`}
              >
                <img
                  src={img}
                  alt={`${product.name} view ${i + 1}`}
                  loading="lazy"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = '0'; }}
                />
              </button>
            ))}
          </div>
          <div className="pd__img-main">
            <img
              src={product.images[activeImg]}
              alt={product.name}
              loading="eager"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = '0'; }}
            />
            {!product.inStock && <span className="pd__badge pd__badge--out">Out of stock</span>}
            {product.inStock && <span className="pd__badge pd__badge--new">New arrival</span>}
          </div>
        </div>

        <div className="pd__info">
          <p className="pd__category">{product.category}</p>
          <h1 className="pd__name">{product.name}</h1>
          <p className="pd__subtitle">{product.subtitle}</p>

          <div className="pd__meta">
            <StarRating rating={product.rating} />
            <span className="pd__reviews">({product.reviews} reviews)</span>
          </div>

          <p className="pd__price">${product.price.toLocaleString()}</p>

          <p className="pd__desc">{product.description}</p>

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

          <div className="pd__option-group">
            <p className="pd__option-label">Quantity</p>
            <div className="pd__qty">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease">−</button>
              <span>{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} aria-label="Increase">+</button>
            </div>
          </div>

          <div className="pd__actions">
            <button
              className={`btn btn--dark pd__cta ${addedToCart ? 'pd__cta--added' : ''}`}
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              {addedToCart ? '✓ Added to cart' : 'Add to cart'}
            </button>
            <button className="btn btn--outline" onClick={() => navigate(-1)}>
              ← Back
            </button>
          </div>

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
                <table className="pd__table">
                  <tbody>
                    {Object.entries(product.dimensions).map(([key, val]) => (
                      <tr key={key}>
                        <td className="pd__table-key">{key.charAt(0).toUpperCase() + key.slice(1)}</td>
                        <td>{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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

      <section className="pd__related">
        <h2 className="pd__related-title">You might also like</h2>
        <div className="pd__related-grid">
          {related.map((p) => (
            <Link key={p.id} to={`/product/${p.id}`} className="pd__related-card">
              <div className="pd__related-img">
                <img
                  src={p.images[0]}
                  alt={p.name}
                  loading="lazy"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = '0'; }}
                />
              </div>
              <div className="pd__related-info">
                <p className="pd__related-name">{p.name}</p>
                <p className="pd__related-price">${p.price.toLocaleString()}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
