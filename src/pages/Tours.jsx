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
    <div className="animate-fade-in" style={{ backgroundColor: 'var(--light)', minHeight: '100vh', paddingBottom: 'var(--sp-12)' }}>
      {/* Header */}
      <div style={{ backgroundColor: 'var(--dark)', color: 'var(--white)', padding: 'var(--sp-12) 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ color: 'var(--white)', marginBottom: 'var(--sp-2)' }}>Our 1-Day Tours</h1>
          <p style={{ color: 'var(--gray)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
            Discover the perfect e-bike adventure tailored for you. From coastal breezes to mountain vistas.
          </p>
        </div>
      </div>

      {/* Tour Grid */}
      <div className="container" style={{ marginTop: 'var(--sp-8)' }}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div key={tour.id} style={{ backgroundColor: 'var(--white)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow)', display: 'flex', flexDirection: 'column' }}>
              <ImagePlaceholder height="250px" text={`Tour Image: ${tour.location}`} />
              <div style={{ padding: 'var(--sp-6)', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <div className="flex justify-between items-start" style={{ marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.5rem', lineHeight: 1.2 }}>{tour.title}</h3>
                  <span style={{ fontWeight: 'bold', fontSize: '1.5rem', color: 'var(--primary)' }}>${tour.price}</span>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem', color: 'var(--gray)', fontSize: '0.9rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <MapPin size={16} /> <span>Location: {tour.location}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Clock size={16} /> <span>Duration: {tour.duration}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Activity size={16} /> <span>Difficulty: {tour.difficulty}</span>
                  </div>
                </div>

                <div style={{ marginTop: 'auto' }}>
                  <Link to="/booking" className="btn btn-primary" style={{ width: '100%' }}>Book This Tour</Link>
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
