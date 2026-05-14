import { useState } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    name: 'Aurelian Lounge',
    subtitle: 'Modern Classic Silhouette',
    price: 349,
    img: 'https://images.unsplash.com/photo-1586158291800-2665f07bba79?w=700&auto=format&fit=crop&q=80',
    bg: '#C4703A',
  },
  {
    id: 2,
    name: 'Verta Lounge',
    subtitle: 'Soft & Contemporary',
    price: 415,
    img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=700&auto=format&fit=crop&q=80',
    bg: '#7A9A7E',
  },
];

const thumbnails = [
  {
    name: 'Koris',
    id: 6,
    img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=200&auto=format&fit=crop&q=80',
  },
  {
    name: 'Nova',
    id: 2,
    img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&auto=format&fit=crop&q=80',
  },
  {
    name: 'Verta',
    id: 5,
    img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=200&auto=format&fit=crop&q=80',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  return (
    <section className="hero" style={{ '--hero-bg': slide.bg } as React.CSSProperties}>
      <div className="hero__content">
        <h1 className="hero__title">
          <span className="hero__title--big">simply</span>
          <span className="hero__title--small">furniture</span>
        </h1>
        <p className="hero__tagline">Simple furniture<br />for soft life</p>
        <Link to="/catalog" className="btn btn--light">Browse collection</Link>
      </div>

      <div className="hero__chair-wrap">
        <Link to={`/product/${slide.id}`}>
          <img
            className="hero__chair"
            src={slide.img}
            alt={slide.name}
            loading="eager"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = '0'; }}
          />
        </Link>
      </div>

      <div className="hero__thumbnails">
        {thumbnails.map((t) => (
          <Link to={`/product/${t.id}`} className="hero__thumb" key={t.name}>
            <img src={t.img} alt={t.name} loading="lazy" />
            <span>{t.name}</span>
          </Link>
        ))}
      </div>

      <div className="hero__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero__dot${i === current ? ' hero__dot--active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
