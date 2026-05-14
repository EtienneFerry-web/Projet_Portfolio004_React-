import { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Classic Chairs', slug: 'Chairs', img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&auto=format&fit=crop&q=80' },
  { name: 'Armchairs', slug: 'Armchairs', img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=300&auto=format&fit=crop&q=80' },
  { name: 'Lounge Chairs', slug: 'Lounge+Chairs', img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=300&auto=format&fit=crop&q=80' },
  { name: 'Modern Chairs', slug: 'Chairs', img: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=300&auto=format&fit=crop&q=80' },
  { name: 'Accent Chairs', slug: 'Accent+Chairs', img: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=300&auto=format&fit=crop&q=80' },
  { name: 'Rocking Chairs', slug: 'Rocking+Chairs', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&auto=format&fit=crop&q=80' },
];

const VISIBLE = 4;

export default function ShopByCategory() {
  const [offset, setOffset] = useState(0);

  const canPrev = offset > 0;
  const canNext = offset + VISIBLE < categories.length;

  return (
    <section className="categories">
      <div className="categories__header">
        <h2 className="categories__title">Shop by Category</h2>
        <div className="categories__nav">
          <button
            className="categories__arrow"
            onClick={() => setOffset((o) => Math.max(0, o - 1))}
            disabled={!canPrev}
            aria-label="Previous"
          >
            ←
          </button>
          <button
            className="categories__arrow"
            onClick={() => setOffset((o) => Math.min(categories.length - VISIBLE, o + 1))}
            disabled={!canNext}
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>

      <div className="categories__list">
        {categories.slice(offset, offset + VISIBLE).map((cat) => (
          <Link to={`/catalog?category=${cat.slug}`} className="categories__item" key={cat.name}>
            <div className="categories__circle">
              <img
                src={cat.img}
                alt={cat.name}
                loading="lazy"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = '0'; }}
              />
            </div>
            <span className="categories__label">{cat.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
