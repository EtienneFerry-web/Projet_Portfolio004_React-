import { Link, useParams } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import '../styles/LegalPage.css';

const pages = {
  cgv: {
    title: 'General Terms & Conditions of Sale',
    sections: [
      {
        heading: '1. Company information',
        body: `Simply Furniture SAS — Registered office: 14 rue du Faubourg Saint-Antoine, 75011 Paris, France.
SIRET: 000 000 000 00000 — VAT: FR00 000000000
Email: hello@simplyfurniture.com`,
      },
      {
        heading: '2. Products & pricing',
        body: `All prices are displayed inclusive of French VAT (20%). Prices may change at any time, but orders are invoiced at the price in effect at the time of purchase. Simply Furniture reserves the right to withdraw any product from its catalogue at any time.`,
      },
      {
        heading: '3. Order process',
        body: `Orders are placed through simplyfurniture.com. By confirming your order you accept these terms in full. An order confirmation email is sent automatically upon payment. Simply Furniture reserves the right to cancel any order in the event of stock unavailability or payment issues.`,
      },
      {
        heading: '4. Payment',
        body: `We accept Visa, Mastercard, American Express and PayPal. All transactions are processed over a secure TLS connection. Your card details are never stored by Simply Furniture.`,
      },
      {
        heading: '5. Delivery',
        body: `Delivery timescales and costs are detailed on our Delivery page. Simply Furniture cannot be held liable for delays caused by the carrier or circumstances beyond our control (strikes, weather, customs).`,
      },
      {
        heading: '6. Right of withdrawal (EU consumers)',
        body: `Under EU Directive 2011/83/EU you have 14 calendar days from receipt of goods to withdraw from the contract without giving any reason. To exercise this right, contact us at hello@simplyfurniture.com. Return shipping is at our expense for standard items.`,
      },
      {
        heading: '7. Returns & refunds',
        body: `We voluntarily extend the statutory right of withdrawal to 30 days. Items must be returned in their original condition and packaging. Refunds are processed within 14 days of receiving the returned goods.`,
      },
      {
        heading: '8. Warranty',
        body: `All products benefit from the statutory 2-year legal guarantee against hidden defects (French Civil Code Art. 1641). Simply Furniture additionally offers a 5-year structural warranty on all frames and bases.`,
      },
      {
        heading: '9. Governing law',
        body: `These terms are governed by French law. Any dispute shall be submitted to the competent courts of Paris, France.`,
      },
    ],
  },
  returns: {
    title: 'Returns & Refund Policy',
    sections: [
      {
        heading: 'Our promise',
        body: `We want you to love your Simply piece. If for any reason you don't, we make returning it as easy as possible.`,
      },
      {
        heading: '30-day free returns',
        body: `You have 30 days from the date of delivery to return any item, no questions asked. Contact us at hello@simplyfurniture.com with your order number and we will arrange a free collection from your home.`,
      },
      {
        heading: 'Condition of returned items',
        body: `Items must be returned in their original condition — unused, unassembled where applicable, and in original packaging. We reserve the right to refuse a refund if the item shows signs of damage caused by the customer.`,
      },
      {
        heading: 'Refund timeline',
        body: `Once we receive and inspect the returned item (usually within 5 business days of collection), we will issue a full refund to your original payment method within 14 days.`,
      },
      {
        heading: 'Damaged or faulty items',
        body: `If your item arrives damaged or develops a fault within the warranty period, please photograph the damage and contact us immediately. We will arrange repair, replacement or full refund at no cost to you.`,
      },
      {
        heading: 'Custom & made-to-order pieces',
        body: `Custom orders (non-standard colours, sizes or configurations) cannot be returned unless faulty. Please double-check your specifications before ordering.`,
      },
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    sections: [
      {
        heading: '1. Data controller',
        body: `Simply Furniture SAS, 14 rue du Faubourg Saint-Antoine, 75011 Paris, France. Data protection contact: privacy@simplyfurniture.com`,
      },
      {
        heading: '2. Data we collect',
        body: `When you place an order or create an account we collect: name, email address, delivery address, phone number, and payment method details (processed securely by our payment provider — we do not store card numbers).

We also collect browsing data (pages visited, time spent, device type) via cookies and analytics tools.`,
      },
      {
        heading: '3. How we use your data',
        body: `Your data is used to: process and deliver your order; send order confirmations and shipping updates; respond to customer service enquiries; send marketing emails if you have opted in; improve our website and product offering.`,
      },
      {
        heading: '4. Cookies',
        body: `We use essential cookies (required for the site to function), analytics cookies (to understand how visitors use the site) and marketing cookies (to show relevant ads). You can manage your cookie preferences via the banner displayed on your first visit.`,
      },
      {
        heading: '5. Data sharing',
        body: `We share your data only with: our delivery partners (name and address for shipping); our payment processor (Stripe); our email platform (for transactional and marketing emails). We never sell your personal data to third parties.`,
      },
      {
        heading: '6. Your rights (GDPR)',
        body: `Under the GDPR you have the right to: access, correct, or delete your personal data; object to or restrict processing; data portability; withdraw consent at any time.

To exercise your rights, contact privacy@simplyfurniture.com. You also have the right to lodge a complaint with the CNIL (France's data protection authority).`,
      },
      {
        heading: '7. Data retention',
        body: `Order data is retained for 10 years for accounting and legal compliance. Marketing preferences are retained until you unsubscribe. Analytics data is anonymised after 26 months.`,
      },
    ],
  },
};

type PageKey = keyof typeof pages;

export default function LegalPage() {
  const { slug } = useParams<{ slug: string }>();
  const key = slug as PageKey;
  const page = pages[key];

  useSEO({
    title: page ? page.title : 'Legal',
    url: slug ? `/legal/${slug}` : undefined,
  });

  if (!page) {
    return (
      <div className="legal__not-found">
        <h2>Page not found</h2>
        <Link to="/" className="btn btn--dark">Back to home</Link>
      </div>
    );
  }

  return (
    <div className="legal">
      <div className="legal__inner">
        <p className="legal__breadcrumb">
          <Link to="/">Home</Link> / {page.title}
        </p>
        <h1 className="legal__title">{page.title}</h1>
        <p className="legal__updated">Last updated: 14 May 2026</p>

        {page.sections.map((s) => (
          <section key={s.heading} className="legal__section">
            <h2 className="legal__section-title">{s.heading}</h2>
            {s.body.split('\n\n').map((para, i) => (
              <p key={i} className="legal__section-body">{para.trim()}</p>
            ))}
          </section>
        ))}

        <div className="legal__footer">
          <p>Questions? Email us at <a href="mailto:hello@simplyfurniture.com">hello@simplyfurniture.com</a></p>
        </div>
      </div>
    </div>
  );
}
