import React, { useRef } from 'react';
import { FaGlobeAmericas, FaMapMarkedAlt, FaPhoneAlt, FaPlaneDeparture } from 'react-icons/fa';
import Testimonials from './Testimonials';
import PopularTours from './PopularTours';
import ContactSection from './ContactSection';
import SuggestedPlaces from './SuggestedPlaces';

// Define a minimal, summery palette
const MAIN_BG = "bg-[#FFFDF6]"; // off-white, sand-like
const ACCENT = "#FFD580"; // soft summery yellow
const ACCENT_DARK = "#FFB84C"; // deeper yellow for contrast
const TEXT_COLOR = "text-[#22223B]"; // deep blue-grey for readability

const Home = () => {
    // Refs for scrolling
    const heroRef = useRef(null);
    const featuresRef = useRef(null);
    const placesRef = useRef(null);
    const toursRef = useRef(null);
    const testimonialsRef = useRef(null);
    const contactRef = useRef(null);

    const scrollTo = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={`min-h-screen ${MAIN_BG} font-sans`}>            {/* Navbar */}
            <div className="navbar sticky top-0 z-50 shadow-md bg-white backdrop-blur-sm">
                <div className="flex-1 flex items-center cursor-pointer" onClick={() => scrollTo(heroRef)}>
                    <FaGlobeAmericas className="text-2xl mr-2" style={{ color: ACCENT_DARK }} />
                    <span className="text-xl font-bold tracking-wide text-[#22223B]">GlobeTrotters</span>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a className="font-semibold text-[#22223B] hover:text-[#FFB84C] cursor-pointer" onClick={() => scrollTo(heroRef)}>Home</a></li>
                        <li><a className="font-semibold text-[#22223B] hover:text-[#FFB84C] cursor-pointer" onClick={() => scrollTo(placesRef)}>Destinations</a></li>
                        <li><a className="font-semibold text-[#22223B] hover:text-[#FFB84C] cursor-pointer" onClick={() => scrollTo(toursRef)}>Tours</a></li>
                        <li><a className="font-semibold text-[#22223B] hover:text-[#FFB84C] cursor-pointer" onClick={() => scrollTo(contactRef)}>Contact</a></li>
                    </ul>
                </div>
            </div>{/* Banner/Hero Section with Image */}
            <div ref={heroRef} className="relative min-h-[70vh] flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80" alt="Travel Banner" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30" />
                <div className="relative z-10 text-center flex flex-col items-center bg-white/95 p-8 rounded-2xl shadow-2xl max-w-2xl mx-4">
                    <h1 className="mb-5 text-4xl md:text-5xl font-bold text-[#22223B]">Explore the World with GlobeTrotters</h1>
                    <p className="mb-6 text-lg text-gray-700 max-w-xl">Discover breathtaking destinations, curated tours, and unforgettable adventures. Your journey begins here!</p>
                    <button
                        className="btn font-bold text-lg rounded-full px-8 shadow-lg border-0 hover:shadow-xl transition-all"
                        style={{ background: ACCENT, color: '#22223B' }}
                        onClick={() => scrollTo(placesRef)}
                    >
                        Start Your Adventure
                    </button>
                </div>
            </div>            {/* Features Section */}
            <div ref={featuresRef} className="py-16 px-4 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10 text-[#22223B]">Why Travel With Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="card bg-white shadow-lg hover:shadow-xl transition-shadow p-6 flex flex-col items-center">
                        <FaMapMarkedAlt className="text-4xl mb-4" style={{ color: ACCENT_DARK }} />
                        <h3 className="font-bold text-xl mb-2 text-[#22223B]">Top Destinations</h3>
                        <p className="text-center text-gray-600">Handpicked locations across the globe for every kind of traveler.</p>
                    </div>
                    <div className="card bg-white shadow-lg hover:shadow-xl transition-shadow p-6 flex flex-col items-center">
                        <FaPlaneDeparture className="text-4xl mb-4" style={{ color: ACCENT_DARK }} />
                        <h3 className="font-bold text-xl mb-2 text-[#22223B]">Curated Tours</h3>
                        <p className="text-center text-gray-600">Expertly crafted tours to make your journey seamless and memorable.</p>
                    </div>
                    <div className="card bg-white shadow-lg hover:shadow-xl transition-shadow p-6 flex flex-col items-center">
                        <FaPhoneAlt className="text-4xl mb-4" style={{ color: ACCENT_DARK }} />
                        <h3 className="font-bold text-xl mb-2 text-[#22223B]">24/7 Support</h3>
                        <p className="text-center text-gray-600">Our team is always here to help you, wherever you are in the world.</p>
                    </div>
                </div>
            </div>

            {/* Suggested Places Section with Demo Images */}
            <div ref={placesRef}><SuggestedPlaces /></div>

            {/* More Sections */}
            <div ref={toursRef}><PopularTours /></div>
            <div ref={testimonialsRef}><Testimonials /></div>
            <div ref={contactRef}><ContactSection /></div>            {/* Footer */}
            <footer className="footer footer-center p-6 bg-white border-t border-[#FFD580] shadow-inner mt-8">
                <aside>
                    <FaGlobeAmericas className="text-2xl mb-2" style={{ color: ACCENT_DARK }} />
                    <p className="font-bold text-[#22223B]">GlobeTrotters © {new Date().getFullYear()} - All rights reserved</p>
                </aside>
            </footer>
        </div>
    );
};

export default Home;