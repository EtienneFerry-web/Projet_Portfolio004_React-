import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import '../styles/ProductDetail.css';

function StarRating({ rating }) {
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
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  const [activeImg, setActiveImg] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [qty, setQty] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [activeTab, setActiveTab] = useState('features');

  if (!product) {
    return (
      <div className="pd__not-found">
        <h2>Product not found</h2>
        <Link to="/" className="btn btn--dark">Back to home</Link>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 2);

  function handleAddToCart() {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  }

  return (
    <div className="pd">
      {/* Breadcrumb */}
      <nav className="pd__breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>{product.category}</span>
        <span>/</span>
        <span>{product.name}</span>
      </nav>

      {/* Main layout */}
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
                <img src={img} alt={`${product.name} view ${i + 1}`} />
              </button>
            ))}
          </div>
          <div className="pd__img-main">
            <img src={product.images[activeImg]} alt={product.name} />
            {!product.inStock && <span className="pd__badge pd__badge--out">Out of stock</span>}
            {product.inStock && <span className="pd__badge pd__badge--new">New arrival</span>}
          </div>
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

          <p className="pd__price">${product.price.toLocaleString()}</p>

          <p className="pd__desc">{product.description}</p>

          {/* Color picker */}
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
              <button onClick={() => setQty((q) => q + 1)} aria-label="Increase">+</button>
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
              className="btn btn--outline"
              onClick={() => navigate(-1)}
            >
              ← Back
            </button>
          </div>

          {!product.inStock && (
            <p className="pd__stock-note">This item is currently out of stock. Join the waitlist.</p>
          )}

          {/* Tabs */}
          <div className="pd__tabs">
            <div className="pd__tab-nav">
              {['features', 'dimensions', 'materials'].map((tab) => (
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
                    <li key={f}>
                      <span className="pd__list-dot" />
                      {f}
                    </li>
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
                    <li key={m}>
                      <span className="pd__list-dot" />
                      {m}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="pd__related">
        <h2 className="pd__related-title">You might also like</h2>
        <div className="pd__related-grid">
          {related.map((p) => (
            <Link key={p.id} to={`/product/${p.id}`} className="pd__related-card">
              <div className="pd__related-img">
                <img src={p.images[0]} alt={p.name} />
              </div>
              <div className="pd__related-info">
                <p className="pd__related-name">{p.name}</p>
                <p className="pd__related-price">${p.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
