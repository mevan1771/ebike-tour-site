import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Activity } from 'lucide-react';
import ImagePlaceholder from '../components/ImagePlaceholder';

const Tours = () => {
  const tours = [
    { id: 1, title: 'Ella Highlands Explorer', location: 'Ella', duration: 'Full Day (8 hrs)', difficulty: 'Moderate', price: 45 },
    { id: 2, title: 'Galle Coastal Cruise', location: 'Galle', duration: 'Half Day (4 hrs)', difficulty: 'Easy', price: 30 },
    { id: 3, title: 'Sigiriya Rock & Lakes', location: 'Sigiriya', duration: 'Full Day (7 hrs)', difficulty: 'Easy to Moderate', price: 40 },
    { id: 4, title: 'Kandy Temple Trails', location: 'Kandy', duration: 'Half Day (5 hrs)', difficulty: 'Moderate', price: 35 },
    { id: 5, title: 'Yala Buffer Zone Safari', location: 'Yala', duration: 'Full Day (8 hrs)', difficulty: 'Moderate to Hard', price: 55 },
    { id: 6, title: 'Mirissa Sunset Ride', location: 'Mirissa', duration: 'Evening (3 hrs)', difficulty: 'Easy', price: 25 },
  ];

  return (
    <div className="animate-fade-in" style={{ backgroundColor: 'var(--white)', minHeight: '100vh', paddingBottom: 'var(--sp-16)' }}>
      {/* Header */}
      <div style={{ backgroundColor: 'var(--primary)', color: 'var(--light)', padding: 'var(--sp-16) 0', textAlign: 'center', borderBottom: '4px solid var(--secondary)' }}>
        <div className="container">
          <h1 style={{ color: 'var(--light)', marginBottom: 'var(--sp-4)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>Our Expeditions</h1>
          <p style={{ color: 'rgba(253, 250, 244, 0.8)', fontSize: '1.25rem', maxWidth: '650px', margin: '0 auto', fontWeight: 300 }}>
            Discover the perfect e-bike adventure tailored for you. From coastal breezes to majestic mountain vistas.
          </p>
        </div>
      </div>

      {/* Tour Grid */}
      <div className="container" style={{ marginTop: '-4rem' }}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div key={tour.id} style={{ backgroundColor: 'var(--light)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', display: 'flex', flexDirection: 'column', border: '1px solid rgba(201, 166, 70, 0.1)' }}>
              <ImagePlaceholder height="280px" text={`Tour Image: ${tour.location}`} />
              <div style={{ padding: 'var(--sp-6)', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <div className="flex justify-between items-start" style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.5rem', lineHeight: 1.3, color: 'var(--primary)' }}>{tour.title}</h3>
                  <span style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--secondary)' }}>${tour.price}</span>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem', color: 'var(--dark-light)', fontSize: '0.95rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <MapPin size={18} color="var(--accent)" /> <span style={{ fontWeight: 500 }}>Location:</span> {tour.location}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Clock size={18} color="var(--accent)" /> <span style={{ fontWeight: 500 }}>Duration:</span> {tour.duration}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Activity size={18} color="var(--accent)" /> <span style={{ fontWeight: 500 }}>Difficulty:</span> {tour.difficulty}
                  </div>
                </div>

                <div style={{ marginTop: 'auto' }}>
                  <Link to="/booking" className="btn btn-primary" style={{ width: '100%', padding: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Reserve Your Spot</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tours;
