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
  // Product 1 — Aurelian Lounge
  { id: 1, productId: 1, author: 'Sophie M.', location: 'Paris, France', rating: 5, date: '2026-03-14', title: 'Absolutely stunning piece', body: 'This armchair is the focal point of my living room. The corduroy fabric is luxurious and the walnut legs are beautifully finished. Delivery was smooth and assembly took 10 minutes.', verified: true },
  { id: 2, productId: 1, author: 'James T.', location: 'Lyon, France', rating: 5, date: '2026-02-28', title: 'Worth every euro', body: 'I hesitated at the price but after sitting in it I understand completely. The foam is incredibly supportive and the craftsmanship is superb. I\'ve already recommended it to three friends.', verified: true },
  { id: 3, productId: 1, author: 'Léa K.', location: 'Brussels, Belgium', rating: 4, date: '2026-01-20', title: 'Beautiful but took time to arrive', body: 'The chair itself is gorgeous — exactly as pictured. The colour is richer in person. Only minus is it took 12 days to arrive which was longer than expected.', verified: true },

  // Product 2 — Nova Chair
  { id: 4, productId: 2, author: 'Marc D.', location: 'Bordeaux, France', rating: 5, date: '2026-04-01', title: 'Perfect for my home office', body: 'Stylish, comfortable and very well made. The bouclé fabric is gorgeous and it photographs beautifully too. Assembly was easy and instructions are clear.', verified: true },
  { id: 5, productId: 2, author: 'Anna R.', location: 'Amsterdam, Netherlands', rating: 4, date: '2026-03-15', title: 'Great design, check dimensions carefully', body: 'Lovely chair and very comfortable. I\'d recommend checking the dimensions before ordering — it\'s slightly smaller than I expected but still works perfectly in my space.', verified: true },

  // Product 3 — Velvet Throne
  { id: 6, productId: 3, author: 'Isabella F.', location: 'Milan, Italy', rating: 5, date: '2026-02-14', title: 'A work of art', body: 'I ordered this in Emerald and it\'s absolutely breathtaking. The velvet is incredibly soft and the gold base adds such elegance. Out of stock now but worth the wait!', verified: true },
  { id: 7, productId: 3, author: 'Thomas B.', location: 'Munich, Germany', rating: 5, date: '2026-01-30', title: 'Luxurious and well-crafted', body: 'Gift for my wife and she\'s obsessed. The quality is genuinely premium — the cushioning is unlike anything I\'ve felt in a chair at this price range. Truly a statement piece.', verified: true },

  // Product 4 — Cresta Sofa
  { id: 8, productId: 4, author: 'Claire V.', location: 'Nantes, France', rating: 5, date: '2026-04-10', title: 'The perfect compact sofa', body: 'I live in a Parisian apartment and space is precious. The Cresta fits perfectly in my salon — it seats two comfortably and the boucle is incredibly easy to keep clean.', verified: true },
  { id: 9, productId: 4, author: 'Peter H.', location: 'Cologne, Germany', rating: 4, date: '2026-03-22', title: 'Solid quality, great look', body: 'Very happy with this purchase. The oak legs are solid and the boucle doesn\'t pill. Delivery team assembled it in the room which was a great service.', verified: true },

  // Product 5 — Verta Lounge
  { id: 10, productId: 5, author: 'Marie-Laure S.', location: 'Toulouse, France', rating: 5, date: '2026-03-05', title: 'My favourite piece of furniture', body: 'I spent weeks looking for the perfect reading chair. The Verta is it. Low, deep and utterly comfortable. I\'ve already spent entire evenings in it without any discomfort.', verified: true },
  { id: 11, productId: 5, author: 'Olivia W.', location: 'Antwerp, Belgium', rating: 4, date: '2026-02-18', title: 'Excellent lounger', body: 'Very comfortable and the linen blend fabric looks expensive. It sits a bit lower than expected but that\'s actually perfect for lounging. Great value for the quality.', verified: true },

  // Product 6 — Koris Rocking Chair
  { id: 12, productId: 6, author: 'Henrik L.', location: 'Stockholm (via Paris)', rating: 5, date: '2026-04-20', title: 'A masterpiece of Scandinavian craft', body: 'The walnut finish is exceptional. Every detail is perfectly considered. The rocking motion is incredibly smooth and the wool upholstery is wonderfully warm. I treasure this piece.', verified: true },
  { id: 13, productId: 6, author: 'Camille R.', location: 'Strasbourg, France', rating: 4, date: '2026-03-12', title: 'Beautiful rocking chair', body: 'Bought this for our nursery and it\'s perfect. The motion is gentle and quiet. The cream fabric stays clean easily. Would like a slightly more padded seat but overall very happy.', verified: true },

  // Product 7 — Dune Armchair
  { id: 14, productId: 7, author: 'Nadia P.', location: 'Marseille, France', rating: 5, date: '2026-04-05', title: 'Exactly what I was looking for', body: 'Warm, textured fabric and incredibly comfortable. The sand colour is even prettier in person — it\'s a warm honey tone that goes with everything. Great value.', verified: true },
  { id: 15, productId: 7, author: 'Lucas M.', location: 'Ghent, Belgium', rating: 4, date: '2026-03-28', title: 'Very comfortable, great build', body: 'Solid construction and very comfortable seat depth. The oak legs are smooth and well finished. Delivery was 5 days and packaging was excellent.', verified: true },

  // Product 8 — Petra Wingback
  { id: 16, productId: 8, author: 'Charlotte B.', location: 'Rennes, France', rating: 5, date: '2026-04-08', title: 'Dramatic and gorgeous', body: 'The Petra in Slate Blue is absolutely magnificent. It commands the room without being aggressive. The velvet is incredibly rich and the piping detail is immaculate.', verified: true },
  { id: 17, productId: 8, author: 'Florian K.', location: 'Frankfurt, Germany', rating: 4, date: '2026-03-19', title: 'Stunning silhouette', body: 'Great quality wingback chair. The turned walnut legs are elegant and the fabric holds its shape well. Ships well-packaged with detailed assembly instructions.', verified: true },

  // Product 9 — Maris Sofa
  { id: 18, productId: 9, author: 'Élodie T.', location: 'Nice, France', rating: 5, date: '2026-04-12', title: 'Family sofa perfection', body: 'We have two kids and two dogs. The Maris has survived all of them with ease. The fabric is incredibly resilient and the pocket springs are still like new after 3 months.', verified: true },
  { id: 19, productId: 9, author: 'Stefan G.', location: 'Hamburg, Germany', rating: 5, date: '2026-03-30', title: 'Premium comfort', body: 'The pocket spring cushions make an enormous difference — you can feel it immediately when sitting down. The sofa doesn\'t sag and looks as good as day one after regular use.', verified: true },

  // Product 10 — Luno Corner Sofa
  { id: 20, productId: 10, author: 'Juliette F.', location: 'Montpellier, France', rating: 5, date: '2026-04-15', title: 'Transformed our living room', body: 'We reconfigured it three times before finding the perfect arrangement — the modular system really works. The fabric is beautiful and the hidden ottoman storage is genius.', verified: true },
  { id: 21, productId: 10, author: 'David N.', location: 'Rotterdam, Netherlands', rating: 4, date: '2026-04-02', title: 'Excellent large sofa', body: 'Superb quality for a corner sofa at this price. The USB charging port in the armrest is an unexpected luxury. Delivery team assembled it perfectly in under an hour.', verified: true },

  // Product 11 — Orion Dining Chair
  { id: 22, productId: 11, author: 'Alice P.', location: 'Dijon, France', rating: 5, date: '2026-03-08', title: 'Upgraded our dining room', body: 'We bought a set of 4 and our dining room is completely transformed. The chairs are sturdy, comfortable even for long dinners and the walnut finish is excellent.', verified: true },
  { id: 23, productId: 11, author: 'Bruno C.', location: 'Liège, Belgium', rating: 4, date: '2026-02-25', title: 'Well-made dining chairs', body: 'Good quality and very stable. The ergonomic back support makes a real difference during long meals. Assembly is simple — about 10 minutes per chair.', verified: true },

  // Product 12 — Alto Bar Stool
  { id: 24, productId: 12, author: 'Manon R.', location: 'Grenoble, France', rating: 5, date: '2026-03-18', title: 'Perfect kitchen island stools', body: 'Bought two for our kitchen island. The adjustable height works perfectly for both adults and our teenager. The gas lift is smooth and silent.', verified: true },
  { id: 25, productId: 12, author: 'Kevin S.', location: 'Cologne, Germany', rating: 4, date: '2026-03-01', title: 'Stylish and practical', body: 'The brushed gold finish is gorgeous and the footrest ring is a feature I didn\'t know I needed. Very comfortable even without a backrest for extended periods.', verified: true },

  // Product 13 — Papillon Chair
  { id: 26, productId: 13, author: 'Zoé L.', location: 'Lyon, France', rating: 5, date: '2026-04-18', title: 'Statement piece, beautifully made', body: 'The Rust colourway is absolutely stunning. The sling cover is high quality and sits perfectly on the steel frame. It\'s become the most photographed item in my apartment.', verified: true },
  { id: 27, productId: 13, author: 'Nathan A.', location: 'Barcelona (via Paris)', rating: 4, date: '2026-03-25', title: 'Great design chair', body: 'Well executed version of the classic form. The powder-coat finish is chip-resistant and the fabric is robust. Lighter than expected which makes it easy to move around.', verified: true },

  // Product 14 — Zeno Recline
  { id: 28, productId: 14, author: 'Patrick V.', location: 'Lille, France', rating: 5, date: '2026-04-06', title: 'The best seat in the house', body: 'I\'m a tall man and this chair fits perfectly. The lumbar support is exceptional and the recline mechanism is buttery smooth. I fall asleep in it regularly — the highest compliment.', verified: true },
  { id: 29, productId: 14, author: 'Hélène B.', location: 'Tours, France', rating: 5, date: '2026-03-20', title: 'Luxury recliner, properly built', body: 'The top-grain leather is exceptional. Three months in and it\'s developing a beautiful patina. The footrest extension is a game changer — can\'t imagine watching films without it.', verified: true },

  // Product 15 — Hana Egg Chair
  { id: 30, productId: 15, author: 'Inès M.', location: 'Paris, France', rating: 5, date: '2026-02-20', title: 'Absolutely magical', body: 'I ordered the Dusty Rose and I\'m completely in love. It sits in my bedroom corner and it\'s my favourite place to read, work, or simply think. The bouclé is incredibly soft.', verified: true },
  { id: 31, productId: 15, author: 'Gabriel T.', location: 'Nantes, France', rating: 5, date: '2026-01-28', title: 'The acoustic enclosure really works', body: 'In a busy household it provides genuine quiet. Build quality is outstanding — the swivel is perfectly balanced and it has not squeaked once in three months of daily use.', verified: true },

  // Product 16 — Alma Glider
  { id: 32, productId: 16, author: 'Sara L.', location: 'Clermont-Ferrand, France', rating: 5, date: '2026-03-10', title: 'Perfect for our nursery', body: 'The silent glide is everything for late-night feeds. Not a single squeak after months of use. The linen fabric is easy to wipe clean and the cushions wash perfectly.', verified: true },
  { id: 33, productId: 16, author: 'Tom W.', location: 'Utrecht, Netherlands', rating: 4, date: '2026-02-22', title: 'Excellent glider chair', body: 'Very smooth action and the locking mechanism works as advertised. The Sage colour is exactly as shown online. A bit heavier than a rocker but the quality justifies it.', verified: true },

  // Product 17 — Brisa Outdoor Chair
  { id: 34, productId: 17, author: 'Cécile D.', location: 'Aix-en-Provence, France', rating: 5, date: '2026-04-14', title: 'Survived our Provençal summer beautifully', body: 'After a full summer outside with intense sun and occasional rain, these chairs look as good as new. The fabric hasn\'t faded and the aluminium frame is spotless.', verified: true },
  { id: 35, productId: 17, author: 'Marco B.', location: 'Madrid (via Berlin)', rating: 4, date: '2026-03-31', title: 'Smart outdoor chair', body: 'Well-designed and comfortable for an outdoor chair. The quick-dry cushions really do dry fast after rain. Slightly tricky to stack with the armrests but possible.', verified: true },

  // Product 18 — Palma Sofa Set
  { id: 36, productId: 18, author: 'Adrien G.', location: 'Cannes, France', rating: 5, date: '2026-04-16', title: 'Transformed our terrace', body: 'Absolutely beautiful set. The rope weave is perfectly done and the cushions are thick and comfortable. The coffee table rounds it off perfectly. Our terrace now rivals any hotel.', verified: true },
  { id: 37, productId: 18, author: 'Laure P.', location: 'Bordeaux, France', rating: 4, date: '2026-03-14', title: 'Great outdoor sofa set', body: 'Very sturdy and well-made. Assembly takes about 90 minutes for the full set but instructions are detailed. The Anthracite colour is sleek and hides marks well.', verified: true },

  // Product 19 — Mini Pebble Chair
  { id: 38, productId: 19, author: 'Emma H.', location: 'Rennes, France', rating: 5, date: '2026-04-11', title: 'My daughter is obsessed', body: 'We ordered the Sky Blue for our 4-year-old and she refuses to sit anywhere else. The wipeable fabric is a lifesaver. The rounded corners give me peace of mind.', verified: true },
  { id: 39, productId: 19, author: 'Paul C.', location: 'Liège, Belgium', rating: 5, date: '2026-03-27', title: 'Perfect children\'s chair', body: 'Bought this as a gift. The quality is far superior to what you\'d expect at this price. It\'s genuinely well-made and the colours are exactly as shown online.', verified: true },

  // Product 20 — Cubby Bean Bag
  { id: 40, productId: 20, author: 'Anaïs B.', location: 'Strasbourg, France', rating: 5, date: '2026-04-17', title: 'Kids love it, I love the cover', body: 'My three kids fight over this bean bag. The Coral colour is vibrant and cheerful and the cover washes perfectly on 30°. Arrived well-packaged and fluffed up instantly.', verified: true },
  { id: 41, productId: 20, author: 'Quentin R.', location: 'Metz, France', rating: 4, date: '2026-04-03', title: 'Excellent bean bag', body: 'Great quality and really comfortable. The double-zip closure is smart and the cover is reassuringly robust. Slightly firm at first but softens within a few days of use.', verified: true },
];
