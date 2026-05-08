import { useState } from 'react';

const slides = [
  {
    id: 1,
    name: 'Aurelian Lounge',
    subtitle: 'Modern Classic Silhouette',
    price: '$349',
    color: '#C4703A',
    img: 'https://images.unsplash.com/photo-1586158291800-2665f07bba79?w=700&auto=format&fit=crop&q=80',
    bg: '#C4703A',
  },
  {
    id: 2,
    name: 'Verta Chair',
    subtitle: 'Soft & Contemporary',
    price: '$289',
    color: '#7A9A7E',
    img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=700&auto=format&fit=crop&q=80',
    bg: '#7A9A7E',
  },
];

const thumbnails = [
  {
    name: 'Koris',
    img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=200&auto=format&fit=crop&q=80',
  },
  {
    name: 'Dana',
    img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&auto=format&fit=crop&q=80',
  },
  {
    name: 'Verta',
    img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=200&auto=format&fit=crop&q=80',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  return (
    <section className="hero" style={{ '--hero-bg': slide.bg }}>
      <div className="hero__content">
        <h1 className="hero__title">
          <span className="hero__title--big">simply</span>
          <span className="hero__title--small">furniture</span>
        </h1>
        <p className="hero__tagline">Simple furniture<br />for soft life</p>
        <button className="btn btn--light">More positions</button>
      </div>

      <div className="hero__chair-wrap">
        <img
          className="hero__chair"
          src={slide.img}
          alt={slide.name}
        />
      </div>

      <div className="hero__thumbnails">
        {thumbnails.map((t) => (
          <div className="hero__thumb" key={t.name}>
            <img src={t.img} alt={t.name} />
            <span>{t.name}</span>
          </div>
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
