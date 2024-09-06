import React from 'react';
import Logo from '../../assets/logo.png';

const Navbar = () => {
    return (
        <nav className="bg-black bg-opacity-50 fixed w-full top-0 z-50">
            <div className="flex justify-between items-center max-w-[90%] mx-auto py-4">
            
                <div className='flex items-center'>
                    <img src={Logo} className='h-8' alt="Logo" />
                </div>
                
            
                <div className="flex-grow flex justify-center">
                    <ul className='flex gap-8 text-white'>
                        <li className="hover:underline hover:underline-offset-4 hover:decoration-2 hover:shadow-lg hover:shadow-rose-500 transition-shadow duration-300 cursor-pointer">
                            <a href="#">Cars</a>
                        </li>
                        <li className="hover:underline hover:underline-offset-4 hover:decoration-2 hover:shadow-lg hover:shadow-rose-500 transition-shadow duration-300 cursor-pointer">
                            <a href="#">Motorcycles</a>
                        </li>
                        <li className="hover:underline hover:underline-offset-4 hover:decoration-2 hover:shadow-lg hover:shadow-rose-500 transition-shadow duration-300 cursor-pointer">
                            <a href="#">Accessories</a>
                        </li>
                        <li className="hover:underline hover:underline-offset-4 hover:decoration-2 hover:shadow-lg hover:shadow-rose-500 transition-shadow duration-300 cursor-pointer">
                            <a href="#">Shop</a>
                        </li>
                        <li className="hover:underline hover:underline-offset-4 hover:decoration-2 hover:shadow-lg hover:shadow-rose-500 transition-shadow duration-300 cursor-pointer">
                            <a href="#">Account</a>
                        </li>
                    </ul>
                </div>

               
                <div className="flex items-center gap-4 text-white">
                    <a href="#" className="hover:underline hover:underline-offset-4 hover:decoration-2 hover:shadow-lg hover:shadow-rose-500 transition-shadow duration-300 cursor-pointer">Menu</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
