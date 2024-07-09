import React from 'react'
import { CiHeart } from "react-icons/ci";

export default function CardItem(props) {
  return (
    <div class="w-[23rem] bg-white border border-gray-200 rounded-lg ">
        <div className='card-img'>
            <img class="rounded-t-lg w-full h-[14rem]" src={props.image} alt="" />
        </div>
        <div class="p-5">
            <div className='left-text'>
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">{props.title}</h5>
                <h5 class="mb-2 text-xl font-medium tracking-tight text-red-500">{props.price} <span className='text-black text-base'>/ {props.cal}</span></h5>
            </div>
            <div className="in-room flex justify-between items-center mt-3">
                <p class="mb-3 font-normal text-gray-700 whitespace-nowrap mr-2">{props.bedrooms} Bedrooms</p>
                <p class="mb-3 font-normal text-gray-700 border-l border-solid border-black border-r whitespace-nowrap px-3">{props.bathrooms} Bathrooms</p>
                <p class="mb-3 font-normal text-gray-700 whitespace-nowrap ml-2">{props.size}</p>
            </div>
            <div className="author border border-solid border-gray-400 py-1 px-2 flex justify-between items-center">
                <div className="left flex">
                    <img class="rounded-t-lg w-[4rem]" src={props.authorImg} alt="" />
                    <div className="left-text ml-3">
                        <h5 className='font-semibold text-xl'>{props.authorName}</h5>
                        <h5 className='font-normal text-sm'>{props.authorDesc}</h5>
                    </div>
                </div>
                <div className="right-icon">
                    <CiHeart className='text-2xl cursor-pointer' />
                </div>
            </div>
        </div>
    </div>
  )
}
