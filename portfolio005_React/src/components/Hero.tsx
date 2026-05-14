import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    name: 'Aurelian Lounge',
    subtitle: 'Modern Classic Silhouette',
    price: 349,
    img: 'https://images.unsplash.com/photo-1586158291800-2665f07bba79?w=700&auto=format&fit=crop&q=80',
    thumb: 'https://images.unsplash.com/photo-1586158291800-2665f07bba79?w=200&auto=format&fit=crop&q=70',
    bg: '#C4703A',
  },
  {
    id: 2,
    name: 'Nova Chair',
    subtitle: 'Contemporary Elegance',
    price: 289,
    img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=700&auto=format&fit=crop&q=80',
    thumb: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=200&auto=format&fit=crop&q=70',
    bg: '#7A9A7E',
  },
  {
    id: 3,
    name: 'Velvet Throne',
    subtitle: 'Luxury Statement Piece',
    price: 495,
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&auto=format&fit=crop&q=80',
    thumb: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&auto=format&fit=crop&q=70',
    bg: '#2D6A4F',
  },
];

const AUTOPLAY_MS = 5000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" style={{ '--hero-bg': slide.bg } as React.CSSProperties}>
      <div className="hero__content">
        <h1 className="hero__title">
          <span className="hero__title--big">simply</span>
          <span className="hero__title--small">furniture</span>
        </h1>
        <p className="hero__tagline">Simple furniture<br />for soft life</p>
        <div className="hero__ctas">
          <Link to="/catalog" className="btn btn--light">Browse collection</Link>
          <Link to={`/product/${slide.id}`} className="hero__cta-secondary">
            View {slide.name} — €{slide.price}
          </Link>
        </div>
      </div>

      <div className="hero__chair-wrap">
        <Link to={`/product/${slide.id}`} aria-label={`View ${slide.name}`}>
          <img
            className="hero__chair"
            src={slide.img}
            alt={slide.name}
            loading="eager"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = '0'; }}
          />
        </Link>
      </div>

      {/* Thumbnails — synchronisées avec les slides, clic change le slide actif */}
      <div className="hero__thumbnails">
        {slides.map((s, i) => (
          <button
            key={s.id}
            className={`hero__thumb ${i === current ? 'hero__thumb--active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Show ${s.name}`}
            aria-pressed={i === current}
          >
            <img src={s.thumb} alt={s.name} loading="lazy" />
            <span>{s.name}</span>
          </button>
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

      {/* Barre de progression autoplay */}
      <div className="hero__progress" key={current}>
        <div className="hero__progress-bar" style={{ animationDuration: `${AUTOPLAY_MS}ms` }} />
      </div>
    </section>
  );
}
