import React from 'react';

const places = [
    {
        name: 'Santorini, Greece',
        img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
        desc: 'Famous for its white-washed houses and blue domes overlooking the Aegean Sea.'
    },
    {
        name: 'Kyoto, Japan',
        img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
        desc: 'A city of temples, cherry blossoms, and tranquil gardens.'
    },
    {
        name: 'Banff, Canada',
        img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80',
        desc: 'Stunning turquoise lakes and majestic mountain scenery.'
    },
    {
        name: 'Cape Town, South Africa',
        img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80',
        desc: 'A vibrant city with Table Mountain and beautiful beaches.'
    },
    {
        name: 'Queenstown, New Zealand',
        img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
        desc: 'Adventure capital surrounded by lakes and mountains.'
    },
    {
        name: 'Petra, Jordan',
        img: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80',
        desc: 'Ancient city carved into rose-red cliffs.'
    }
];

const SuggestedPlaces = () => (
    <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-sky-700">Suggested Places</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {places.map((place, idx) => (
                <div key={idx} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <figure className="h-48 overflow-hidden rounded-t-xl">
                        <img src={place.img} alt={place.name} className="object-cover w-full h-full" loading="lazy" />
                    </figure>
                    <div className="card-body">
                        <h3 className="card-title text-lg text-sky-800">{place.name}</h3>
                        <p className="text-gray-600">{place.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default SuggestedPlaces;
