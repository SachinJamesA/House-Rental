import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Footer() {
  return (
    <>
        <div className='foot mt-4 bg-[#F4F4F4] p-8'>
            <div className="foot-links lg:flex lg:justify-between lg:w-[100%]">
                <div className="foot-1 lg:w-[22rem] lg:mr-4">
                    <img className='' src="../assets/logo.png" alt="" />
                    <p className='text-[#1c1c1c] font-normal text-base my-2'>Sri Lanka's first & largest platform designed to create an online marketplace exclusively for RENT</p>
                    <img src="../assets/footer.png" alt="" />
                </div>

                <div className="foot-2 my-4 lg:w-32">
                    <ul>
                        <h3 className='text-[#E93740] mb-3 font-bold text-lg'>Navigation</h3>
                        <li>
                            <Link className='font-normal text-sm' href="/about">about us</Link>
                        </li>
                        <li>
                            <a className='font-normal text-sm' href="/">Blog</a>
                        </li>
                        <li>
                            <a className='font-normal text-sm' href="/">Terms of use</a>
                        </li>
                        <li>
                            <a className='font-normal text-sm' href="/">Privacy policy</a>
                        </li>
                    </ul>
                </div>

                <div className="foot-3 my-4 lg:w-44 lg:mr-2">
                    <ul>
                        <h3 className='text-[#E93740] mb-3 font-bold text-lg whitespace-nowrap'>Featured Locations</h3>
                        <li>
                            <a className='font-normal text-sm' href="/">Kandy</a>
                        </li>
                        <li>
                            <a className='font-normal text-sm' href="/">Anuradhapura</a>
                        </li>
                        <li>
                            <a className='font-normal text-sm' href="/">Badulla</a>
                        </li>
                        <li>
                            <a className='font-normal text-sm' href="/">Colombo</a>
                        </li>
                        <li>
                            <a className='font-normal text-sm' href="/">Kaluthara</a>
                        </li>
                    </ul>
                </div>

                <div className="foot-4 mb-4 lg:my-4 lg:w-28">
                    <ul>
                        <h3 className='text-[#E93740] mb-3 font-bold text-lg'>Help</h3>
                        <li>
                            <a className='font-normal text-sm' href="/">FAQ</a>
                        </li>
                        <li>
                            <a className='font-normal text-sm' href="/">Contact Us</a>
                        </li>
                    </ul>
                </div>

                <div className="foot-5 lg:my-4 lg:w-[23rem]">
                    <ul>
                        <h3 className='text-[#E93740] mb-3 font-bold text-lg'>Subscribe to Our Newsletter</h3>
                        <p className='font-normal text-sm'>Stay updated with the latest listings and rental tips.</p>
                        <input className='text-base font-bold py-2 px-7 rounded-full my-3 border border-solid border-[#cccccc] ' type="email" placeholder='Email address'/>
                        <button className='text-base font-bold bg-red-600 py-2 px-7 rounded-full flex items-center hover:bg-red-700 text-white whitespace-nowrap'>Subscribe</button>
                    </ul>
                </div>
            </div>
        </div>
        <p className='text-[#696888] text-center font-normal text-base'>© Copyright 2024. Designed and Developed by Sachin</p>
    </>
  )
}
