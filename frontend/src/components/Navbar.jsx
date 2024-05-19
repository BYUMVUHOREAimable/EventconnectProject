import React, { useState } from 'react';
import { logo, lock, hamburgerMenu, close } from '../assets'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const handleClick = () => setToggle(!toggle);

  return (
    <div className='w-full h-[80px] bg-white border-b fixed top-0 z-20'>
        <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4'>
            
        <Link to='/'> <img src={logo} className="w-[10rem]" alt="logo" /></Link>

            <div className='hidden md:flex items-center '>
                <ul className='flex gap-4'>
                    <Link to='/' className='hover:underline'><li>Home</li></Link>
                    <Link to='/services' className='hover:underline'><li>Products | Services</li></Link>
                    <Link to='/pricing' className='hover:underline'><li>Pricing</li></Link>
                    <Link to='/about' className='hover:underline'><li>About</li></Link>
                    <Link to='/support' className='hover:underline'><li>Support</li></Link>
                </ul>
            </div>


              <div className='hidden md:flex'>
                  
                <Link to='/authentication' className='flex justify-between items-center  bg-transparent  px-6 gap-2'>
                    <img src={lock} alt='lock'/>
                    Login
                  </Link>
                  
                  <Link to='/authentication/signup' className='mr-8 px-8 py-3 rounded-md hover:bg-[#6dcfb0] bg-[#20B486] text-white font-bold'>Sign Up</Link>

          
              </div>

            <div className='md:hidden mr-4'  onClick={handleClick}>
                <img src={toggle ? close : hamburgerMenu} alt='toggle'/>
            </div>

        </div>

        <div className={toggle ? 'absolute z-10 pt-4  bg-white w-full px-8 md:hidden border-b' : 'hidden'}>
            <ul>
                <Link to='/' className='p-2 hover:bg-gray-100 hover:underline cursor-pointer'>Home</Link>
                  <Link to='/services' className='p-2 hover:bg-gray-100 hover:underline cursor-pointer'>Products</Link>
                  <Link to='/pricing' className='p-2 hover:bg-gray-100 hover:underline cursor-pointer'>Pricing</Link>
                  <Link to='/about' className='p-2 hover:bg-gray-100 hover:underline cursor-pointer'>About</Link>
                  <Link to='/support' className='pr-8 mr-4 hover:bg-gray-100 hover:underline cursor-pointer'>Support</Link>
                <div  className='flex flex-row my-4 gap-4'>
                <Link to='/authentication'> <button className='border border-[20B486] flex justify-center items-center  bg-transparent  px-6 gap-2 py-4'>
                        <img src={lock} alt='lock' />
                       Login 
                      </button></Link>
                     
               <Link to='/authentication'>      <button className='px-8 py-4 rounded-md hover:bg-[#6dcfb0] bg-[#20B486] '>Sign Up</button> </Link>
                </div>
            </ul>
        </div>

    </div>
  )
}

export default Navbar;
