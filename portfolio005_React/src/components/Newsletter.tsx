import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setEmail('');
  }

  return (
    <section className="nl">
      <div className="nl__inner">
        <div className="nl__text">
          <p className="nl__eyebrow">Newsletter</p>
          <h2 className="nl__title">Design ideas & exclusive offers</h2>
          <p className="nl__sub">Join 12,000+ design lovers. Get styling tips, new arrivals, and <strong>10% off</strong> your first order.</p>
        </div>
        <div className="nl__form-wrap">
          {sent ? (
            <div className="nl__confirm">
              <span className="nl__check">✓</span>
              <p>Welcome aboard! Check your inbox for your discount code.</p>
            </div>
          ) : (
            <form className="nl__form" onSubmit={handleSubmit}>
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="nl__input"
                aria-label="Email address"
              />
              <button type="submit" className="nl__btn">
                Get 10% off
              </button>
            </form>
          )}
          <p className="nl__legal">No spam, unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  );
}
