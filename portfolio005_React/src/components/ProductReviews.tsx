import { useState } from 'react';
import { reviews, type Review } from '../data/reviews';

function Stars({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <span style={{ fontSize: size, lineHeight: 1, display: 'inline-flex', gap: 2 }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} style={{ color: s <= rating ? '#C4703A' : '#ddd' }}>★</span>
      ))}
    </span>
  );
}

function RatingBar({ label, count, total }: { label: string; count: number; total: number }) {
  const pct = total > 0 ? (count / total) * 100 : 0;
  return (
    <div className="rev__bar-row">
      <span className="rev__bar-label">{label}</span>
      <div className="rev__bar-track">
        <div className="rev__bar-fill" style={{ width: `${pct}%` }} />
      </div>
      <span className="rev__bar-count">{count}</span>
    </div>
  );
}

export default function ProductReviews({ productId }: { productId: number }) {
  const productReviews = reviews.filter((r) => r.productId === productId);
  const [expanded, setExpanded] = useState(false);

  if (productReviews.length === 0) return null;

  const avg = productReviews.reduce((s, r) => s + r.rating, 0) / productReviews.length;
  const distribution = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: productReviews.filter((r) => r.rating === star).length,
  }));

  const visible: Review[] = expanded ? productReviews : productReviews.slice(0, 3);

  return (
    <section className="rev">
      <h2 className="rev__title">Customer reviews</h2>

      <div className="rev__summary">
        <div className="rev__avg">
          <span className="rev__avg-num">{avg.toFixed(1)}</span>
          <Stars rating={Math.round(avg)} size={20} />
          <span className="rev__avg-total">{productReviews.length} verified review{productReviews.length !== 1 ? 's' : ''}</span>
        </div>
        <div className="rev__bars">
          {distribution.map((d) => (
            <RatingBar key={d.star} label={`${d.star} ★`} count={d.count} total={productReviews.length} />
          ))}
        </div>
      </div>

      <ul className="rev__list">
        {visible.map((r) => (
          <li key={r.id} className="rev__card">
            <div className="rev__card-header">
              <div>
                <p className="rev__author">{r.author}</p>
                <p className="rev__location">{r.location}</p>
              </div>
              <div className="rev__card-right">
                <Stars rating={r.rating} />
                {r.verified && <span className="rev__verified">✓ Verified purchase</span>}
              </div>
            </div>
            <p className="rev__card-title">{r.title}</p>
            <p className="rev__card-body">{r.body}</p>
            <p className="rev__card-date">{new Date(r.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
          </li>
        ))}
      </ul>

      {productReviews.length > 3 && (
        <button className="rev__toggle" onClick={() => setExpanded((e) => !e)}>
          {expanded ? 'Show fewer reviews' : `Show all ${productReviews.length} reviews`}
        </button>
      )}
    </section>
  );
}
