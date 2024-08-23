import React from 'react'
import { FaLocationArrow } from "react-icons/fa";
import { IoMdPhonePortrait } from "react-icons/io";
import FooterLinks from './FooterLinks';
import { FaInstagram, FaFacebook , FaLinkedin } from "react-icons/fa";


const Footer = () => {
const importantLinks = [
    {
        name: "Home",
    },
    {
        name: "About",
    },
    {
        name: "Service",
    },
    {
        name: "Login",
    },
]

const Links = [
    {
        name: "Privacy Policy",
    },
    {
        name: "Services",
    },
    {
        name: "About Us",
    },
   
]


  return (
    <>
    <footer className='text-white rounded-t-3xl bg-navbar'>
        <div className='container mx-auto max-w-[1200px0] p-4'>
            {/* footer content section */}
            <div className='grid py-5 md:grid-cols-3'>
            <div className='px-3 py-8'>
                <h1 className='mb-3 text-justify text-xl font-bold sm:text-left sm:text-3xl'>
                <a href="/#home" className=''>COZ</a>
                <span className='inline-bloack font-bold text-primary'>WEB</span>
                </h1>
                <p>
                Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate.{" "}  
                </p>
                <br />

                <div className='flex items-center gap-3'>
                <FaLocationArrow />
                <p>Kurunegala, SriLanka</p>
                </div>

                <div className='flex items-center gap-3 mt-3'>
                <IoMdPhonePortrait /> 
                <p>+94 71 9351888</p>
                </div>

            </div>
           

                <div className='grid grid-cols-2 sm:grid-cols-3 md:pl-10 col-span-2'>
                    
                    {/* important links section */}
                    <div className='px-4 py-8'>
                    <h1 className='mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl pt-8'>
                        Important Links
                    </h1>
                    <ul className='flex flex-col gap-3'>
                    <FooterLinks links={importantLinks}/>
                    </ul>
                    </div>

                    {/* links section */}
                    <div className='px-4 py-8'>
                    <h1 className='mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl pt-8'>
                        Links
                    </h1>
                    <ul className='flex flex-col gap-3'>
                    <FooterLinks links={Links}/>
                    </ul>
                    
                    </div>

                    {/* social links section */}
                    <div className='px-4 py-8'>
                    <h1 className='mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl pt-8'>
                    Social Links
                    </h1>
                    <div className='flex flex-col gap-3'>
                        <h1>Subscribe to our newsletter</h1>
                        <input type="text" placeholder='Enter your email'
                        className='rounded-full px-3 py-1 text-black focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500' />
                        
                        <div className='flex gap-3 mt-6 items-center'>
                            <a href="#" className='duration-200 hover:scale-105'>
                            <FaInstagram className='text-3xl'/>
                            </a>
                            <a href="#" className='duration-200 hover:scale-105'>
                            <FaFacebook className='text-3xl'/>
                            </a>
                            <a href="#" className='duration-200 hover:scale-105'>
                            <FaLinkedin className='text-3xl'/>
                            </a>
                        </div>
                    </div>

                    </div>
                </div>
            </div>

            {/* Footer copyright */}
            <div className='bottom-footer'>
                <p className='border-t-2 border-gray-300/50 py-6 text-center'>
                @copyright 2024 Travery || Rumanda
                </p>
            </div>
        </div>
    </footer>
    </>
  )
}


export default Footer
 