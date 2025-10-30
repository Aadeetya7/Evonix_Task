import React from 'react'
import Slider from 'react-slick'
import "../css/common.css"

const UpcomingEvents = () => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024, // when screen width <= 1024px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: true,
                },
            },
            {
                breakpoint: 460, // when screen width <= 460
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: true,
                },
            },
        ]
    };

    return (
        <section>
            <div className="p-[30px] gap-5   
                lg:py-[80px] lg:px-[140px]   ">
                <h4 className="font-agency font-bold uppercase text-[#D4AF37] mb-5 text-center
                            md:text-[22px]">UPCOMING <span className='text-[#438029]'>EVENTS</span></h4>
                <Slider {...settings} className='gap-5  upcoming-events'>
                    <div className='flex gap-2.5 '>
                        <div className='flex flex-col gap-2.5 '>
                            <img src="src\assets\images\headway-F2KRf_QfCqw-unsplash.png" alt="First slider image" className='xl:w-[352px] xl:h-[243px]' />
                            <div className='flex flex-col  '>
                                <h5 className=' mb-[6px] font-agency font-bold  text-[#438029]'>EVEN - 01</h5>
                                <p className='font-agency font-normal'>Lorem ipsum dolor, sit amet<br /> consectetur adipisicing elit. Amet.</p>
                                <button className='  cursor-pointer uppercase mt-[13px] font-agency font-bold px-2 bg-[#D4AF37]   text-white  text-[14px]     w-[130px] p-2 py-2  
                        md:text-[20px]     '>Buy Now </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-2.5'>
                        <div className='flex flex-col gap-2.5 '>
                            <img src="src\assets\images\the-climate-reality-project-Hb6uWq0i4MI-unsplash@2x.png" alt="First slider image" className='xl:w-[352px] xl:h-[243px]' />
                            <div className='flex flex-col  '>
                                <h5 className=' mb-[6px] font-agency font-bold  text-[#438029]'>EVEN - 01</h5>
                                <p className='font-agency font-normal'>Lorem ipsum dolor, sit amet<br /> consectetur adipisicing elit. Amet.</p>
                                <button className='  cursor-pointer uppercase mt-[13px] font-agency font-bold px-2 bg-[#D4AF37]   text-white  text-[14px]     w-[130px] p-2 py-2  
                        md:text-[20px]     '>Buy Now </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-2.5'>
                        <div className='flex flex-col gap-2.5 '>
                            <img src="src\assets\images\samantha-gades-fIHozNWfcvs-unsplash.png" alt="First slider image" className='xl:w-[352px] xl:h-[243px]' />
                            <div className='flex flex-col  '>
                                <h5 className=' mb-[6px] font-agency font-bold  text-[#438029]'>EVEN - 01</h5>
                                <p className='font-agency font-normal'>Lorem ipsum dolor, sit amet<br /> consectetur adipisicing elit. Amet.</p>
                                <button className='  cursor-pointer uppercase mt-[13px] font-agency font-bold px-2 bg-[#D4AF37]   text-white  text-[14px]     w-[130px] p-2 py-2  
                        md:text-[20px]     '>Buy Now </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-2.5 '>
                        <div className='flex flex-col gap-2.5 '>
                            <img src="src\assets\images\headway-F2KRf_QfCqw-unsplash.png" alt="First slider image" className='xl:w-[352px] xl:h-[243px]' />
                            <div className='flex flex-col  '>
                                <h5 className=' mb-[6px] font-agency font-bold  text-[#438029]'>EVEN - 01</h5>
                                <p className='font-agency font-normal'>Lorem ipsum dolor, sit amet<br /> consectetur adipisicing elit. Amet.</p>
                                <button className='  cursor-pointer uppercase mt-[13px] font-agency font-bold px-2 bg-[#D4AF37]   text-white  text-[14px]     w-[130px] p-2 py-2  
                        md:text-[20px]     '>Buy Now </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-2.5'>
                        <div className='flex flex-col gap-2.5 '>
                            <img src="src\assets\images\the-climate-reality-project-Hb6uWq0i4MI-unsplash@2x.png" alt="First slider image" className='xl:w-[352px] xl:h-[243px]' />
                            <div className='flex flex-col  '>
                                <h5 className=' mb-[6px] font-agency font-bold  text-[#438029]'>EVEN - 01</h5>
                                <p className='font-agency font-normal'>Lorem ipsum dolor, sit amet<br /> consectetur adipisicing elit. Amet.</p>
                                <button className='  cursor-pointer uppercase mt-[13px] font-agency font-bold px-2 bg-[#D4AF37]   text-white  text-[14px]     w-[130px] p-2 py-2  
                        md:text-[20px]     '>Buy Now </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-2.5'>
                        <div className='flex flex-col gap-2.5 '>
                            <img src="src\assets\images\samantha-gades-fIHozNWfcvs-unsplash.png" alt="First slider image" className='xl:w-[352px] xl:h-[243px]' />
                            <div className='flex flex-col  '>
                                <h5 className=' mb-[6px] font-agency font-bold  text-[#438029]'>EVEN - 01</h5>
                                <p className='font-agency font-normal'>Lorem ipsum dolor, sit amet<br /> consectetur adipisicing elit. Amet.</p>
                                <button className='  cursor-pointer uppercase mt-[13px] font-agency font-bold px-2 bg-[#D4AF37]   text-white  text-[14px]     w-[130px] p-2 py-2  
                        md:text-[20px]     '>Buy Now </button>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>
        </section>
    )
}

export default UpcomingEvents