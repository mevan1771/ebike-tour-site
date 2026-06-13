import React from 'react';
import { Bike, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--dark)', color: 'var(--light)', padding: 'var(--sp-8) 0 var(--sp-4) 0', marginTop: 'auto' }}>
      <div className="container grid md:grid-cols-3 gap-8" style={{ marginBottom: 'var(--sp-8)' }}>
        
        {/* Brand */}
        <div>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '1.5rem', color: 'var(--white)', marginBottom: '1rem' }}>
            <Bike size={32} color="var(--primary)" />
            WildBikeTours
          </Link>
          <p style={{ color: 'var(--gray)', fontSize: 'var(--small)', maxWidth: '300px' }}>
            Experience the beauty of Sri Lanka on our premium e-bikes. Eco-friendly, effortless, and unforgettable 1-day tours.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ color: 'var(--white)', marginBottom: '1rem' }}>Quick Links</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><Link to="/" style={{ color: 'var(--gray)', transition: 'color 0.2s' }}>Home</Link></li>
            <li><Link to="/tours" style={{ color: 'var(--gray)', transition: 'color 0.2s' }}>Destinations & Tours</Link></li>
            <li><Link to="/booking" style={{ color: 'var(--gray)', transition: 'color 0.2s' }}>Book a Tour</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ color: 'var(--white)', marginBottom: '1rem' }}>Contact Us</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--gray)' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={18} />
              <span>Colombo, Sri Lanka</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Phone size={18} />
              <span>+94 77 123 4567</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={18} />
              <span>hello@wildbiketours.lk</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container" style={{ borderTop: '1px solid var(--dark-light)', paddingTop: 'var(--sp-4)', textAlign: 'center', color: 'var(--gray)', fontSize: 'var(--small)' }}>
        &copy; {new Date().getFullYear()} WildBikeTours. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
