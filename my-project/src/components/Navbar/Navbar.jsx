import React, { useEffect, useState } from 'react';
import { BiPhoneCall, BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa6";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from './ResponsiveMenu';

const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    const [showMenu, setShowMenu] = useState(false);
    const element = document.documentElement;


    useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light"); // Ensure setting back to light
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
        <header className='fixed top-0 left-0 right-0 z-[99] bg-navbar text-white border-b-[1px] border-primary/50'>
            <nav className='container flex items-center justify-between h-[70px] py-2 px-2 pr-5'>
                {/* Logo Section */}
                <div className='text-2xl md:text-3xl text-white pl-5'>
                    <a href="#">COZ <span className='inline-block font-bold text-primary'>WEB</span></a>
                </div>

                {/* Desktop Menu Section */}
                <div className='hidden md:block'>
                    <ul className='flex items-center gap-10'>
                        {/* Menu Items */}
                        <li className='group relative cursor-pointer'>
                            <a href="#" className='flex items-center gap-[2px] h-[72px]'>
                                Home{" "}
                                <span>
                                    <FaCaretDown className='transition-all duration-200 group-hover:rotate-180' />
                                </span>
                            </a>
                            {/* Dropdown Menu */}
                            <div className='absolute -left-9 z-[99999] hidden w-[150px] bg-white p-2 text-black shadow-md rounded-md group-hover:block'>
                                <ul className='space-y-3'>
                                    <li className='p-2 hover:bg-violet-200'>Services</li>
                                    <li className='p-2 hover:bg-violet-200'>About Us</li>
                                    <li className='p-2 hover:bg-violet-200'>Privacy Policy</li>
                                </ul>
                            </div>
                        </li>
                        {/* ... Other Menu Items */}
                        <li className='group cursor-pointer'>
                <a href="#" className='flex items-center gap-[2px] h-[72px]'>
                    Services {""}
                    <span>
                        <FaCaretDown className='transition-all duration-200 group-hover:rotate-180'/>
                    </span>
                    </a>

                    {/* dropdown section */}

                    <div className='absolute left-0 z-[99999] hidden w-full rounded-b-3xl bg-white text-black shadow-md group-hover:block'>
                        <div className='grid grid-cols-3 gap-5'>
                            <div className='overflow-hidden'> 
                                <img src="https://picsum.photos/200" alt="not found"
                                className='max-h-[300px] w-full rounded-b-3xl object-fill p-2' />
                            </div>
                            <div className='col-span-2 '>
                                <h1 className='text-xl font-semibold pt-2 pb-3'>
                                    Best Selling
                                </h1>
                                <p className='text-sm text-slate-600'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur exercitationem delectus iusto animi aperiam deleniti reprehenderit doloribus, numquam corporis quae. 
                                <div className='grid grid-cols-3 mt-4'>

                                    <div>
                                        <h1 className='pb-3 pt-2 text-xl font-semibold'>Development</h1>
                                        <ul className='space-y-2'>
                                            <li className='cursor-pointer text-black/80 hover:text-primary'>Web Development</li>
                                            <li className='cursor-pointer text-black/80 hover:text-primary'>Mobile Development</li>
                                            <li className='cursor-pointer text-black/80 hover:text-primary'>Software Development</li>
                                        </ul>
                                    </div>
                                    <div>
                                    <h1 className='pb-3 pt-2 text-xl font-semibold'>Other Services</h1>
                                    <ul className='space-y-2'>
                                            <li className='cursor-pointer text-black/80 hover:text-primary'>Cloud Services</li>
                                            <li className='cursor-pointer text-black/80 hover:text-primary'>Mobile App</li>
                                            <li className='cursor-pointer text-black/80 hover:text-primary'>App Development</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <img src="https://picsum.photos/100" alt="not found" className='pt-3' />
                                    </div>

                                </div>
                                
                                </p>
                            </div>
                        </div>
                        <div>
                        
                        </div>
                    </div>
                </li>
                <li>Contact Us</li>
                
                        <li>
                            <div className='flex items-center gap-4'>
                                <div>
                                    <BiPhoneCall className='text-2xl h-[40px] w-[40px] rounded-md p-2 text-white bg-primary hover:bg-primary/90' />
                                </div>
                                <div>
                                    <p>Call Us On</p>
                                    <p>
                                        <a href="tel:+94 719351888">+94 71 93 51 888</a>
                                    </p>
                                </div>
                            </div>
                        </li>

                        {/* Light and Dark Mode Switcher */}
                        {
                            theme === "dark" ? (
                                <BiSolidSun className='text-2xl cursor-pointer' onClick={toggleTheme} />
                            ) : (
                                <BiSolidMoon className='text-2xl cursor-pointer' onClick={toggleTheme} />
                            )
                        }
                    </ul>
                </div>

                {/* mobile menu section */}
                <div className='flex items-center gap-4 md:hidden'>
                {
                            theme === "dark" ? (
                                <BiSolidSun className='text-2xl cursor-pointer' onClick={toggleTheme} />
                            ) : (
                                <BiSolidMoon className='text-2xl cursor-pointer' onClick={toggleTheme} />
                            )
                        }
                {
                    showMenu ? 
                        <HiMenuAlt1
                        onClick={toggleMenu} 
                        className='cursor-pointer transition-all'
                        size={30} /> : 
                        
                        <HiMenuAlt3
                        onClick={toggleMenu} 
                        className='cursor-pointer transition-all'
                        size={30}
                        />   
                }
                    
                </div>
            </nav>
        </header>

        {/* mobile menu dropdown section */}
        <ResponsiveMenu showMenu={showMenu} />

    </>
    );
};

export default Navbar;
