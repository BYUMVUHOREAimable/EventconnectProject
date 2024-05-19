import React from "react";
import { BiLogoApple, BiLogoGoogle, } from "react-icons/bi"
const ResponsivePage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-cover bg-fixed bg_image">
            <div className="sm:block">

                <h1 className="mt-4 text-white text-center text-2xl md:text-2xl lg:text-3xl">
                    Beautiful places to <br />
                    Book around you.
                </h1>

                <h1 className="w-full my-5 px-8 py-2 text-white text-center text-1xl mt-2 md:text-3xl lg:text-2xl">
                    Choose your dreams destination, arena and <br /> much more for your event
                </h1>
                <div className="w-full grid grid-flow-row">
                    <a href="/authentication/signup" className="w-full my-5 bg-violet-900 text-white px-8 py-2 mt-5 p-2 rounded-lg focus:border-blue-500 border-stone-200 text-center">
                        Sign up free
                    </a>

                    <a href="/home" className="w-full my-5  bg-indigo-900 text-white px-8 py-2 mt-4 p-2 rounded-lg focus:border-blue-500 border-stone-200 text-center">
                        <BiLogoGoogle
                            className="inline-block w-5 h-5 mr-2"
                        />
                        Continue with Google
                    </a>

                    <a href="/home" className="w-full my-5  bg-indigo-900 text-white px-8 py-2 mt-4 p-2 rounded-lg focus:border-blue-500 border-stone-200 text-center">
                        <BiLogoApple
                            className="inline-block w-5 h-5 mr-2"
                        />
                        Continue with Apple
                    </a>
                    <a href="/authentication" className="w-full my-5 text-center  text-white px-8 py-2 mt-4">Log in</a>    
                </div>
            </div>
        </div>
    );
};

export default ResponsivePage;
