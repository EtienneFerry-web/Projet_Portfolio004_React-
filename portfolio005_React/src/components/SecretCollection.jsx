const pieces = [
  {
    name: 'Verta',
    img: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=300&auto=format&fit=crop&q=80',
  },
  {
    name: 'Cresta',
    img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=300&auto=format&fit=crop&q=80',
  },
  {
    name: 'Perra',
    img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&auto=format&fit=crop&q=80',
  },
];

export default function SecretCollection() {
  return (
    <section className="secret" id="offers">
      <div className="secret__inner">
        <div className="secret__left">
          <div className="secret__img-wrap">
            <img
              src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&auto=format&fit=crop&q=80"
              alt="Secret collection lounge chair"
            />
          </div>
        </div>

        <div className="secret__right">
          <h2 className="secret__title">
            Sit down. Lie down. Rest now.
          </h2>
          <p className="secret__subtitle">Secret collection from Erick Law</p>
          <p className="secret__desc">
            A collaboration between Simply and Reykjavik-based designer Eric Lowe. 8 pieces
            of furniture for relaxation, tranquility and comfort — available to order on our
            website exclusively in February.
          </p>

          <div className="secret__pieces">
            {pieces.map((p) => (
              <div className="secret__piece" key={p.name}>
                <div className="secret__piece-img">
                  <img src={p.img} alt={p.name} />
                </div>
                <span>{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
