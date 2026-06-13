import React from 'react';
import { Bike, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--primary)', color: 'var(--light)', padding: 'var(--sp-12) 0 var(--sp-4) 0', marginTop: 'auto' }}>
      <div className="container grid md:grid-cols-3 gap-8" style={{ marginBottom: 'var(--sp-8)' }}>
        
        {/* Brand */}
        <div>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 800, fontSize: '1.5rem', color: 'var(--white)', marginBottom: '1.5rem' }}>
            <Bike size={32} color="var(--secondary)" />
            WildBikeTours
          </Link>
          <p style={{ color: 'rgba(253, 250, 244, 0.8)', fontSize: '1rem', maxWidth: '300px', lineHeight: 1.8 }}>
            Experience the breathtaking beauty of Sri Lanka on our premium, eco-friendly e-bikes. Effortless exploration for the adventurous soul.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ color: 'var(--secondary)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.875rem' }}>Explore</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><Link to="/" style={{ color: 'var(--light)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--secondary)'} onMouseLeave={(e) => e.target.style.color = 'var(--light)'}>Home</Link></li>
            <li><Link to="/tours" style={{ color: 'var(--light)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--secondary)'} onMouseLeave={(e) => e.target.style.color = 'var(--light)'}>Destinations & Tours</Link></li>
            <li><Link to="/booking" style={{ color: 'var(--light)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--secondary)'} onMouseLeave={(e) => e.target.style.color = 'var(--light)'}>Book a Tour</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ color: 'var(--secondary)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.875rem' }}>Contact</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--light)' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <MapPin size={20} color="var(--accent)" />
              <span>Colombo, Sri Lanka</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Phone size={20} color="var(--accent)" />
              <span>+94 77 123 4567</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Mail size={20} color="var(--accent)" />
              <span>hello@wildbiketours.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container" style={{ borderTop: '1px solid rgba(201, 166, 70, 0.2)', paddingTop: 'var(--sp-6)', textAlign: 'center', color: 'rgba(253, 250, 244, 0.6)', fontSize: 'var(--small)' }}>
        &copy; {new Date().getFullYear()} WildBikeTours. All rights reserved. Let's Ride.
      </div>
    </footer>
  );
};

export default Footer;
