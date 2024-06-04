import React, { useState } from 'react';
import ShareDivision from './SubComponents/ShareDivision';
import Navbar from './Navbar';

export default function Notification() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleShareDivision = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <Navbar/>
        <div className="flex items-center justify-center w-full h-screen bg-gray-100 mt-10">
             
            <div className="w-full md:w-2/6 sm:w-1/2 h-full md:h-[90vh] bg-white rounded-2xl flex flex-col justify-center items-center relative overflow-y-auto p-4 shadow-lg">
                <h1 className='text-center py-6 text-lg md:text-xl'>Invite</h1>
                <form className="w-full flex flex-col items-center">
                    <div className='grid gap-2 grid-rows-2 w-11/12 md:w-4/5 mx-auto text-xs md:text-sm'>
                        <input type="text" className="text-center py-3 border-b-2" name="from" placeholder='Enter your name (FROM)' />
                        <input type="text" className="text-center py-3 border-b-2" name="to" placeholder='Enter receivers name (TO)' />
                    </div>
                    <div className='w-11/12 md:w-4/5 mx-auto border-b-2 text-xs md:text-sm my-2'>
                        <textarea type="text" className="text-center w-full" placeholder="Message (60 words)" columns="7" rows="3" name="message"></textarea>
                    </div>
                    <div className='grid gap-6 grid-cols-1 md:grid-cols-2 w-11/12 md:w-4/5 py-2 mx-auto text-xs md:text-sm'>
                        <div className='grid grid-flow-row'>
                            <label htmlFor="date" className='text-[.75em] md:text-[.875em] text-center'>Expiry Date</label>
                            <input type="date" className="text-center text-sm py-3 border-b-2" id="date" name="date" />
                        </div>
                        <div className='grid grid-flow-row'>
                            <label htmlFor="time" className='text-[.75em] md:text-[.875em] text-center'>CVV</label>
                            <input type="time" className="text-center text-sm py-3 border-b-2" id="time" name="time" />
                        </div>
                    </div>
                    {isOpen && <ShareDivision />}
                    <div className='w-full flex-shrink-0 flex justify-center'>
                       
                        <button type='button' className="bg-violet-950 text-white px-4 py-2 rounded-md w-4/5 mx-auto mb-3" onClick={toggleShareDivision}>Share</button>
                    </div>
                </form>
            </div>
            </div>
            </div>
    );
}
