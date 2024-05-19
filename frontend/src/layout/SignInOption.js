import React from "react";
import {BiLogoApple ,BiLogoGoogle } from "react-icons/bi";
const ResponsivePage = () => {
    return (
        <div className=" flex flex-col items-center justify-center h-screen bg-purple-50">
            <p className="fixed top-2 left-2 text-2xl text-violet-900 font-semibold bg-gradient-to-r from-violet-800 to-purple-400 text-transparent bg-clip-text">EventConnect</p>
            <div className="w-2/4 h-fit self-center bg-slate-300">
                <div className="w-1/1 h-fit">
                    <h1 className="text-purple-950 text-center text-2xl font-semibold p-3">
                        Beautiful places to Book around you. <br />
                        <span className="text-sm text-purple-950">Choose your dreams destination, arena and much more for your event</span>
                    </h1>
                </div>
                <div className="w-1/1 h-fit p-3  flex flex-col">
                    <a href="/#" className="w-full my-5 bg-violet-900 text-white px-8 py-2 p-2 rounded-lg focus:border-blue-500 border-stone-200 text-center">
                        Sign up free
                    </a>
                    <a href="/#" className="w-full bg-indigo-900 text-white px-8 py-2 p-2 rounded-lg focus:border-blue-500 border-stone-200 text-center">
                        <BiLogoGoogle
                            className="inline-block w-5 h-5 mr-2"
                        />
                        Continue with Google
                    </a>
                    <a href="/#" className="w-full my-5  bg-indigo-900 text-white px-8 py-2 mt-4 p-2 rounded-lg focus:border-blue-500 border-stone-200 text-center">
                        <BiLogoApple
                            className="inline-block w-5 h-5 mr-2"
                        />
                        Continue with Apple
                    </a>
                    <a href="/authentication" className="w-full text-center bg-violet-900 text-white px-8 py-2 mt-4 rounded-lg">Log in</a>
                </div>
                <div className="w-1/1 h-fit p-3 ">
                    <p className="font-semibold text-sm text-center">By Continuing, You agree To Our <span className="text-violet-950 cursor-pointer">Terms of services</span>
                        and acknowledge that medium's <span className="text-violet-950 cursor-pointer">Privacy Policies</span>
                    </p>
                </div>
            </div>
        </div>
    );
};
export default ResponsivePage;