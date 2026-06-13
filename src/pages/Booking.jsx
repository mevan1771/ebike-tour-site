import React, { useState } from 'react';

const Calendar = () => {
  // Simple calendar visual structure
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div style={{ backgroundColor: 'var(--white)', padding: 'var(--sp-6)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h3 style={{ fontSize: '1.25rem' }}>October 2026</h3>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="btn btn-secondary" style={{ padding: '0.25rem 0.5rem' }}>&lt;</button>
          <button className="btn btn-secondary" style={{ padding: '0.25rem 0.5rem' }}>&gt;</button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-2" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
        {days.map(day => (
          <div key={day} style={{ fontWeight: 'bold', color: 'var(--gray)', fontSize: '0.8rem' }}>{day}</div>
        ))}
      </div>
      
      <div className="grid" style={{ gridTemplateColumns: 'repeat(7, minmax(0, 1fr))', gap: '0.5rem' }}>
        {/* Empty slots for start of month */}
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
                border: 'none',
                backgroundColor: isSelected ? 'var(--primary)' : 'transparent',
                color: isSelected ? 'var(--white)' : 'var(--dark)',
                cursor: 'pointer',
                fontWeight: isSelected ? 'bold' : 'normal',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => { if(!isSelected) e.target.style.backgroundColor = 'var(--light)'; }}
              onMouseLeave={(e) => { if(!isSelected) e.target.style.backgroundColor = 'transparent'; }}
            >
              {date}
            </button>
          );
        })}
      </div>
      {selectedDate && (
        <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: 'var(--light)', borderRadius: 'var(--radius)', textAlign: 'center', color: 'var(--primary)', fontWeight: 500 }}>
          Selected Date: October {selectedDate}, 2026
        </div>
      )}
    </div>
  );
};

const Booking = () => {
  return (
    <div className="animate-fade-in" style={{ backgroundColor: 'var(--light)', minHeight: '100vh', paddingBottom: 'var(--sp-12)' }}>
      <div style={{ backgroundColor: 'var(--dark)', color: 'var(--white)', padding: 'var(--sp-12) 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ color: 'var(--white)', marginBottom: 'var(--sp-2)' }}>Book Your Ride</h1>
          <p style={{ color: 'var(--gray)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
            Select a date, choose your tour, and get ready for an unforgettable experience.
          </p>
        </div>
      </div>

      <div className="container" style={{ marginTop: 'var(--sp-8)' }}>
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Calendar Section */}
          <div>
            <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>1. Select Date</h2>
            <Calendar />
          </div>

          {/* Booking Form Section */}
          <div>
            <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>2. Booking Details</h2>
            <form style={{ backgroundColor: 'var(--white)', padding: 'var(--sp-6)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Select Tour</label>
                <select style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius)', border: '1px solid #E2E8F0', fontSize: '1rem', outline: 'none' }}>
                  <option value="">-- Choose a Tour --</option>
                  <option value="ella">Ella Highlands Explorer</option>
                  <option value="galle">Galle Coastal Cruise</option>
                  <option value="sigiriya">Sigiriya Rock & Lakes</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Number of E-Bikes</label>
                <input type="number" min="1" max="10" defaultValue="1" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius)', border: '1px solid #E2E8F0', fontSize: '1rem', outline: 'none' }} />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Full Name</label>
                <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius)', border: '1px solid #E2E8F0', fontSize: '1rem', outline: 'none' }} />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email Address</label>
                <input type="email" placeholder="john@example.com" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius)', border: '1px solid #E2E8F0', fontSize: '1rem', outline: 'none' }} />
              </div>

              <button type="button" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
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
