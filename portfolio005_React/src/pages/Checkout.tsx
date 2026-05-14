import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/Checkout.css';

type Step = 'cart' | 'shipping' | 'payment' | 'confirm';

interface ShippingForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zip: string;
  country: string;
}

interface PaymentForm {
  cardName: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
}

const STEPS: Step[] = ['cart', 'shipping', 'payment', 'confirm'];
const STEP_LABELS: Record<Step, string> = {
  cart: 'Cart',
  shipping: 'Shipping',
  payment: 'Payment',
  confirm: 'Confirmation',
};

function StepIndicator({ current, onGoTo }: { current: Step; onGoTo: (s: Step) => void }) {
  const idx = STEPS.indexOf(current);
  return (
    <ol className="co__steps">
      {STEPS.map((s, i) => {
        const isDone = i < idx;
        const isActive = i === idx;
        return (
          <li key={s} className={`co__step ${isActive ? 'co__step--active' : ''} ${isDone ? 'co__step--done' : ''}`}>
            {isDone && s !== 'confirm' ? (
              <button className="co__step-back-btn" onClick={() => onGoTo(s)} aria-label={`Go back to ${STEP_LABELS[s]}`}>
                <span className="co__step-num">✓</span>
                <span className="co__step-label">{STEP_LABELS[s]}</span>
              </button>
            ) : (
              <>
                <span className="co__step-num">{isDone ? '✓' : i + 1}</span>
                <span className="co__step-label">{STEP_LABELS[s]}</span>
              </>
            )}
          </li>
        );
      })}
    </ol>
  );
}

export default function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>('cart');
  const [shipping, setShipping] = useState<ShippingForm>({
    firstName: '', lastName: '', email: '', phone: '',
    address: '', city: '', zip: '', country: 'France',
  });
  const [payment, setPayment] = useState<PaymentForm>({
    cardName: '', cardNumber: '', expiry: '', cvv: '',
  });
  const [orderRef] = useState(`SF-${Date.now().toString(36).toUpperCase()}`);

  useEffect(() => {
    document.title = 'Checkout — Simply Furniture';
    return () => { document.title = 'Simply Furniture'; };
  }, []);

  const shippingCost = totalPrice >= 200 ? 0 : 29;
  const total = totalPrice + shippingCost;

  function handleShippingSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStep('payment');
  }

  function handlePaymentSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStep('confirm');
    clearCart();
  }

  function formatCard(val: string) {
    return val.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
  }

  function formatExpiry(val: string) {
    return val.replace(/\D/g, '').slice(0, 4).replace(/^(\d{2})(\d)/, '$1/$2');
  }

  if (step === 'confirm') {
    return (
      <div className="co">
        <div className="co__confirm">
          <div className="co__confirm-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h1>Order confirmed!</h1>
          <p className="co__confirm-ref">Order reference: <strong>{orderRef}</strong></p>
          <p className="co__confirm-msg">
            Thank you, {shipping.firstName}! A confirmation has been sent to <strong>{shipping.email}</strong>.
            Your order will be delivered to {shipping.address}, {shipping.city} within 3–10 business days.
          </p>
          <div className="co__confirm-actions">
            <Link to="/" className="btn btn--dark">Back to home</Link>
            <Link to="/catalog" className="btn btn--outline">Continue shopping</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="co">
      <div className="co__header">
        <Link to="/" className="co__logo-link" aria-label="Home">Simply Furniture</Link>
        <StepIndicator current={step} onGoTo={(s) => setStep(s)} />
      </div>

      <div className="co__body">
        {/* Left panel */}
        <div className="co__main">

          {step === 'cart' && (
            <div className="co__panel">
              <h2 className="co__panel-title">Your Cart</h2>
              {items.length === 0 ? (
                <div className="co__empty">
                  <p>Your cart is empty.</p>
                  <Link to="/catalog" className="btn btn--dark">Browse catalog</Link>
                </div>
              ) : (
                <>
                  <ul className="co__items">
                    {items.map((item) => (
                      <li key={`${item.id}-${item.color}`} className="co__item">
                        <img src={item.img} alt={item.name} loading="lazy" />
                        <div className="co__item-info">
                          <p className="co__item-name">{item.name}</p>
                          <span className="co__item-color" style={{ backgroundColor: item.color }} />
                          <p className="co__item-qty">Qty: {item.qty}</p>
                        </div>
                        <p className="co__item-price">€{(item.price * item.qty).toLocaleString()}</p>
                      </li>
                    ))}
                  </ul>
                  <button className="btn btn--dark co__next" onClick={() => setStep('shipping')}>
                    Continue to shipping →
                  </button>
                </>
              )}
            </div>
          )}

          {step === 'shipping' && (
            <form className="co__panel" onSubmit={handleShippingSubmit}>
              <h2 className="co__panel-title">Shipping information</h2>
              <div className="co__form-grid">
                <div className="co__field">
                  <label>First name *</label>
                  <input required value={shipping.firstName} onChange={(e) => setShipping({ ...shipping, firstName: e.target.value })} />
                </div>
                <div className="co__field">
                  <label>Last name *</label>
                  <input required value={shipping.lastName} onChange={(e) => setShipping({ ...shipping, lastName: e.target.value })} />
                </div>
                <div className="co__field co__field--full">
                  <label>Email address *</label>
                  <input type="email" required value={shipping.email} onChange={(e) => setShipping({ ...shipping, email: e.target.value })} />
                </div>
                <div className="co__field co__field--full">
                  <label>Phone</label>
                  <input type="tel" value={shipping.phone} onChange={(e) => setShipping({ ...shipping, phone: e.target.value })} />
                </div>
                <div className="co__field co__field--full">
                  <label>Street address *</label>
                  <input required value={shipping.address} onChange={(e) => setShipping({ ...shipping, address: e.target.value })} />
                </div>
                <div className="co__field">
                  <label>City *</label>
                  <input required value={shipping.city} onChange={(e) => setShipping({ ...shipping, city: e.target.value })} />
                </div>
                <div className="co__field">
                  <label>Postcode *</label>
                  <input required value={shipping.zip} onChange={(e) => setShipping({ ...shipping, zip: e.target.value })} />
                </div>
                <div className="co__field co__field--full">
                  <label>Country *</label>
                  <select value={shipping.country} onChange={(e) => setShipping({ ...shipping, country: e.target.value })}>
                    <option>France</option>
                    <option>Belgium</option>
                    <option>Luxembourg</option>
                    <option>Germany</option>
                    <option>Netherlands</option>
                    <option>Spain</option>
                    <option>Italy</option>
                  </select>
                </div>
              </div>
              <div className="co__form-actions">
                <button type="button" className="btn btn--outline" onClick={() => setStep('cart')}>← Back</button>
                <button type="submit" className="btn btn--dark">Continue to payment →</button>
              </div>
            </form>
          )}

          {step === 'payment' && (
            <form className="co__panel" onSubmit={handlePaymentSubmit}>
              <h2 className="co__panel-title">Payment</h2>
              <div className="co__secure-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                Secure payment — TLS encrypted
              </div>
              <div className="co__form-grid">
                <div className="co__field co__field--full">
                  <label>Cardholder name *</label>
                  <input required value={payment.cardName} onChange={(e) => setPayment({ ...payment, cardName: e.target.value })} />
                </div>
                <div className="co__field co__field--full">
                  <label>Card number *</label>
                  <input
                    required
                    placeholder="0000 0000 0000 0000"
                    value={payment.cardNumber}
                    onChange={(e) => setPayment({ ...payment, cardNumber: formatCard(e.target.value) })}
                    inputMode="numeric"
                  />
                </div>
                <div className="co__field">
                  <label>Expiry (MM/YY) *</label>
                  <input
                    required
                    placeholder="MM/YY"
                    value={payment.expiry}
                    onChange={(e) => setPayment({ ...payment, expiry: formatExpiry(e.target.value) })}
                    inputMode="numeric"
                  />
                </div>
                <div className="co__field">
                  <label>CVV *</label>
                  <input
                    required
                    placeholder="•••"
                    value={payment.cvv}
                    onChange={(e) => setPayment({ ...payment, cvv: e.target.value.replace(/\D/g, '').slice(0, 4) })}
                    inputMode="numeric"
                    type="password"
                  />
                </div>
              </div>
              <div className="co__form-actions">
                <button type="button" className="btn btn--outline" onClick={() => setStep('shipping')}>← Back</button>
                <button type="submit" className="btn btn--dark">Place order — €{total.toLocaleString()}</button>
              </div>
            </form>
          )}
        </div>

        {/* Order summary sidebar */}
        <aside className="co__summary">
          <h3 className="co__summary-title">Order summary</h3>
          <ul className="co__summary-items">
            {items.map((item) => (
              <li key={`${item.id}-${item.color}`} className="co__summary-item">
                <div className="co__summary-img-wrap">
                  <img src={item.img} alt={item.name} loading="lazy" />
                  <span className="co__summary-qty">{item.qty}</span>
                </div>
                <div className="co__summary-info">
                  <p>{item.name}</p>
                  <span className="co__summary-color" style={{ backgroundColor: item.color }} />
                </div>
                <p className="co__summary-price">€{(item.price * item.qty).toLocaleString()}</p>
              </li>
            ))}
          </ul>
          <div className="co__summary-totals">
            <div className="co__summary-row">
              <span>Subtotal</span>
              <span>€{totalPrice.toLocaleString()}</span>
            </div>
            <div className="co__summary-row">
              <span>Shipping</span>
              <span>{shippingCost === 0 ? 'Free' : `€${shippingCost}`}</span>
            </div>
            {shippingCost > 0 && (
              <p className="co__summary-free-hint">Add €{(200 - totalPrice).toLocaleString()} more for free shipping</p>
            )}
            <div className="co__summary-row co__summary-row--total">
              <span>Total</span>
              <span>€{total.toLocaleString()}</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
