import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: Props) {
  const { items, removeItem, updateQty, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  function handleCheckout() {
    onClose();
    navigate('/checkout');
  }

  return (
    <>
      {open && <div className="cart-overlay" onClick={onClose} aria-hidden />}
      <aside className={`cart-drawer ${open ? 'cart-drawer--open' : ''}`} aria-label="Shopping cart">
        <div className="cart-drawer__header">
          <h2>Your Cart ({items.length})</h2>
          <button className="cart-drawer__close" onClick={onClose} aria-label="Close cart">✕</button>
        </div>

        {items.length === 0 ? (
          <p className="cart-drawer__empty">Your cart is empty.</p>
        ) : (
          <>
            <ul className="cart-drawer__list">
              {items.map((item) => (
                <li key={`${item.id}-${item.color}`} className="cart-drawer__item">
                  <img src={item.img} alt={item.name} loading="lazy" />
                  <div className="cart-drawer__item-info">
                    <p className="cart-drawer__item-name">{item.name}</p>
                    <span
                      className="cart-drawer__item-color"
                      style={{ backgroundColor: item.color }}
                      aria-label={`Color ${item.color}`}
                    />
                    <div className="cart-drawer__item-qty">
                      <button onClick={() => updateQty(item.id, item.color, item.qty - 1)} aria-label="Decrease">−</button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.color, item.qty + 1)} aria-label="Increase">+</button>
                    </div>
                    <p className="cart-drawer__item-price">€{(item.price * item.qty).toLocaleString()}</p>
                  </div>
                  <button
                    className="cart-drawer__item-remove"
                    onClick={() => removeItem(item.id, item.color)}
                    aria-label="Remove item"
                  >✕</button>
                </li>
              ))}
            </ul>

            <div className="cart-drawer__footer">
              <p className="cart-drawer__total">Total — <strong>€{totalPrice.toLocaleString()}</strong></p>
              <button className="btn btn--dark cart-drawer__checkout" onClick={handleCheckout}>
                Checkout →
              </button>
              <button className="cart-drawer__clear" onClick={clearCart}>Clear cart</button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
