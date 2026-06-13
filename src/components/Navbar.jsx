import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bike } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tours', path: '/tours' },
    { name: 'Booking', path: '/booking' },
  ];

  return (
    <header style={{ backgroundColor: 'var(--light)', boxShadow: 'var(--shadow-sm)', position: 'sticky', top: 0, zIndex: 50, borderBottom: '1px solid rgba(15, 61, 54, 0.1)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '5rem' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 800, fontSize: '1.5rem', color: 'var(--primary)' }}>
          <Bike size={32} color="var(--accent)" />
          WildBikeTours
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'none' }} className="md-flex gap-4">
          <ul style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  style={{ 
                    fontWeight: 600, 
                    color: location.pathname === link.path ? 'var(--secondary)' : 'var(--primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontSize: '0.875rem',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--secondary)'}
                  onMouseLeave={(e) => {
                    if(location.pathname !== link.path) e.target.style.color = 'var(--primary)';
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/booking" className="btn btn-secondary" style={{ padding: '0.75rem 1.5rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.875rem' }}>Book Now</Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={toggleMenu}
          style={{ display: 'block', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--primary)' }}
          className="md-none"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav style={{ padding: '1rem', backgroundColor: 'var(--light)', borderTop: '1px solid rgba(15, 61, 54, 0.1)' }} className="md-none">
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  onClick={toggleMenu}
                  style={{ 
                    display: 'block',
                    padding: '0.75rem 0',
                    fontWeight: 600, 
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    color: location.pathname === link.path ? 'var(--secondary)' : 'var(--primary)'
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li style={{ paddingTop: '1rem' }}>
              <Link to="/booking" onClick={toggleMenu} className="btn btn-secondary" style={{ width: '100%', textTransform: 'uppercase', letterSpacing: '1px' }}>Book Now</Link>
            </li>
          </ul>
        </nav>
      )}

      {/* CSS for Navbar specific responsive utilities */}
      <style>{`
        @media (min-width: 768px) {
          .md-flex { display: flex !important; }
          .md-none { display: none !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
