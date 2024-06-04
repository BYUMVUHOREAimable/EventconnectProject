import { ChevronLeft } from 'react-feather';
import { GrStatusGood } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Step5 = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-md h-full mx-auto bg-gray-200 rounded-2xl relative mt-24 p-6 md:p-8 shadow-lg">
        <ChevronLeft size={30} className="absolute top-4 left-4 cursor-pointer" />
        
        <div className="text-center">
          <GrStatusGood size={80} className="mx-auto my-3 text-green-600" />
          <h3 className="text-lg md:text-xl font-bold text-green-600">Payment Successful!</h3>
          <h1 className="text-base md:text-lg text-green-600">Order ID: 124450</h1>
          <p className="py-4 text-sm md:text-base text-green-600">Tickets have been mailed via Email/SMS</p>
        </div>

        <div className="absolute bottom-4 w-full text-center">
          <Link to="/dashboard" className="block text-center py-2 text-base md:text-lg underline text-green-600 mb-28 ml-96">
            Go to Home
          </Link>
          
          <div className="w-full h-20 max-w-screen-sm mx-auto grid grid-cols-1 gap-4 mt-4">
            <button className="bg-green-600 text-white rounded-md py-3 text-sm md:text-base mt-20">
              Download your ticket
            </button>
            
            <Link to="/sharing">
              <button className="bg-green-600 text-white rounded-md py-3 text-sm md:text-base mt-2">
                Share to social media
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step5;
