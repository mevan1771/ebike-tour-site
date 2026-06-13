import React, { useState } from 'react';

const Calendar = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div style={{ backgroundColor: 'var(--light)', padding: 'var(--sp-6)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(201, 166, 70, 0.2)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)' }}>October 2026</h3>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="btn btn-outline" style={{ padding: '0.25rem 0.5rem', borderColor: 'rgba(201, 166, 70, 0.5)', color: 'var(--primary)' }}>&lt;</button>
          <button className="btn btn-outline" style={{ padding: '0.25rem 0.5rem', borderColor: 'rgba(201, 166, 70, 0.5)', color: 'var(--primary)' }}>&gt;</button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-2" style={{ textAlign: 'center', marginBottom: '1rem' }}>
        {days.map(day => (
          <div key={day} style={{ fontWeight: 600, color: 'var(--secondary)', fontSize: '0.8rem', textTransform: 'uppercase' }}>{day}</div>
        ))}
      </div>
      
      <div className="grid" style={{ gridTemplateColumns: 'repeat(7, minmax(0, 1fr))', gap: '0.5rem' }}>
        <div /><div /><div /><div />
        {dates.map(date => {
          const isSelected = selectedDate === date;
          return (
            <button
              key={date}
              onClick={() => setSelectedDate(date)}
              style={{
                aspectRatio: '1',
                borderRadius: '50%',
                border: isSelected ? 'none' : '1px solid rgba(15, 61, 54, 0.1)',
                backgroundColor: isSelected ? 'var(--primary)' : 'var(--white)',
                color: isSelected ? 'var(--secondary)' : 'var(--dark)',
                cursor: 'pointer',
                fontWeight: isSelected ? 'bold' : 'normal',
                transition: 'all 0.2s',
                boxShadow: isSelected ? 'var(--shadow-md)' : 'none'
              }}
              onMouseEnter={(e) => { if(!isSelected) { e.target.style.backgroundColor = 'var(--light)'; e.target.style.borderColor = 'var(--secondary)'; } }}
              onMouseLeave={(e) => { if(!isSelected) { e.target.style.backgroundColor = 'var(--white)'; e.target.style.borderColor = 'rgba(15, 61, 54, 0.1)'; } }}
            >
              {date}
            </button>
          );
        })}
      </div>
      {selectedDate && (
        <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: 'var(--primary)', color: 'var(--secondary)', borderRadius: 'var(--radius)', textAlign: 'center', fontWeight: 600, letterSpacing: '0.5px' }}>
          Date Reserved: October {selectedDate}, 2026
        </div>
      )}
    </div>
  );
};

const Booking = () => {
  return (
    <div className="animate-fade-in" style={{ backgroundColor: 'var(--white)', minHeight: '100vh', paddingBottom: 'var(--sp-16)' }}>
      <div style={{ backgroundColor: 'var(--primary)', color: 'var(--light)', padding: 'var(--sp-16) 0', textAlign: 'center', borderBottom: '4px solid var(--secondary)' }}>
        <div className="container">
          <h1 style={{ color: 'var(--light)', marginBottom: 'var(--sp-4)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>Secure Your Adventure</h1>
          <p style={{ color: 'rgba(253, 250, 244, 0.8)', fontSize: '1.25rem', maxWidth: '650px', margin: '0 auto', fontWeight: 300 }}>
            Select your ideal date, choose your expedition, and get ready for an unforgettable journey.
          </p>
        </div>
      </div>

      <div className="container" style={{ marginTop: 'var(--sp-12)' }}>
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Calendar Section */}
          <div>
            <h2 style={{ marginBottom: '1.5rem', fontSize: '1.75rem', color: 'var(--primary)' }}>1. Select Date</h2>
            <Calendar />
          </div>

          {/* Booking Form Section */}
          <div>
            <h2 style={{ marginBottom: '1.5rem', fontSize: '1.75rem', color: 'var(--primary)' }}>2. Expedition Details</h2>
            <form style={{ backgroundColor: 'var(--light)', padding: 'var(--sp-8)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(201, 166, 70, 0.2)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--primary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Select Tour</label>
                <select style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius)', border: '1px solid rgba(15, 61, 54, 0.2)', fontSize: '1rem', outline: 'none', backgroundColor: 'var(--white)', color: 'var(--dark)' }}>
                  <option value="">-- Choose an Expedition --</option>
                  <option value="ella">Ella Highlands Explorer ($45)</option>
                  <option value="galle">Galle Coastal Cruise ($30)</option>
                  <option value="sigiriya">Sigiriya Rock & Lakes ($40)</option>
                  <option value="kandy">Kandy Temple Trails ($35)</option>
                  <option value="yala">Yala Buffer Zone Safari ($55)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--primary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>E-Bikes</label>
                  <input type="number" min="1" max="10" defaultValue="1" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius)', border: '1px solid rgba(15, 61, 54, 0.2)', fontSize: '1rem', outline: 'none', backgroundColor: 'var(--white)' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--primary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Promo Code</label>
                  <input type="text" placeholder="Optional" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius)', border: '1px solid rgba(15, 61, 54, 0.2)', fontSize: '1rem', outline: 'none', backgroundColor: 'var(--white)' }} />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--primary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Full Name</label>
                <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius)', border: '1px solid rgba(15, 61, 54, 0.2)', fontSize: '1rem', outline: 'none', backgroundColor: 'var(--white)' }} />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--primary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Email Address</label>
                <input type="email" placeholder="john@example.com" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius)', border: '1px solid rgba(15, 61, 54, 0.2)', fontSize: '1rem', outline: 'none', backgroundColor: 'var(--white)' }} />
              </div>

              <button type="button" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%', padding: '1.25rem', fontSize: '1.125rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Confirm Booking
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Booking;
