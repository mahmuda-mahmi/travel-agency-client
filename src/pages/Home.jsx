import React from 'react';

const Home = () => {
    return (
        <div>
            {/* Navbar */}
            <nav style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem 2rem',
                background: '#0d47a1',
                color: '#fff',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}>
                <div style={{ fontWeight: 'bold', fontSize: '1.5rem', letterSpacing: '2px' }}>
                    GlobeTrotters
                </div>
                <ul style={{
                    display: 'flex',
                    gap: '2rem',
                    listStyle: 'none',
                    margin: 0,
                    padding: 0
                }}>
                    <li><a href="#" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>Home</a></li>
                    <li><a href="#" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>Destinations</a></li>
                    <li><a href="#" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>Tours</a></li>
                    <li><a href="#" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>Contact</a></li>
                </ul>
            </nav>

            {/* Banner */}
            <section style={{
                background: 'linear-gradient(rgba(13,71,161,0.7), rgba(13,71,161,0.7)), url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80") center/cover no-repeat',
                color: '#fff',
                padding: '5rem 2rem',
                textAlign: 'center',
                borderRadius: '0 0 24px 24px',
                marginBottom: '2rem'
            }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 700, letterSpacing: '2px' }}>
                    Explore the World with GlobeTrotters
                </h1>
                <p style={{ fontSize: '1.25rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                    Discover breathtaking destinations, curated tours, and unforgettable adventures. Your journey begins here!
                </p>
                <a href="#" style={{
                    background: '#ffb300',
                    color: '#0d47a1',
                    padding: '0.75rem 2rem',
                    borderRadius: '24px',
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    textDecoration: 'none',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                    Start Your Adventure
                </a>
            </section>

            {/* Destinations */}
            <section style={{ padding: '2rem 0', background: '#f5f7fa' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#0d47a1' }}>Popular Destinations</h2>
                    <div style={{
                        display: 'flex',
                        gap: '2rem',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}>
                        {[
                            {
                                name: 'Paris',
                                img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
                                desc: 'The city of lights, romance, and art.'
                            },
                            {
                                name: 'Bali',
                                img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
                                desc: 'Tropical paradise with stunning beaches.'
                            },
                            {
                                name: 'New York',
                                img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
                                desc: 'The city that never sleeps.'
                            }
                        ].map(dest => (
                            <div key={dest.name} style={{
                                background: '#fff',
                                borderRadius: '16px',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                                width: '300px',
                                overflow: 'hidden',
                                textAlign: 'center'
                            }}>
                                <img src={dest.img} alt={dest.name} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
                                <div style={{ padding: '1rem' }}>
                                    <h3 style={{ margin: '0 0 0.5rem 0', color: '#0d47a1' }}>{dest.name}</h3>
                                    <p style={{ color: '#555', fontSize: '1rem' }}>{dest.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tours */}
            <section style={{ padding: '2rem 0' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#0d47a1' }}>Featured Tours</h2>
                    <div style={{
                        display: 'flex',
                        gap: '2rem',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}>
                        {[
                            {
                                title: 'European Highlights',
                                desc: '10 days across Paris, Rome, and Barcelona.',
                                price: '$2,499'
                            },
                            {
                                title: 'Bali Adventure',
                                desc: '7 days of beaches, temples, and culture.',
                                price: '$1,299'
                            },
                            {
                                title: 'NYC Explorer',
                                desc: '5 days in the Big Apple.',
                                price: '$999'
                            }
                        ].map(tour => (
                            <div key={tour.title} style={{
                                background: '#fff',
                                borderRadius: '16px',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                                width: '300px',
                                padding: '1.5rem',
                                textAlign: 'center'
                            }}>
                                <h3 style={{ color: '#0d47a1', marginBottom: '0.5rem' }}>{tour.title}</h3>
                                <p style={{ color: '#555', marginBottom: '1rem' }}>{tour.desc}</p>
                                <div style={{ fontWeight: 700, color: '#ffb300', fontSize: '1.2rem', marginBottom: '1rem' }}>{tour.price}</div>
                                <a href="#" style={{
                                    background: '#0d47a1',
                                    color: '#fff',
                                    padding: '0.5rem 1.5rem',
                                    borderRadius: '20px',
                                    textDecoration: 'none',
                                    fontWeight: 500
                                }}>Book Now</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section style={{ padding: '2rem 0', background: '#f5f7fa' }}>
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#0d47a1' }}>Contact Us</h2>
                    <form style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        background: '#fff',
                        padding: '2rem',
                        borderRadius: '16px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
                    }}>
                        <input type="text" placeholder="Your Name" style={{
                            padding: '0.75rem',
                            borderRadius: '8px',
                            border: '1px solid #ccc'
                        }} />
                        <input type="email" placeholder="Your Email" style={{
                            padding: '0.75rem',
                            borderRadius: '8px',
                            border: '1px solid #ccc'
                        }} />
                        <textarea placeholder="Your Message" rows={4} style={{
                            padding: '0.75rem',
                            borderRadius: '8px',
                            border: '1px solid #ccc'
                        }} />
                        <button type="submit" style={{
                            background: '#0d47a1',
                            color: '#fff',
                            padding: '0.75rem',
                            borderRadius: '8px',
                            border: 'none',
                            fontWeight: 600,
                            fontSize: '1rem',
                            cursor: 'pointer'
                        }}>Send Message</button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer style={{
                background: '#0d47a1',
                color: '#fff',
                textAlign: 'center',
                padding: '1rem 0',
                marginTop: '2rem',
                borderRadius: '24px 24px 0 0'
            }}>
                &copy; {new Date().getFullYear()} GlobeTrotters. All rights reserved.
            </footer>
        </div>
    );
};

export default Home;