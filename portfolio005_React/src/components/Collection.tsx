import { Link } from 'react-router-dom';

const items = [
  {
    name: 'Sofas',
    category: 'Sofas',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format&fit=crop&q=80',
  },
  {
    name: 'Armchairs',
    category: 'Armchairs',
    img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500&auto=format&fit=crop&q=80',
  },
  {
    name: 'Chairs',
    category: 'Chairs',
    img: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&auto=format&fit=crop&q=80',
  },
];

export default function Collection() {
  return (
    <section className="collection" id="catalog">
      <div className="collection__header">
        <h2 className="collection__title">Meet simple&amp;soft collection</h2>
      </div>
      <div className="collection__grid">
        {items.map((item) => (
          <div className="collection__card" key={item.name}>
            <div className="collection__img-wrap">
              <img
                src={item.img}
                alt={item.name}
                loading="lazy"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = '0'; }}
              />
            </div>
            <div className="collection__info">
              <span className="collection__name">{item.name}</span>
              <Link
                to={`/catalog?category=${encodeURIComponent(item.category)}`}
                className="collection__btn"
              >
                Shop <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
