export interface Review {
  id: number;
  productId: number;
  author: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  body: string;
  verified: boolean;
}

export const reviews: Review[] = [
  // Aurelian Lounge (id 1)
  { id: 1, productId: 1, author: 'Sophie M.', location: 'Paris, FR', rating: 5, date: '2026-04-12', title: 'Exactly as pictured — even better in person', body: 'I was a little worried ordering furniture online but the Aurelian arrived perfectly packaged. The corduroy is incredibly soft and the walnut legs are beautifully finished. It\'s become the focal point of my living room. Delivery team was professional and placed it exactly where I wanted.', verified: true },
  { id: 2, productId: 1, author: 'Lucas B.', location: 'Lyon, FR', rating: 5, date: '2026-03-28', title: 'Worth every cent', body: 'The build quality is outstanding. The cushion is firm enough to support you but soft enough to sink into after a long day. The removable cover is a game-changer — already washed it once and it came out perfect.', verified: true },
  { id: 3, productId: 1, author: 'Ingrid V.', location: 'Brussels, BE', rating: 4, date: '2026-02-14', title: 'Beautiful chair, slight delay on delivery', body: 'The chair itself is gorgeous — exactly the caramel colour I wanted. Delivery took a few extra days but the team communicated well throughout. Very happy with the end result.', verified: true },

  // Nova Chair (id 2)
  { id: 4, productId: 2, author: 'Marie-Claire T.', location: 'Bordeaux, FR', rating: 5, date: '2026-04-02', title: 'Scandinavian perfection', body: 'Light, elegant and incredibly comfortable. The bouclé texture is lovely and the beech legs are warm and natural. Exactly what I was looking for for my home office. The swivel option is a bonus I didn\'t know I needed.', verified: true },
  { id: 5, productId: 2, author: 'Remi D.', location: 'Amsterdam, NL', rating: 4, date: '2026-03-15', title: 'Great chair, assembly needed', body: 'The chair needed a bit of assembly but instructions were clear. The quality is excellent and the proportions work well in a smaller apartment. Would recommend to anyone looking for a modern reading chair.', verified: true },

  // Velvet Throne (id 3)
  { id: 6, productId: 3, author: 'Camille R.', location: 'Nice, FR', rating: 5, date: '2026-03-20', title: 'The most beautiful piece I\'ve ever owned', body: 'I bought the Emerald colourway and it\'s absolutely stunning. The velvet is rich and deep, the duck feather cushions are luxuriously soft. It\'s currently out of stock but 100% worth the wait. My guests cannot stop talking about it.', verified: true },

  // Cresta Sofa (id 4)
  { id: 7, productId: 4, author: 'Antoine P.', location: 'Nantes, FR', rating: 5, date: '2026-04-08', title: 'Perfect compact sofa', body: 'Our apartment needed a small sofa that didn\'t overwhelm the space. The Cresta is perfect — the proportions are exactly right and the boucle is so soft. The oak legs give it a premium feel. Highly recommend.', verified: true },
  { id: 8, productId: 4, author: 'Hanna K.', location: 'Berlin, DE', rating: 4, date: '2026-03-01', title: 'Stylish and practical', body: 'Good quality for the price. The Oat colour is even nicer in person. The modular cushion system is practical and the stain-resistant fabric is already a lifesaver with our cats. Delivery was well packaged.', verified: true },

  // Verta Lounge (id 5)
  { id: 9, productId: 5, author: 'Elise G.', location: 'Strasbourg, FR', rating: 5, date: '2026-04-15', title: 'My favourite corner of the house', body: 'I spend every evening in this chair now. The low profile is surprisingly comfortable and the Stone colour works with everything. The powder-coated base feels very solid. Delivery was smooth and the driver even helped me carry it upstairs.', verified: true },

  // Koris Rocking Chair (id 6)
  { id: 10, productId: 6, author: 'Paul H.', location: 'Toulouse, FR', rating: 5, date: '2026-04-20', title: 'A piece you\'ll pass down to your children', body: 'The craftsmanship is extraordinary. Every joint is perfect, the walnut is beautifully oiled and the wool upholstery is cosy. The rocking action is smooth and calming. This is the kind of furniture you buy once and keep forever.', verified: true },
  { id: 11, productId: 6, author: 'Charlotte N.', location: 'Montpellier, FR', rating: 4, date: '2026-03-10', title: 'Lovely design, takes time to break in', body: 'The chair is beautiful and very well made. The cushion is a bit firm at first but has softened noticeably after a few weeks of use. The non-slip tips on the rocker feet are a thoughtful touch on hardwood floors.', verified: true },
];
