import { BiLogoAdobe } from 'react-icons/bi';
import { MdOutlineMenu } from 'react-icons/md';
import { IoCloseSharp } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [toggleHamburger, setToggleHamBurger] = useState(true);
    return (
        <div>
            <div className='flex justify-between items-center relative'>
                <div className='flex items-center gap-1'>
                    <span><BiLogoAdobe className='text-red-600 text-4xl'></BiLogoAdobe></span>
                    <span>AlphaMotors</span>
                </div>
                <div className='flex items-center gap-1 text-sm '>
                    <div className=''>
                        <div className='sm:hidden'>
                            <span>
                                {
                                    toggleHamburger ?
                                        <MdOutlineMenu className='text-2xl' onClick={() => { setToggleHamBurger(!toggleHamburger) }}></MdOutlineMenu> :
                                        <IoCloseSharp className='text-2xl' onClick={() => { setToggleHamBurger(!toggleHamburger) }}></IoCloseSharp>
                                }
                            </span>
                            <div>
                                {
                                    !toggleHamburger && <>
                                        <nav className='absolute top-12 right-0 bg-blue-500 p-4 rounded-md mr-1 mt-2 duration-500 drop-shadow-2xl'>
                                            <nav id="sidebar" className='space-y-2 text-xs text-white font-semibold'>

                                                <NavLink to="/">Home</NavLink>


                                                <NavLink>Add Product</NavLink>


                                                <NavLink>My Cart</NavLink>


                                                <NavLink to="/signup">Register</NavLink>

                                            </nav>
                                        </nav>
                                    </>
                                }
                            </div>
                        </div>
                        <nav className='hidden sm:block'>
                            <ul className='flex gap-5'>
                                <li>
                                    <NavLink>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink>Add Product</NavLink>
                                </li>
                                <li>
                                    <NavLink>My Cart</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className='items-center gap-1 hidden sm:flex'>
                        <div className='text-2xl border-2'>S</div>
                        <span className='bg-blue-600 duration-300 
                    hover:bg-blue-700 rounded-sm
                    active:bg-blue-800 px-2 py-1 
                    text-white text-sm font-bold'>
                            Login
                        </span>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='items-center gap-1 flex sm:hidden'>
                    <div className='text-2xl border-2'>S</div>
                    <span className='bg-blue-600 duration-300 
                    hover:bg-blue-700 rounded-sm
                    active:bg-blue-800 px-2 py-1 
                    text-white text-sm font-bold'>
                        Login
                    </span>
                </div>
            </div>
        </div>

    );
};

export default Navbar;