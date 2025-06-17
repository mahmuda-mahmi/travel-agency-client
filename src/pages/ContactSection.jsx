import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => (
    <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl p-6 flex flex-col items-center">
                <FaEnvelope className="text-3xl text-primary mb-2" />
                <span className="font-bold">Email</span>
                <a href="mailto:info@globetrotters.com" className="text-blue-500">info@globetrotters.com</a>
            </div>
            <div className="card bg-base-100 shadow-xl p-6 flex flex-col items-center">
                <FaPhone className="text-3xl text-primary mb-2" />
                <span className="font-bold">Phone</span>
                <a href="tel:+1234567890" className="text-blue-500">+1 234 567 890</a>
            </div>
            <div className="card bg-base-100 shadow-xl p-6 flex flex-col items-center">
                <FaMapMarkerAlt className="text-3xl text-primary mb-2" />
                <span className="font-bold">Address</span>
                <span>123 World Ave, Adventure City</span>
            </div>
        </div>
    </section>
);

export default ContactSection;
