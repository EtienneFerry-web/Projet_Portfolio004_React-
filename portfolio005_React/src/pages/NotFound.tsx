import { Link, useLocation } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import '../styles/NotFound.css';

export default function NotFound() {
  const { pathname } = useLocation();
  useSEO({ title: 'Page not found' });

  return (
    <div className="nf">
      <div className="nf__inner">
        <p className="nf__code">404</p>
        <h1 className="nf__title">Page not found</h1>
        <p className="nf__sub">
          The page <code className="nf__path">{pathname}</code> doesn't exist or has been moved.
        </p>
        <div className="nf__actions">
          <Link to="/" className="btn btn--dark">Back to home</Link>
          <Link to="/catalog" className="btn btn--outline">Browse catalog</Link>
        </div>
      </div>
    </div>
  );
}
