import { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

const FEATURED_IDS = [1, 2];

export default function FreshShipment() {
  const featuredProducts = products.filter((p) => FEATURED_IDS.includes(p.id));
  const [active, setActive] = useState(0);
  const product = featuredProducts[active];
  const { addItem } = useCart();
  const { showToast } = useToast();

  function handleAddToCart() {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.images[0],
      color: product.colors[0].value,
    });
    showToast(`${product.name} added to cart`);
  }

  return (
    <section className="shipment">
      <h2 className="shipment__title">Fresh shipment</h2>

      <div className="shipment__card">
        <div className="shipment__info">
          <p className="shipment__number">0{active + 1}</p>
          <h3 className="shipment__name">{product.name}</h3>
          <p className="shipment__sub">{product.subtitle}</p>

          <div className="shipment__colors">
            {product.colors.map((c) => (
              <span
                key={c.value}
                className="shipment__color"
                style={{ backgroundColor: c.value }}
                aria-label={c.label}
                title={c.label}
              />
            ))}
          </div>

          <p className="shipment__desc">{product.description}</p>

          <div className="shipment__actions">
            <Link to={`/product/${product.id}`} className="btn btn--dark">View details</Link>
            <button className="btn btn--outline" onClick={handleAddToCart}>Add to cart</button>
          </div>
        </div>

        <div className="shipment__img-main">
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = '0'; }}
          />
        </div>

        <div className="shipment__img-side">
          <img
            src={product.images[1]}
            alt={`${product.name} side view`}
            loading="lazy"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = '0'; }}
          />
          <p className="shipment__side-text">Designed to elevate any room with warmth and quiet sophistication.</p>
        </div>

        <div className="shipment__pagination">
          <button onClick={() => setActive((a) => Math.max(0, a - 1))} aria-label="Previous">←</button>
          <button onClick={() => setActive((a) => Math.min(featuredProducts.length - 1, a + 1))} aria-label="Next">→</button>
        </div>
      </div>
    </section>
  );
}
