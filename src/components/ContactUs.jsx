import React from 'react'
import { Link } from 'react-router-dom'

const ContactUs = () => {
    return (
        <section>
            <div className="p-[30px]  flex flex-col gap-8
                lg:py-[80px] lg:px-[140px]  sm:flex-row justify-center  items-center lg:justify-between"  style={{ background: "linear-gradient(92deg, #D4AF37 0%, #438029 100%)", }} >
                <div className='flex flex-col items-center 
                lg:items-start '>
                    <Link className='basis-1/2 '>
                        <img className='h-10 object-contain cursor-pointer  md:h-14 md:w-[130px] lg:w-auto' src="src/assets/icons/navImage.svg" alt="Kush Chatruvedi Global Business Coach Logo" />
                    </Link>
                    <p className=' font-agency font-normal text-white  '>Lorem ipsum dolor sit amet, <br />consectetur adipisicing elit. Lorem<br /> ipsum dolor sit.</p>
                </div>
                <div className='basis-1/2'>
                    <div class="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 text-center">
                        <h2 class="text-[#D4AF37] text-lg uppercase tracking-wide font-agency font-bold">
                            Subscribe Now
                        </h2>
                        <p class="text-gray-600 mt-2 font-agency font-normal">
                            Don’t miss our future updates! Get Subscribed Today!
                        </p>

                        <input
                            type="email"
                            placeholder="Enter your mail id"
                            class="w-full mt-6 border-b border-gray-300 focus:outline-none focus:border-[#D4AF37] text-gray-700 placeholder-gray-400 py-2"
                        />

                        <button
                            class="mt-6 font-agency font-bold cursor-pointer bg-gradient-to-r from-[#D4AF37] to-[#438029] text-white   uppercase px-6 py-2  shadow  "
                        >
                            Subscribe Now
                        </button>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default ContactUs