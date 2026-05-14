import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'product';
}

const SITE_NAME = 'Simply Furniture';
const DEFAULT_DESC = 'Discover furniture crafted for comfort and beauty. Armchairs, sofas, and lounge chairs for modern living.';
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&auto=format&fit=crop&q=80';
const SITE_URL = import.meta.env.VITE_SITE_URL ?? 'https://simply-furniture.vercel.app';

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.content = content;
}

export function useSEO({ title, description = DEFAULT_DESC, image = DEFAULT_IMAGE, url, type = 'website' }: SEOProps) {
  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} — ${SITE_NAME}`;
    document.title = fullTitle;

    const canonical = url ? `${SITE_URL}${url}` : window.location.href;

    setMeta('description', description);

    // Open Graph
    setMeta('og:title', fullTitle, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:image', image, 'property');
    setMeta('og:url', canonical, 'property');
    setMeta('og:type', type, 'property');
    setMeta('og:site_name', SITE_NAME, 'property');

    // Twitter Card
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);
    setMeta('twitter:image', image);

    return () => {
      document.title = SITE_NAME;
    };
  }, [title, description, image, url, type]);
}
