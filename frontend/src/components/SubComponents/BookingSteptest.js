import React,{useState} from 'react';
import ShareDivision from './ShareDivision';

export default function Notification() {
     const [isOpen, setIsOpen] = useState(false);
     const toggleShareDivision = () => {
          setIsOpen(!isOpen);
     };
     return (
          <div className="flex items-center  bg-blue-950 bg-opacity-50 justify-center w-full h-screen">
               <div className="w-2/6  h-[90vh] bg-white rounded-2xl  justify-center items-center relative overflow-x-scroll">
                    <h1 className='text-center'>Add a Card</h1>
                    <form>
                         <div className='grid gap-2 grid-rows-2 md:w-4/5 w-5/6 mx-auto text-xs'>
                              <input type="text" className="text-center py-3 border-b-2" name="from" placeholder='Enter your name (FROM)' />
                              <input type="text" className="text-center py-3 border-b-2" name="to" placeholder='Enter receivers name (TO)' />
                         </div>
                         <div className='md:w-4/5 w-5/6 mx-auto border-b-2 text-xs'>
                              <textarea type="text" className="text-center w-full" placeholder="Message (60 words)" columns="7" rows={3} name="cardNumber" ></textarea>    
                         </div>
                         <div className='grid gap-6 md:grid-cols-2 sm:grid-cols-2  grid-flow-row md:w-4/5 w-5/6 py-2 mx-auto text-xs'>
                              <div className='grid grid-flow-row'>
                                   <label for="DateEX" className='text-[.5em] text-center'>Expiry Date</label>
                                   <input type="date" className="text-center text-sm py-3 border-b-2" id="date"name="date" />
                              </div>
                              <div className='grid grid-flow-row'>
                                   <label for="DateEX" className='text-[.5em] text-center'>CVV</label>
                                   <input type="time" className="text-center text-sm py-3 border-b-2" id="time" name="time" />
                              </div>
                         </div>
                         {isOpen && <ShareDivision />}
                         <div className='w-full absolute bottom-0 flex-shrink-0 flex justify-center'>
                              <button type='button' className="bg-violet-950 text-white px-4 py-2 rounded-md w-4/5 mx-auto mb-3" onClick={toggleShareDivision}>Share</button>
                         </div>
                    </form>
               </div>
          </div>
     );
}