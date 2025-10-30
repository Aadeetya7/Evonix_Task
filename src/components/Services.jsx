import React from 'react'

const Services = () => {
    return (
        <section>
            <div className="flex flex-col p-[30px] gap-5 
                lg:py-[80px] lg:px-[140px]   items-center
                md:flex-row">
                <div className="w-full  flex justify-end 
                        sm:flex-col
                     md:basis-[50%] 
                      "
                >
                    <div  >
                        <h3 className="font-agency font-bold uppercase text-[#D4AF37] mb-2 text-center
                            md:text-[22px]">OUR <span className='text-[#438029]'>SERVICES</span>  </h3>
                        <p className="font-agency font-normal lowercase text-black text-left
                            md:text-[20px]">We have conducted many mind power workshops and helped people
                            find and achieve their goal, solve their problems in life and career, discover
                            their passion and work towards it and power to take quick and wise decisions.
                            Thousands of people are benefited and become successful through his mind-power training.</p>
                    </div>
                </div>
                <div className="  
                    md:basis-[50%] ">
                    <div className='flex flex-row gap-[13px] justify-center '>
                        <div className='flex flex-col gap-[13px]  lg:gap-[6px]'>
                            <img src="src/assets/images/smallTranspereantbox.svg" className='w-[64px] h-[64px] self-end basis-0
                            lg: w-[78px] h-[78px]' alt="" />
                            <img src="src/assets/images/goldbox.svg" className='w-[100px] h-[100px] basis-0
                            lg: w-[152px] h-[152px]' alt="" />
                            <img src="src/assets/images/greenBox.svg" className='w-[100px] h-[100px] basis-0
                            lg: w-[152px] h-[152px]' alt="" />
                        </div>
                        <div className='flex flex-col gap-[13px]  lg:gap-[6px]'>
                            <img src="src/assets/images/greenBox.svg" className='w-[100px] h-[100px] basis-0
                            lg: w-[152px] h-[152px]' alt="" />
                            <img src="src/assets/images/goldbox.svg" className='w-[100px] h-[100px] basis-0
                            lg: w-[152px] h-[152px]' alt="" />
                            <img src="src/assets/images/smallTranspereantbox.svg" className='w-[36px] h-[36px] basis-0 self-start' alt="" />
                        </div>
                        <div className='flex flex-col gap-[13px] lg:gap-[6px]'>
                            <img src="src/assets/images/goldbox.svg" className='w-[100px] h-[100px] basis-0
                            lg: w-[152px] h-[152px]' alt="" />
                            <img src="src/assets/images/smallTranspereantbox.svg" className='w-[90px] h-[90px] self-start basis-0
                            lg: w-[118px] h-[118px]' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services