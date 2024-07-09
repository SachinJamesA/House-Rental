import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function About() {
  return (
    <div className='my-3'>
        <div className="abtlogo flex justify-center mt-6">
          <img className="w-[30rem]" src="../assets/logo.png" alt="Background"/>
        </div>
        <div className='my-8 w-[100%] flex justify-center'>
          <div className='w-[70%]'>
          <h2 className='font-bold text-xl mb-2'>About Us</h2>
            <p className=' flex justify-center items-center text-base my-4'>Launched in 2024, India's No. 1 property portal, deals with every aspect of the consumers needs in the real estate industry. It is an online forum where buyers, sellers and brokers/agents can exchange information about real estate properties quickly, effectively and inexpensively. You can advertise a property, search for a property, browse through properties, build your own property microsite, and keep yourself updated with the latest news and trends making headlines in the realty sector.</p>
            <h2 className='font-bold text-xl mb-2'>Why Choose Us?</h2>
            <p className='mb-3'>At present, Gidak prides itself for having around nine lakh property listings spanning across 600+ cities in India. Of all, the website held over 5.7 lakh paid listings at the end of FY 2018-19. In addition to providing an online platform to real estate developers, brokers and property owners for listing their property for sale, purchase or rent, 99acres.com offers advertisement stints such as microsites, banners, home page links and project pages to the clients for better visibility and branding in the market.
            With the ever-evolving online search behaviour, Gidak shares updated information pertinent to real estate activities, assisting prospective buyers to make informed buying decision. We make online property search easier, quicker and smarter!</p>
            <div>
              <h4 className='my-3 font-bold text-xl'>Connect With Us</h4>
              <div className="imgs flex">
                <Link>
                  <img className='w-[4rem]' src="../assets/124021.png" alt="" />
                </Link>
                <Link>
                  <img className='w-[3rem] mx-2' src="../assets/fb.png" alt="" />
                </Link>
                <Link>
                  <img className='w-[4rem]' src="../assets/images.jpg" alt="" />
                </Link>
                <Link>
                  <img className='w-[3rem] mx-2' src="../assets/images (1).jpg" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
