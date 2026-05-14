const steps = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 5v3h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: 'Free delivery from €200',
    desc: 'White-glove delivery to your door anywhere in Europe. Large items delivered by a two-person team.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: '3–10 business days',
    desc: 'In-stock items ship within 48 h. Custom orders or out-of-stock pieces: 6–10 weeks.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'In-room placement',
    desc: 'Our team places and unpacks the furniture in the room of your choice. Old furniture removal available on request.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    title: '30-day free returns',
    desc: 'Not satisfied? Contact us within 30 days. We arrange collection at no cost, no questions asked.',
  },
];

const zones = [
  { region: 'France metropolitan', delay: '3–5 days', cost: 'Free from €200 / otherwise €29' },
  { region: 'Belgium, Luxembourg', delay: '4–6 days', cost: 'Free from €300 / otherwise €39' },
  { region: 'Germany, Netherlands', delay: '5–7 days', cost: 'Free from €400 / otherwise €49' },
  { region: 'Spain, Italy', delay: '6–10 days', cost: 'Free from €500 / otherwise €69' },
  { region: 'Other EU countries', delay: 'On quote', cost: 'Contact us' },
];

export default function DeliverySection() {
  return (
    <section className="delivery" id="delivery">
      <div className="delivery__inner">
        <div className="delivery__header">
          <p className="delivery__eyebrow">Delivery & Returns</p>
          <h2 className="delivery__title">Crafted with care,<br />delivered with the same.</h2>
          <p className="delivery__intro">
            Every Simply piece is prepared and shipped by specialists in furniture logistics —
            because how your chair arrives matters as much as how it's made.
          </p>
        </div>

        <div className="delivery__steps">
          {steps.map((s) => (
            <div className="delivery__step" key={s.title}>
              <div className="delivery__step-icon">{s.icon}</div>
              <div>
                <h3 className="delivery__step-title">{s.title}</h3>
                <p className="delivery__step-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="delivery__zones">
          <h3 className="delivery__zones-title">Delivery zones & lead times</h3>
          <table className="delivery__table">
            <thead>
              <tr>
                <th>Region</th>
                <th>Lead time</th>
                <th>Shipping cost</th>
              </tr>
            </thead>
            <tbody>
              {zones.map((z) => (
                <tr key={z.region}>
                  <td>{z.region}</td>
                  <td>{z.delay}</td>
                  <td>{z.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
