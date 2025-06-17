import React from 'react';
import { FaMapSigns, FaUmbrellaBeach, FaHiking } from 'react-icons/fa';

const PopularTours = () => (
    <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Popular Tours</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl p-6 flex flex-col items-center">
                <FaMapSigns className="text-4xl text-primary mb-4" />
                <h3 className="font-bold text-xl mb-2">European Explorer</h3>
                <p className="text-center">Experience the best of Europe with guided city tours and cultural highlights.</p>
            </div>
            <div className="card bg-base-100 shadow-xl p-6 flex flex-col items-center">
                <FaUmbrellaBeach className="text-4xl text-primary mb-4" />
                <h3 className="font-bold text-xl mb-2">Tropical Paradise</h3>
                <p className="text-center">Relax on pristine beaches and enjoy water adventures in exotic locations.</p>
            </div>
            <div className="card bg-base-100 shadow-xl p-6 flex flex-col items-center">
                <FaHiking className="text-4xl text-primary mb-4" />
                <h3 className="font-bold text-xl mb-2">Mountain Adventure</h3>
                <p className="text-center">Embark on thrilling hikes and explore breathtaking mountain landscapes.</p>
            </div>
        </div>
    </section>
);

export default PopularTours;
