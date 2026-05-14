import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { useWishlist } from '../context/WishlistContext';
import { useSEO } from '../hooks/useSEO';
import '../styles/Catalog.css';

const CATEGORIES = ['All', ...Array.from(new Set(products.map((p) => p.category)))];
const MIN_PRICE = Math.min(...products.map((p) => p.price));
const MAX_PRICE = Math.max(...products.map((p) => p.price));

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
  const { toggle, has } = useWishlist();
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') ?? 'All';

  const [activeCategory, setActiveCategory] = useState(
    CATEGORIES.includes(initialCategory) ? initialCategory : 'All'
  );
  const [sort, setSort] = useState<'default' | 'price-asc' | 'price-desc' | 'rating'>('default');
  const [search, setSearch] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([MIN_PRICE, MAX_PRICE]);
  const [visibleCount, setVisibleCount] = useState(12);

  useSEO({
    title: 'Our Collection',
    description: 'Browse our full range of armchairs, sofas, lounge chairs and more. Filter by category, price and rating.',
    url: '/catalog',
  });

  // Sync category from URL when user navigates from footer/collection
  useEffect(() => {
    const cat = searchParams.get('category') ?? 'All';
    if (CATEGORIES.includes(cat)) setActiveCategory(cat);
  }, [searchParams]);

  // Reset pagination when filters change
  useEffect(() => { setVisibleCount(12); }, [activeCategory, search, priceRange, sort]);

  const filtered = products
    .filter((p) => activeCategory === 'All' || p.category === activeCategory)
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'rating') return b.rating - a.rating;
      return 0;
    });

  const hasActiveFilters =
    activeCategory !== 'All' ||
    search !== '' ||
    priceRange[0] !== MIN_PRICE ||
    priceRange[1] !== MAX_PRICE;

  function clearAll() {
    setSearch('');
    setActiveCategory('All');
    setPriceRange([MIN_PRICE, MAX_PRICE]);
    setSort('default');
  }

  return (
    <div className="catalog">
      <div className="catalog__hero">
        <h1>Our Collection</h1>
        <p>Discover furniture crafted for comfort and beauty</p>
      </div>

      <div className="catalog__layout">
        {/* Sidebar filters */}
        <aside className="catalog__sidebar">
          <div className="catalog__sidebar-section">
            <p className="catalog__sidebar-label">Search</p>
            <input
              className="catalog__search"
              type="search"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search products"
            />
          </div>

          <div className="catalog__sidebar-section">
            <p className="catalog__sidebar-label">Category</p>
            <ul className="catalog__cat-list">
              {CATEGORIES.map((cat) => (
                <li key={cat}>
                  <button
                    className={`catalog__cat-btn ${activeCategory === cat ? 'catalog__cat-btn--active' : ''}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                    <span className="catalog__cat-count">
                      {cat === 'All' ? products.length : products.filter((p) => p.category === cat).length}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="catalog__sidebar-section">
            <p className="catalog__sidebar-label">
              Price — <strong>€{priceRange[0]} – €{priceRange[1]}</strong>
            </p>
            <div className="catalog__range-wrap">
              <input
                type="range"
                min={MIN_PRICE}
                max={MAX_PRICE}
                value={priceRange[0]}
                onChange={(e) => {
                  const v = Number(e.target.value);
                  if (v < priceRange[1]) setPriceRange([v, priceRange[1]]);
                }}
                className="catalog__range"
                aria-label="Minimum price"
              />
              <input
                type="range"
                min={MIN_PRICE}
                max={MAX_PRICE}
                value={priceRange[1]}
                onChange={(e) => {
                  const v = Number(e.target.value);
                  if (v > priceRange[0]) setPriceRange([priceRange[0], v]);
                }}
                className="catalog__range"
                aria-label="Maximum price"
              />
            </div>
            <div className="catalog__range-labels">
              <span>€{MIN_PRICE}</span>
              <span>€{MAX_PRICE}</span>
            </div>
          </div>

          {hasActiveFilters && (
            <button className="catalog__clear-btn" onClick={clearAll}>
              ✕ Clear all filters
            </button>
          )}
        </aside>

        {/* Product grid */}
        <div className="catalog__content">
          <div className="catalog__topbar">
            <p className="catalog__count">
              {filtered.length} product{filtered.length !== 1 ? 's' : ''}
            </p>
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

          {filtered.length === 0 ? (
            <div className="catalog__empty">
              {search ? (
                <>
                  <p className="catalog__empty-title">No results for "<strong>{search}</strong>"</p>
                  <p className="catalog__empty-sub">Try a different search term or clear your filters.</p>
                </>
              ) : (
                <>
                  <p className="catalog__empty-title">No products match your filters</p>
                  <p className="catalog__empty-sub">Try adjusting the price range or selecting a different category.</p>
                </>
              )}
              <button className="btn btn--outline" onClick={clearAll}>Clear all filters</button>
            </div>
          ) : (
            <>
              <div className="catalog__grid">
                {filtered.slice(0, visibleCount).map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`} className="catalog__card">
                    <div className="catalog__card-img">
                      <img
                        className="catalog__card-img-primary"
                        src={product.images[0]}
                        alt={product.name}
                        loading="lazy"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop&q=60'; }}
                      />
                      {product.images[1] && (
                        <img
                          className="catalog__card-img-hover"
                          src={product.images[1]}
                          alt={`${product.name} — alternate view`}
                          loading="lazy"
                          aria-hidden
                        />
                      )}
                      {!product.inStock && <span className="catalog__badge catalog__badge--out">Out of stock</span>}
                      <button
                        className={`catalog__wish-btn ${has(product.id) ? 'catalog__wish-btn--active' : ''}`}
                        onClick={(e) => { e.preventDefault(); toggle(product.id); }}
                        aria-label={has(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
                      >
                        ♥
                      </button>
                    </div>
                    <div className="catalog__card-info">
                      <p className="catalog__card-category">{product.category}</p>
                      <h3 className="catalog__card-name">{product.name}</h3>
                      <StarRating rating={product.rating} />
                      <div className="catalog__card-footer">
                        <span className="catalog__card-price">€{product.price.toLocaleString()}</span>
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
              {visibleCount < filtered.length && (
                <div className="catalog__load-more">
                  <button
                    className="btn btn--outline catalog__load-btn"
                    onClick={() => setVisibleCount((v) => v + 12)}
                  >
                    Load more ({filtered.length - visibleCount} remaining)
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
