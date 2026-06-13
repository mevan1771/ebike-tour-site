import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Battery, Map } from 'lucide-react';
import ImagePlaceholder from '../components/ImagePlaceholder';

const Home = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="section" style={{ padding: '0', position: 'relative' }}>
        <ImagePlaceholder height="80vh" text="Hero Background Image (Sri Lankan Landscape with E-bikes)" />
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
            background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.4))'
          }}
        >
          <div className="container" style={{ textAlign: 'center', color: 'var(--white)' }}>
            <h1 style={{ color: 'var(--white)', marginBottom: 'var(--sp-4)', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
              Discover Sri Lanka<br />The <span style={{ color: 'var(--primary)' }}>Wild</span> Way
            </h1>
            <p style={{ fontSize: '1.25rem', marginBottom: 'var(--sp-6)', maxWidth: '600px', margin: '0 auto var(--sp-6) auto' }}>
              Premium E-bike tours across breathtaking landscapes. Effortless riding, unforgettable memories.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/tours" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
                Explore Tours
              </Link>
              <Link to="/booking" className="btn btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.125rem', backgroundColor: 'transparent', color: 'var(--white)', borderColor: 'var(--white)' }}>
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
            <h2 style={{ marginBottom: 'var(--sp-2)' }}>Why Ride With Us?</h2>
            <p style={{ color: 'var(--gray)' }}>Experience the perfect blend of adventure and comfort.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div style={{ textAlign: 'center', padding: 'var(--sp-6)', backgroundColor: 'var(--light)', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ display: 'inline-flex', padding: '1rem', backgroundColor: 'var(--primary)', color: 'var(--white)', borderRadius: '50%', marginBottom: '1rem' }}>
                <Battery size={32} />
              </div>
              <h3>Effortless Riding</h3>
              <p style={{ color: 'var(--gray)', marginTop: '0.5rem' }}>Top-of-the-line e-bikes make climbing hills and long distances a breeze.</p>
            </div>
            
            <div style={{ textAlign: 'center', padding: 'var(--sp-6)', backgroundColor: 'var(--light)', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ display: 'inline-flex', padding: '1rem', backgroundColor: 'var(--secondary)', color: 'var(--white)', borderRadius: '50%', marginBottom: '1rem' }}>
                <Leaf size={32} />
              </div>
              <h3>Eco-Friendly</h3>
              <p style={{ color: 'var(--gray)', marginTop: '0.5rem' }}>Explore nature without leaving a carbon footprint behind.</p>
            </div>
            
            <div style={{ textAlign: 'center', padding: 'var(--sp-6)', backgroundColor: 'var(--light)', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ display: 'inline-flex', padding: '1rem', backgroundColor: 'var(--primary)', color: 'var(--white)', borderRadius: '50%', marginBottom: '1rem' }}>
                <Map size={32} />
              </div>
              <h3>Expert Guides</h3>
              <p style={{ color: 'var(--gray)', marginTop: '0.5rem' }}>Local guides who know the best hidden trails and scenic spots.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours Preview */}
      <section className="section">
        <div className="container">
          <div className="flex justify-between items-center" style={{ marginBottom: 'var(--sp-8)' }}>
            <h2>Featured Destinations</h2>
            <Link to="/tours" style={{ color: 'var(--primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              View All <ArrowRight size={20} />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} style={{ backgroundColor: 'var(--white)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
                <ImagePlaceholder height="250px" text={`Tour Image ${item}`} />
                <div style={{ padding: 'var(--sp-4)' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Ella Highlands Explorer</h3>
                  <p style={{ color: 'var(--gray)', marginBottom: '1rem', fontSize: 'var(--small)' }}>
                    Wind through tea plantations and misty mountains on this breathtaking 1-day journey.
                  </p>
                  <div className="flex justify-between items-center">
                    <span style={{ fontWeight: 'bold', fontSize: '1.25rem', color: 'var(--primary)' }}>$45</span>
                    <Link to="/booking" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Book</Link>
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
