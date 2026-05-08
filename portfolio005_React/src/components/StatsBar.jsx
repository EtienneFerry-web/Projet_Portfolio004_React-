const stats = [
  { value: '25K', label: 'Chairs Delivered Worldwide' },
  { value: '15K+', label: 'Premium seating solutions' },
  { value: '20K+', label: 'Happy Customers' },
];

export default function StatsBar() {
  return (
    <section className="stats">
      {stats.map((s) => (
        <div className="stats__item" key={s.label}>
          <span className="stats__value">{s.value}</span>
          <span className="stats__label">{s.label}</span>
        </div>
      ))}
    </section>
  );
}
