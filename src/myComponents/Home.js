import React from 'react';
// import { CiSearch } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";
import { CiHome } from "react-icons/ci";
import { FaRegCompass } from "react-icons/fa";
import { LuDollarSign } from "react-icons/lu";
import { BsThreeDots } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import CardItem from './CardItem';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Home() {
  return (
    <div className="main">
      <div className="relative lg:top-1">
        <img
          className="object-cover w-full"
          src="../assets/img1.png"
          alt="Background"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white">
          <h1 className="text-2xl font-bold mb-2 lg:mb-8 lg:text-[4.5rem]">Discover Your <span className='text-red-500'>Perfect Rental</span></h1>
          <p className="text-base lg:text-[2rem]">Rental Cars, Houses, and Items in just a Few Clicks</p>
        </div>
      </div>

      <div className="browse w-[90%] m-auto mt-3">
        <h1 className='font-bold text-4xl text-center'>Browse From Top Categories</h1>
        <img className='mt-4 m-auto' src="../assets/img2redline.png" alt="" />
        <div className="browse-btns mt-6 flex justify-start items-center overflow-x-scroll lg:overflow-x-hidden">
          <div className="btn1">
            <button className='font-medium border border-solid border-black px-4 py-2 rounded-full mb-2 cursor-pointer hover:bg-red-500 hover:text-white hover:border-none flex items-center lg:mr-4 whitespace-nowrap mr-3'><AiOutlineLike className='mr-3 font-bolder hover:text-white'/>Holiday Rentals</button>
          </div>
          <div className="btn2">
            <button className='font-medium border border-solid border-black px-4 py-2 rounded-full mb-2 cursor-pointer hover:bg-red-500 hover:text-white hover:border-none flex items-center lg:mr-4 mr-3 whitespace-nowrap' ><CiHome className='mr-3 font-bolder hover:text-white'/>Residential Spaces</button>
          </div>
          <div className="btn3">
            <button className='font-medium border border-solid border-black px-4 py-2 rounded-full mb-2 cursor-pointer hover:bg-red-500 hover:text-white hover:border-none flex items-center lg:mr-4 whitespace-nowrap mr-3'><FaRegCompass className='mr-3 font-bolder hover:text-white'/>Event Spaces</button>
          </div>
          <div className="btn4">
            <button className='font-medium border border-solid border-black px-4 py-2 rounded-full mb-2 cursor-pointer hover:bg-red-500 hover:text-white hover:border-none flex items-center lg:mr-4 whitespace-nowrap mr-3'><LuDollarSign className='mr-3 font-bolder hover:text-white'/>Commercial Properties</button>
          </div>
          <div className="btn5">
            <button className='font-medium border border-solid border-black px-4 py-2 rounded-full mb-2 cursor-pointer hover:bg-red-500 hover:text-white hover:border-none flex items-center lg:mr-4 whitespace-nowrap mr-3'><BsThreeDots className='mr-3 font-bolder hover:text-white'/>More</button>
          </div>
        </div>
      </div>

      <div className="listing w-[90%] m-auto mt-3">
        <h1 className='font-bold text-4xl text-center'>Featured Listings</h1>
        <img className='mt-4 m-auto'  src="../assets/img2redline.png" alt="" />
        
        <div className="listing-btns mt-6 flex justify-start items-center overflow-x-scroll xl:overflow-x-hidden">
          <div className="btn1">
            <button className='font-medium border border-solid border-black px-4 py-2 rounded-full mb-2 cursor-pointer hover:bg-red-500 hover:text-white hover:border-none flex items-center lg:mr-4 whitespace-nowrap mr-3'>All Items (5125)</button>
          </div>
          <div className="btn2">
            <button className='font-medium border border-solid border-black px-4 py-2 rounded-full mb-2 cursor-pointer hover:bg-red-500 hover:text-white hover:border-none flex items-center lg:mr-4 whitespace-nowrap mr-3'>Residential Spaces (64)</button>
          </div>
          <div className="btn3">
            <button className='font-medium border border-solid border-black px-4 py-2 rounded-full mb-2 cursor-pointer hover:bg-red-500 hover:text-white hover:border-none flex items-center lg:mr-4 whitespace-nowrap mr-3'>Sports Venues</button>
          </div>
          <div className="btn4">
            <button className='font-medium border border-solid border-black px-4 py-2 rounded-full mb-2 cursor-pointer hover:bg-red-500 hover:text-white hover:border-none flex items-center lg:mr-4 whitespace-nowrap mr-3'>Meeting Spaces</button>
          </div>
          <div className="btn5">
            <button className='font-medium border border-solid border-black px-4 py-2 rounded-full mb-2 cursor-pointer hover:bg-red-500 hover:text-white hover:border-none flex items-center lg:mr-4 whitespace-nowrap mr-3'>Vans & Buses</button>
          </div>
          <div className="btn5">
            <button className='font-medium border border-solid border-black px-4 py-2 rounded-full mb-2 cursor-pointer hover:bg-red-500 hover:text-white hover:border-none flex items-center lg:mr-4 whitespace-nowrap mr-3'>Cars & SUVs</button>
          </div>
          <div className="btn5">
            <button className='font-medium border border-solid border-black px-4 py-2 rounded-full mb-2 cursor-pointer hover:bg-red-500 hover:text-white hover:border-none flex items-center lg:mr-4 whitespace-nowrap mr-3'>Lorries & Industrial Vehicles</button>
          </div>
          <div className="btn5">
            <button className='font-medium border border-solid border-black px-4 py-2 rounded-full mb-2 cursor-pointer hover:bg-red-500 hover:text-white hover:border-none flex items-center lg:mr-4 whitespace-nowrap' mr-3><MdKeyboardArrowRight /></button>
          </div>
        </div>

        <div className="cards mt-4 flex gap-y-4 justify-center items-center flex-col lg:flex-row md:grid md:grid-cols-2 md:gap-4 lg:grid lg:grid-cols-3 lg:place-items-center">
          <CardItem image="../assets/Mask group (1).png" title="Luxury villa in Rego Park" authorImg="../assets/Ellipse 38.png" authorName="Anne Liza" authorDesc="Property Seller"/>
          <CardItem image="../assets/Mask group (1).png" title="Luxury villa in Rego Park" authorImg="../assets/Ellipse 38.png" authorName="Anne Liza" authorDesc="Property Seller"/>
          <CardItem image="../assets/Mask group (1).png" title="Luxury villa in Rego Park" authorImg="../assets/Ellipse 38.png" authorName="Anne Liza" authorDesc="Property Seller"/>
          <CardItem image="../assets/Mask group (1).png" title="Luxury villa in Rego Park" authorImg="../assets/Ellipse 38.png" authorName="Anne Liza" authorDesc="Property Seller"/>
          <CardItem image="../assets/Mask group (1).png" title="Luxury villa in Rego Park" authorImg="../assets/Ellipse 38.png" authorName="Anne Liza" authorDesc="Property Seller"/>
          <CardItem image="../assets/Mask group (1).png" title="Luxury villa in Rego Park" authorImg="../assets/Ellipse 38.png" authorName="Anne Liza" authorDesc="Property Seller"/>
        </div>
        <div className="learnMore mt-4 flex justify-center mb-4">
          <Link to="/rentals">
            <button className='text-base font-bold bg-red-600 py-2 px-7 rounded-full hover:bg-red-700 text-white whitespace-nowrap'>More</button>
          </Link>
        </div>

        <div className="boxes bg-[#F4F4F4] rounded-xl py-4 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4">
          <div className="box-left-text w-[90%] m-auto mb-3 mr-4 md:h-60">
            <h2 className='text-[40px] font-bold'>Insight and Performances Metrices</h2>
          </div>
          <div className="box1 bg-[#1C1C1C] w-[90%] m-auto rounded-2xl h-60 flex justify-center items-center">
            <h2 className='text-4xl font-bold text-white text-center flex flex-col'>1000+ <span className='text-base font-normal'>Active Listings</span></h2>
          </div>
          <div className="box1 bg-[#1C1C1C] w-[90%] m-auto rounded-2xl h-60 flex justify-center items-center my-3">
            <h2 className='text-4xl font-bold text-white text-center flex flex-col'>5000+ <span className='text-base font-normal'>Total Listings in the System</span></h2>
          </div>
          <div className="box1 bg-[#1C1C1C] w-[90%] m-auto rounded-2xl h-60 flex justify-center items-center">
            <h2 className='text-4xl font-bold text-white text-center flex flex-col'>30+ <span className='text-base font-normal'>Articles in the Blog</span></h2>
          </div>
        </div>
      </div>

      <div className="location flex flex-col justify-center items-center mt-3">
        <h1 className='font-bold text-4xl text-center'>Featured Locations</h1>
        <img className='mt-4 m-auto' src="../assets/img2redline.png" alt="" />

        <div className="location-imgs mt-3 flex flex-col justify-center items-center lg:flex-row">
          <div className="left-img mb-3">
            <img className='h-[28rem]' src="../assets/Rectangle 2187.png" alt="" />
          </div>
          <div className="img-group-center lg:flex lg:justify-center lg:items-center mx-6">
            <div className="group-center-1 mx-1">
              <img className='mb-3 w-80' src="../assets/Rectangle 2188.png" alt="" />
              <img className='mb-3 w-80 lg:mb-0' src="../assets/Rectangle 2190.png" alt="" />
            </div>
            <div className="group-center-2 mr-1">
              <img className='mb-3 w-80' src="../assets/Rectangle 2193.png" alt="" />
              <img className='w-80' src="../assets/Rectangle 2191.png" alt="" />
            </div>
          </div>
          <div className="right-img mt-3">
            <img className='h-[28rem]' src="../assets/Rectangle 2187.png" alt="" />
          </div>
        </div>
      </div>

      <div className="location flex flex-col justify-center items-center mt-3">
        <h1 className='font-bold text-4xl text-center'>Important Article</h1>
        <img className='mt-4 m-auto' src="../assets/img2redline.png" alt="" />

        <div className="important-boxes mt-3 w-[90%] flex flex-col justify-center items-center lg:flex-row">

          <div className="imp-left lg:mr-6 lg:w-[45%]">
            <img className='lg:w-[44rem] lg:h-[25rem]' src="../assets/i-parallax-11-1024x683.jpeg.png" alt="" />
            <h4 className='text-[#E93740] font-bold text-sm my-4'>February 4, 2023</h4>
            <h2 className='text-[#030303] font-bold text-xl mb-4'>Heading 3 → Plan the Perfect Vacation</h2>
            <p className='font-normal text-[#8B8B8B] text-base'>Discover expert advice on how to find the ideal rental property that meets your needs and budget.</p>
          </div>

          <div className="imp-right mt-4 lg:mt-0 lg:w-[45%]">
            <div className="imp-right-b1 flex flex-col lg:w-[32rem] items-center lg:flex-row">
              <img className='w-80 lg:w-28 lg:h-24 mr-4' src="../assets/imp3.png" alt="" />
              <div className="b1-text mt-2">
                <h4 className='text-[#E93740] font-bold text-sm'>May 7, 2023</h4>
                <h2 className='text-[#030303] font-bold text-xl'>Car Rental Hacks for a Smooth Journey</h2>
                <p className='font-normal text-[#8B8B8B] text-base'>Learn insider tips for getting the best deals and making the most of your rental car experience.</p>
              </div>
            </div>
            <div className="imp-right-b2 mt-3 flex flex-col lg:w-[32rem] items-center lg:flex-row">
              <img className='w-80 lg:w-28 lg:h-24 mr-4' src="../assets/imp-2.png" alt="" />
              <div className="b2-text mt-2">
                <h4 className='text-[#E93740] font-bold text-sm'>April 25, 2023</h4>
                <h2 className='text-[#030303] font-bold text-xl'>Managing Your Rental Items: A Comprehensive Guide</h2>
                <p className='font-normal text-[#8B8B8B] text-base'>Get valuable insights on how to effectively manage and maintain your rented items.</p>
              </div>
            </div>
            <div className="imp-right-b3 mt-3 flex flex-col lg:w-[32rem]  items-center lg:flex-row">
              <img className='w-80 lg:w-28 lg:h-24 mr-4' src="../assets/imp4.png" alt="" />
              <div className="b3-text mt-2">
                <h4 className='text-[#E93740] font-bold text-sm'>January 2, 2023</h4>
                <h2 className='text-[#030303] font-bold text-xl'>Navigating the Rental Market: Insights for New Renters</h2>
                <p className='font-normal text-[#8B8B8B] text-base'>Explore key considerations and useful tips for individuals new to the rental market.</p>
              </div>
            </div>
            <div className="imp-right-b4 mt-3 flex flex-col lg:w-[32rem] items-center lg:flex-row">
              <img className='w-80 lg:w-28 lg:h-24 mr-4' src="../assets/imp1.png" alt="" />
              <div className="b4-text mt-2">
                <h4 className='text-[#E93740] font-bold text-sm'>April 7, 2023</h4>
                <h2 className='text-[#030303] font-bold text-xl'>Maximizing Returns: Strategies for Rental Property Owners</h2>
                <p className='font-normal text-[#8B8B8B] text-base'>Learn strategies to optimize the return on investment for your rental property.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}