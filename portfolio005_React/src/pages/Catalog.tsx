import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import '../styles/Catalog.css';

const CATEGORIES = ['All', ...Array.from(new Set(products.map((p) => p.category)))];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="cat__stars">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={s <= Math.round(rating) ? 'cat__star cat__star--filled' : 'cat__star'}>★</span>
      ))}
    </div>
  );
}

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sort, setSort] = useState<'default' | 'price-asc' | 'price-desc' | 'rating'>('default');
  const [search, setSearch] = useState('');

  useEffect(() => {
    document.title = 'Catalog — Simply Furniture';
    return () => { document.title = 'Simply Furniture'; };
  }, []);

  const filtered = products
    .filter((p) => activeCategory === 'All' || p.category === activeCategory)
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="catalog">
      <div className="catalog__hero">
        <h1>Our Collection</h1>
        <p>Discover furniture crafted for comfort and beauty</p>
      </div>

      <div className="catalog__controls">
        <div className="catalog__search-wrap">
          <input
            className="catalog__search"
            type="search"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search products"
          />
        </div>

        <div className="catalog__filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`catalog__filter-btn ${activeCategory === cat ? 'catalog__filter-btn--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <select
          className="catalog__sort"
          value={sort}
          onChange={(e) => setSort(e.target.value as typeof sort)}
          aria-label="Sort products"
        >
          <option value="default">Sort: Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>

      <p className="catalog__count">{filtered.length} product{filtered.length !== 1 ? 's' : ''}</p>

      {filtered.length === 0 ? (
        <div className="catalog__empty">
          <p>No products found for "{search}"</p>
          <button className="btn btn--outline" onClick={() => { setSearch(''); setActiveCategory('All'); }}>
            Clear filters
          </button>
        </div>
      ) : (
        <div className="catalog__grid">
          {filtered.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="catalog__card">
              <div className="catalog__card-img">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  loading="lazy"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop&q=60'; }}
                />
                {!product.inStock && <span className="catalog__badge catalog__badge--out">Out of stock</span>}
              </div>
              <div className="catalog__card-info">
                <p className="catalog__card-category">{product.category}</p>
                <h3 className="catalog__card-name">{product.name}</h3>
                <StarRating rating={product.rating} />
                <div className="catalog__card-footer">
                  <span className="catalog__card-price">${product.price.toLocaleString()}</span>
                  <div className="catalog__card-colors">
                    {product.colors.slice(0, 3).map((c) => (
                      <span
                        key={c.value}
                        className="catalog__card-color"
                        style={{ backgroundColor: c.value }}
                        title={c.label}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
