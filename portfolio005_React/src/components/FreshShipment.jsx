import { useState } from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Aurelian Lounge',
    subtitle: 'Modern Classic Silhouette',
    description: 'A timeless armchair wrapped in rich caramel corduroy, blending vintage character with modern refinement.',
    price: '$349',
    colors: ['#4A6B52', '#C4703A', '#8B2020'],
    img: 'https://images.unsplash.com/photo-1586158291800-2665f07bba79?w=600&auto=format&fit=crop&q=80',
    imgSide: 'https://images.unsplash.com/photo-1586158291800-2665f07bba79?w=300&auto=format&fit=crop&q=80',
    number: '01',
  },
  {
    id: 2,
    name: 'Nova Chair',
    subtitle: 'Contemporary Elegance',
    description: 'Designed to elevate any room with warmth and quiet sophistication. Crafted for long-lasting comfort.',
    price: '$289',
    colors: ['#D4B896', '#7A9A7E', '#3D2B1A'],
    img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&auto=format&fit=crop&q=80',
    imgSide: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=300&auto=format&fit=crop&q=80',
    number: '02',
  },
];

export default function FreshShipment() {
  const [active, setActive] = useState(0);
  const product = products[active];

  return (
    <section className="shipment">
      <h2 className="shipment__title">Fresh shipment</h2>

      <div className="shipment__card">
        <div className="shipment__info">
          <p className="shipment__number">{product.number}</p>
          <h3 className="shipment__name">{product.name}</h3>
          <p className="shipment__sub">{product.subtitle}</p>

          <div className="shipment__colors">
            {product.colors.map((c) => (
              <span
                key={c}
                className="shipment__color"
                style={{ backgroundColor: c }}
                aria-label={`Color ${c}`}
              />
            ))}
          </div>

          <p className="shipment__desc">{product.description}</p>

          <div className="shipment__actions">
            <Link to={`/product/${product.id}`} className="btn btn--dark">View details</Link>
            <button className="btn btn--outline">Add to cart</button>
          </div>
        </div>

        <div className="shipment__img-main">
          <img src={product.img} alt={product.name} />
        </div>

        <div className="shipment__img-side">
          <img src={product.imgSide} alt={`${product.name} side view`} />
          <p className="shipment__side-text">Designed to elevate any room with warmth and quiet sophistication.</p>
        </div>

        <div className="shipment__pagination">
          <button onClick={() => setActive((a) => Math.max(0, a - 1))} aria-label="Previous">←</button>
          <button onClick={() => setActive((a) => Math.min(products.length - 1, a + 1))} aria-label="Next">→</button>
        </div>
      </div>
    </section>
  );
}
