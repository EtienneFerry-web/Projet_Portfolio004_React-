const TEXT = 'SECRET COLLECTION. QUANTITY LIMITED // ';
const REPEAT = 6;

export default function MarqueeBanner() {
  return (
    <div className="marquee" aria-label="Secret collection — quantity limited">
      <div className="marquee__track">
        {Array.from({ length: REPEAT }).map((_, i) => (
          <span key={i} className="marquee__item">{TEXT}</span>
        ))}
      </div>
    </div>
  );
}
