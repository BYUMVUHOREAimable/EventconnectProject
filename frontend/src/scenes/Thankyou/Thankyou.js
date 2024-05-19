import React from "react";
import { Link } from "react-router-dom";
import '../../App'
const ThankYou = () => {
    return (
        <section className="py-10">
            <div className="container mx-auto">
                <div className="flex justify-center items-center">
                    <div className="w-full lg:w-3/4 text-center py-5">
                        <div className="thank__you">
                            <span className="text-4xl text-green-500 mb-4"><i className="ri-checkbox-circle-line"></i></span>
                            <h1 className="mb-3 font-semibold text-3xl">Thank You</h1>
                            <h3 className="mb-4 text-xl">Your event is booked.</h3>
                            <Link to="/dashboard" className="btn  w-1/4 inline-block text-center bg-green-400 text-white py-2 rounded-md">Back to Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default ThankYou;