import { ChevronLeft } from 'react-feather';
import { GrStatusGood } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import ThankYou from '../scenes/Thankyou/Thankyou';

const Step5 = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <div className="flex-1 flex items-center justify-center mt-20">
        <div className="max-w-screen-md w-full bg-white rounded-2xl relative px-6 py-8 md:px-8 md:py-10 shadow-lg">
          <ChevronLeft
            size={30}
            className="left-4 cursor-pointer text-green-600"
          />
          <div className="text-center">
            <GrStatusGood size={60} className="mx-auto my-3 text-green-600" />
            <h3 className="text-lg md:text-xl font-bold text-green-600">
              Payment Successful!
            </h3>
            <h1 className="text-base md:text-lg text-green-600">
              Order ID: 124450
            </h1>
            <p className="py-4 text-sm md:text-base text-green-600">
              Tickets have been mailed via Email/SMS
            </p>
          </div>
          <div className="left-0 right-0 text-center">
            <Link
              to="/dashboard"
              className="block text-center py-2 text-base md:text-lg underline text-green-600 mb-4 sm:mb-8 lg:mb-12"
            >
              Go to dashboard
            </Link>
            <div className="w-full max-w-screen-sm mx-auto grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8">
              <button className="bg-green-600 text-white rounded-md py-3 text-sm md:text-base">
                Download your ticket
              </button>
              <Link to="/sharing">
                <button className="bg-green-600 text-white rounded-md py-3 text-sm md:text-base">
                  Share to social media
                </button>
              </Link>
            </div>
          </div>
          <ThankYou />
        </div>
      </div>
    </div>
  );
};

export default Step5;
