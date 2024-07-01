import React from 'react'
import '../App.css';

export default function Singnup() {
  return (
    <section className='flex justify-center items-center h-[62vh]'>
        <form className='max-w-[600px] w-full px-[30px] py-[25px] rounded-[8px] boxShadownSignup text-[#333] m-[25px]'>
            <h2 className='text-3xl text-center'>Sign Up</h2>
            <div className="input-box mt-[20px]">
                <label>Username</label>
                <input type="text" className="w-full h-[50px] bg-transparent border-2 border-solid border-[#ddd] outline-none rounded-[6px] p-[15px] text-base text-[#333] mt-2" placeholder='Enter your name' name='name' required />
            </div>
            <div className="input-box mt-[20px]">
                <label>Email Address</label>
                <input type="emali" className="w-full h-[50px] bg-transparent border-2 border-solid border-[#ddd] outline-none rounded-[6px] p-[15px] text-base text-[#333] mt-2" placeholder='Enter your email' name='email' required />
            </div>
            <div className="input-box mt-[20px] ">
                <label>Password</label>
                <input type="password" className="w-full h-[50px] bg-transparent border-2 border-solid border-[#ddd] outline-none rounded-[6px] p-[15px] text-base text-[#333] mt-2" placeholder='Enter your password' name='password' required />
            </div>
            <div className='flex justify-between items-center mt-[20px]'>
                <div className="input-box flex items-center text-center">
                    <input type="checkbox" className="cursor-pointer mr-4"/>
                    <label className='text-lg'>Remember Me</label>
                </div>
            </div>
            <button className='w-full h-[55px] bg-[#E93740] border-none rounded-[6px] boxShadowContact cursor-pointer text-xl text-white font-medium mt-[25px] duration-[0.5s] hover:bg-[#fc5961]' type='submit'>Sing Up</button>
        </form>
    </section>
  )
}