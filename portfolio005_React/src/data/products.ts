export interface ProductColor {
  label: string;
  value: string;
}

export interface ProductDimensions {
  width: string;
  depth: string;
  height: string;
  seat: string;
}

export interface Product {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  price: number;
  colors: ProductColor[];
  images: string[];
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  dimensions: ProductDimensions;
  materials: string[];
  features: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Aurelian Lounge',
    subtitle: 'Modern Classic Silhouette',
    description:
      'A timeless armchair wrapped in rich caramel corduroy, blending vintage character with modern refinement. Designed for those who appreciate the intersection of art and comfort.',
    price: 349,
    colors: [
      { label: 'Forest', value: '#4A6B52' },
      { label: 'Caramel', value: '#C4703A' },
      { label: 'Burgundy', value: '#8B2020' },
    ],
    images: [
      'https://images.unsplash.com/photo-1586158291800-2665f07bba79?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&auto=format&fit=crop&q=80',
    ],
    category: 'Armchairs',
    rating: 4.8,
    reviews: 124,
    inStock: true,
    dimensions: { width: '82 cm', depth: '85 cm', height: '96 cm', seat: '45 cm' },
    materials: ['Corduroy fabric', 'Solid walnut legs', 'High-density foam'],
    features: [
      'Handcrafted solid walnut frame',
      'Premium high-density foam cushioning',
      'Removable & washable cushion cover',
      'Anti-scratch floor protectors',
    ],
  },
  {
    id: 2,
    name: 'Nova Chair',
    subtitle: 'Contemporary Elegance',
    description:
      'Designed to elevate any room with warmth and quiet sophistication. Crafted for long-lasting comfort with clean Scandinavian lines and premium materials.',
    price: 289,
    colors: [
      { label: 'Sand', value: '#D4B896' },
      { label: 'Sage', value: '#7A9A7E' },
      { label: 'Espresso', value: '#3D2B1A' },
    ],
    images: [
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1586158291800-2665f07bba79?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&auto=format&fit=crop&q=80',
    ],
    category: 'Chairs',
    rating: 4.6,
    reviews: 89,
    inStock: true,
    dimensions: { width: '76 cm', depth: '78 cm', height: '88 cm', seat: '43 cm' },
    materials: ['Bouclé fabric', 'Beech wood legs', 'Memory foam'],
    features: [
      'Scandinavian-inspired design',
      'Durable bouclé upholstery',
      '360° swivel base option',
      '5-year structural warranty',
    ],
  },
  {
    id: 3,
    name: 'Velvet Throne',
    subtitle: 'Luxury Statement Piece',
    description:
      'Make a bold statement with this plush velvet accent chair. Its sculptural silhouette and deep jewel tones bring drama and elegance to any living space.',
    price: 495,
    colors: [
      { label: 'Emerald', value: '#2D6A4F' },
      { label: 'Midnight', value: '#1A1A2E' },
      { label: 'Blush', value: '#C9908C' },
    ],
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1586158291800-2665f07bba79?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&auto=format&fit=crop&q=80',
    ],
    category: 'Accent Chairs',
    rating: 4.9,
    reviews: 57,
    inStock: false,
    dimensions: { width: '88 cm', depth: '90 cm', height: '102 cm', seat: '46 cm' },
    materials: ['Premium velvet', 'Gilded metal base', 'Duck feather cushions'],
    features: [
      'Hand-tufted velvet upholstery',
      'Luxurious duck feather fill',
      'Antique gold metal frame',
      'Limited edition colourways',
    ],
  },
  {
    id: 4,
    name: 'Cresta Sofa',
    subtitle: 'Nordic Comfort for Two',
    description:
      'A compact two-seater with clean architectural lines, upholstered in soft boucle. Perfect for reading nooks, offices or as an accent piece in a larger living room.',
    price: 720,
    colors: [
      { label: 'Oat', value: '#D9CDB8' },
      { label: 'Slate', value: '#6B7280' },
      { label: 'Terracotta', value: '#B85C38' },
    ],
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1586158291800-2665f07bba79?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&auto=format&fit=crop&q=80',
    ],
    category: 'Sofas',
    rating: 4.7,
    reviews: 43,
    inStock: true,
    dimensions: { width: '160 cm', depth: '88 cm', height: '82 cm', seat: '44 cm' },
    materials: ['Boucle fabric', 'Oak wood legs', 'High-resilience foam'],
    features: [
      'Solid oak frame',
      'Stain-resistant boucle cover',
      'Modular cushion system',
      '10-year frame warranty',
    ],
  },
  {
    id: 5,
    name: 'Verta Lounge',
    subtitle: 'Soft & Contemporary',
    description:
      'Low-profile and generous, the Verta invites you to sink in and stay a while. Its organic curves and muted tones complement any modern interior effortlessly.',
    price: 415,
    colors: [
      { label: 'Stone', value: '#A89F97' },
      { label: 'Olive', value: '#6B6B3A' },
      { label: 'Charcoal', value: '#3A3A3A' },
    ],
    images: [
      'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=80',
    ],
    category: 'Lounge Chairs',
    rating: 4.5,
    reviews: 31,
    inStock: true,
    dimensions: { width: '80 cm', depth: '92 cm', height: '78 cm', seat: '38 cm' },
    materials: ['Linen blend fabric', 'Powder-coated steel base', 'Memory foam'],
    features: [
      'Low-slung ergonomic profile',
      'Swivel base option',
      'Replaceable cushion covers',
      'Available in custom dimensions',
    ],
  },
  {
    id: 6,
    name: 'Koris Rocking Chair',
    subtitle: 'Timeless Motion',
    description:
      'Inspired by mid-century Scandinavian design, the Koris blends the classic rocking chair form with contemporary upholstery. A meditative piece for any home.',
    price: 380,
    colors: [
      { label: 'Cream', value: '#F5F0E8' },
      { label: 'Walnut', value: '#7B4F2E' },
      { label: 'Navy', value: '#1E2E4A' },
    ],
    images: [
      'https://images.unsplash.com/photo-1503602642458-232111445657?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1586158291800-2665f07bba79?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=80',
    ],
    category: 'Rocking Chairs',
    rating: 4.4,
    reviews: 22,
    inStock: true,
    dimensions: { width: '74 cm', depth: '100 cm', height: '100 cm', seat: '42 cm' },
    materials: ['Solid walnut', 'Wool blend upholstery', 'Natural latex cushion'],
    features: [
      'Solid walnut rocker base',
      'Hand-stitched wool upholstery',
      'Non-slip rubber tips',
      'Heirloom-quality construction',
    ],
  },
];
