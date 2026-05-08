import { useState } from 'react';

const categories = [
  {
    name: 'Classic Chairs',
    img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&auto=format&fit=crop&q=80',
  },
  {
    name: 'Armchairs',
    img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=300&auto=format&fit=crop&q=80',
  },
  {
    name: 'Lounge Chairs',
    img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=300&auto=format&fit=crop&q=80',
  },
  {
    name: 'Modern Chairs',
    img: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=300&auto=format&fit=crop&q=80',
  },
  {
    name: 'Accent Chairs',
    img: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=300&auto=format&fit=crop&q=80',
  },
  {
    name: 'Rocking Chairs',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&auto=format&fit=crop&q=80',
  },
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
          <div className="categories__item" key={cat.name}>
            <div className="categories__circle">
              <img src={cat.img} alt={cat.name} />
            </div>
            <span className="categories__label">{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
