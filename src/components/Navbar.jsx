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
    <header style={{ backgroundColor: 'var(--white)', boxShadow: 'var(--shadow-sm)', position: 'sticky', top: 0, zIndex: 50 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '4rem' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '1.25rem', color: 'var(--primary)' }}>
          <Bike size={28} />
          WildBikeTours
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'none' }} className="md-flex gap-4">
          <ul style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  style={{ 
                    fontWeight: 500, 
                    color: location.pathname === link.path ? 'var(--primary)' : 'var(--dark-light)',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
                  onMouseLeave={(e) => {
                    if(location.pathname !== link.path) e.target.style.color = 'var(--dark-light)';
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/booking" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Book Now</Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={toggleMenu}
          style={{ display: 'block', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--dark)' }}
          className="md-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav style={{ padding: '1rem', backgroundColor: 'var(--white)', borderTop: '1px solid var(--light)' }} className="md-none">
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  onClick={toggleMenu}
                  style={{ 
                    display: 'block',
                    padding: '0.5rem 0',
                    fontWeight: 500, 
                    color: location.pathname === link.path ? 'var(--primary)' : 'var(--dark-light)'
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li style={{ paddingTop: '0.5rem' }}>
              <Link to="/booking" onClick={toggleMenu} className="btn btn-primary" style={{ width: '100%' }}>Book Now</Link>
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
