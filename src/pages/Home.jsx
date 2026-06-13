import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Battery, Map } from 'lucide-react';
import ImagePlaceholder from '../components/ImagePlaceholder';

const Home = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="section" style={{ padding: '0', position: 'relative' }}>
        <ImagePlaceholder height="85vh" text="Hero Background Image (Sri Lankan Landscape with E-bikes)" />
        <div 
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            background: 'linear-gradient(to top, rgba(15, 61, 54, 0.95), rgba(15, 61, 54, 0.5))'
          }}
        >
          <div className="container" style={{ textAlign: 'center', color: 'var(--white)' }}>
            <h1 style={{ color: 'var(--light)', marginBottom: 'var(--sp-6)', textShadow: '0 2px 10px rgba(0,0,0,0.3)', fontSize: 'clamp(3rem, 5vw, 4.5rem)', lineHeight: 1.1 }}>
              Discover Sri Lanka<br />The <span style={{ color: 'var(--secondary)' }}>Wild</span> Way
            </h1>
            <p style={{ fontSize: '1.25rem', marginBottom: 'var(--sp-8)', maxWidth: '650px', margin: '0 auto var(--sp-8) auto', color: 'rgba(253, 250, 244, 0.9)', fontWeight: 300 }}>
              Premium E-bike tours across breathtaking landscapes. Effortless riding, unforgettable luxury, and wild nature.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/tours" className="btn btn-secondary" style={{ padding: '1.25rem 2.5rem', fontSize: '1.125rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Explore Tours
              </Link>
              <Link to="/booking" className="btn btn-outline" style={{ padding: '1.25rem 2.5rem', fontSize: '1.125rem', color: 'var(--light)', borderColor: 'var(--light)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--sp-12)' }}>
            <h2 style={{ marginBottom: 'var(--sp-4)' }}>The WildBike Experience</h2>
            <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--secondary)', margin: '0 auto var(--sp-4) auto' }}></div>
            <p style={{ color: 'var(--gray)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>Immerse yourself in nature without compromising on comfort.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div style={{ textAlign: 'center', padding: 'var(--sp-8)', backgroundColor: 'var(--light)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(201, 166, 70, 0.15)' }}>
              <div style={{ display: 'inline-flex', padding: '1.5rem', backgroundColor: 'var(--primary)', color: 'var(--secondary)', borderRadius: '50%', marginBottom: '1.5rem', boxShadow: 'var(--shadow-md)' }}>
                <Battery size={36} />
              </div>
              <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>Effortless Riding</h3>
              <p style={{ color: 'var(--gray)', lineHeight: 1.7 }}>Our premium e-bikes make climbing steep mountain trails and conquering long distances feel like a gentle breeze.</p>
            </div>
            
            <div style={{ textAlign: 'center', padding: 'var(--sp-8)', backgroundColor: 'var(--light)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(201, 166, 70, 0.15)' }}>
              <div style={{ display: 'inline-flex', padding: '1.5rem', backgroundColor: 'var(--secondary)', color: 'var(--primary)', borderRadius: '50%', marginBottom: '1.5rem', boxShadow: 'var(--shadow-md)' }}>
                <Leaf size={36} />
              </div>
              <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>Eco-Friendly Safari</h3>
              <p style={{ color: 'var(--gray)', lineHeight: 1.7 }}>Explore the untamed wilderness and lush jungles of Sri Lanka without leaving a carbon footprint behind.</p>
            </div>
            
            <div style={{ textAlign: 'center', padding: 'var(--sp-8)', backgroundColor: 'var(--light)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(201, 166, 70, 0.15)' }}>
              <div style={{ display: 'inline-flex', padding: '1.5rem', backgroundColor: 'var(--primary)', color: 'var(--accent)', borderRadius: '50%', marginBottom: '1.5rem', boxShadow: 'var(--shadow-md)' }}>
                <Map size={36} />
              </div>
              <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>Expert Local Guides</h3>
              <p style={{ color: 'var(--gray)', lineHeight: 1.7 }}>Our native guides know the hidden trails, majestic viewpoints, and secret wildlife spots you won't find on a map.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours Preview */}
      <section className="section" style={{ backgroundColor: 'var(--light)' }}>
        <div className="container">
          <div className="flex justify-between items-end" style={{ marginBottom: 'var(--sp-12)' }}>
            <div>
              <h2 style={{ marginBottom: 'var(--sp-4)' }}>Signature Journeys</h2>
              <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--secondary)' }}></div>
            </div>
            <Link to="/tours" style={{ color: 'var(--primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.875rem' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent)'} onMouseLeave={(e) => e.target.style.color = 'var(--primary)'}>
              View All Expeditions <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} style={{ backgroundColor: 'var(--white)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow)', transition: 'transform 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <ImagePlaceholder height="300px" text={`Featured Tour Image ${item}`} />
                <div style={{ padding: 'var(--sp-6)' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>Ella Highlands Explorer</h3>
                  <p style={{ color: 'var(--gray)', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    Wind through emerald tea plantations and misty mountains on this breathtaking 1-day journey.
                  </p>
                  <div className="flex justify-between items-center" style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '1.5rem' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '1.5rem', color: 'var(--secondary)' }}>$45</span>
                    <Link to="/booking" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem' }}>Book</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
