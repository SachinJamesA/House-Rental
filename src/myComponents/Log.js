import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Log() {
  return (
    <section className='flex justify-center items-center h-[62vh]'>
        <form className='max-w-[600px] w-full px-[30px] py-[25px] rounded-[8px] boxShadownSignup text-[#333] m-[25px]'>
            <h2 className='text-3xl text-center'>Login</h2>
            <div className="input-box mt-[20px] ">
                <label>Email Address</label>
                <input type="emali" className="w-full h-[50px] bg-transparent border-2 border-solid border-[#ddd] outline-none rounded-[6px] p-[15px] text-base text-[#333] mt-2" placeholder='Enter your email' name='email' required />
            </div>
            <div className="input-box mt-[20px]">
                <label>Password</label>
                <input type="password" className="w-full h-[50px] bg-transparent border-2 border-solid border-[#ddd] outline-none rounded-[6px] p-[15px] text-base text-[#333] mt-2" placeholder='Enter your password' name='password' required />
            </div>
            <div className='flex justify-between items-center mt-[20px]'>
                <div>
                    <Link to="/">
                        <h4 className='text-lg'>Forget password ?</h4>
                    </Link>
                </div>
            </div>
            <button className='w-full h-[55px] bg-[#E93740] border-none rounded-[6px] boxShadowContact cursor-pointer text-xl text-white font-medium mt-[25px] duration-[0.5s] hover:bg-[#fc5961]' type='submit'>Login</button>
        </form>
    </section>
  )
}
