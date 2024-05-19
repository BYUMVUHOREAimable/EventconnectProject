import React from 'react';
import {ChevronLeft} from 'react-feather';
import Direction from '../../components/SubComponents/Direction';
import Details from '../../Scenes/Event/Details';

import basketPlaygroundImg from '../../assets/basketplayground.jpg'; // Replace with the correct path to your image

const BookPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div
                className="flex-shrink-0 h-80 sm:h-96 bg-cover bg-center relative"
                style={{
                    backgroundImage: `url(${basketPlaygroundImg})`,
                }}
            >
                <div className="absolute top-4 left-2 flex items-center">
                    <ChevronLeft sizplaygroundsImge={24} className="text-white" />
                    <p className="ml-6 text-white">Turf Grounds</p>
                </div>
            </div>
            <main className="flex-grow bg-white py-4 px-4">
                <div className="flex items-center">
                    <div className="flex-grow">
                        <h2 className="text-2xl font-bold text-gray-800">Coolulu Karmangala</h2>
                    </div>
                    <Details/>
                </div>
                <Direction />
            </main>
            <div className="flex-shrink-0 flex justify-end">
                <a href='/' className="bg-violet-950 text-white px-4 py-2 rounded-md w-80 mr-7 mb-4">Book Now</a>
            </div>
        </div>
    );
};

export default BookPage;
