import React from 'react';
import { FaRegStar, FaRegSmile, FaRegCalendarAlt } from 'react-icons/fa';

const Testimonials = () => (
    <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Travelers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl p-6 flex flex-col items-center">
                <FaRegSmile className="text-4xl text-primary mb-4" />
                <p className="italic mb-2">“The best travel experience I’ve ever had! Everything was perfectly organized.”</p>
                <span className="font-bold">— Alex J.</span>
            </div>
            <div className="card bg-base-100 shadow-xl p-6 flex flex-col items-center">
                <FaRegStar className="text-4xl text-primary mb-4" />
                <p className="italic mb-2">“Amazing destinations and friendly guides. Highly recommended!”</p>
                <span className="font-bold">— Priya S.</span>
            </div>
            <div className="card bg-base-100 shadow-xl p-6 flex flex-col items-center">
                <FaRegCalendarAlt className="text-4xl text-primary mb-4" />
                <p className="italic mb-2">“Flexible schedules and great support throughout the trip.”</p>
                <span className="font-bold">— Marco L.</span>
            </div>
        </div>
    </section>
);

export default Testimonials;
