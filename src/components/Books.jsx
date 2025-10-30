import React, { useState } from 'react'

const Books = () => {
    const [book, setBook] = useState(1)

    const handleBookChnage = (value) => {
        setBook(value)
    }

    return (
        <section  >
            <div className="p-[30px] gap-5  bg-[#0000000D]
                lg:py-[80px] lg:px-[140px]   ">
                <div className='flex gap-2 items-center flex-wrap items-center justify-center'>
                    <button className={`px-10 py-3 rounded-[10px] text-white font-agency font-normal ${book === 1 ? "bg-[#D4AF37]" : "bg-[#438029] "} bg-[#438029]  cursor-pointer`} onClick={() => handleBookChnage(1)}>BOOK-01</button>
                    <button className={`px-10 py-3 rounded-[10px] text-white font-agency font-normal ${book === 2 ? "bg-[#D4AF37]" : "bg-[#438029] "} bg-[#438029]  cursor-pointer`} onClick={() => handleBookChnage(2)}>BOOK-02</button>
                    <button className={`px-10 py-3 rounded-[10px] text-white font-agency font-normal ${book === 3 ? "bg-[#D4AF37]" : "bg-[#438029] "} bg-[#438029]  cursor-pointer`} onClick={() => handleBookChnage(3)}>BOOK-03</button>
                    <button className={`px-10 py-3 rounded-[10px] text-white font-agency font-normal ${book === 4 ? "bg-[#D4AF37]" : "bg-[#438029] "} bg-[#438029]  cursor-pointer`} onClick={() => handleBookChnage(4)}>BOOK-04</button>
                </div>
                <div className="flex flex-col  pt-5 gap-5 
                    items-center
                md:flex-row">
                    <div className="  
                    md:basis-[50%] ">
                        <div className='flex flex-row gap-[13px] justify-start '>
                            <img src="src/assets/images/top-view-pile-books.png" className='w-[300px] xl:w-[526px]' alt="" />
                        </div>
                    </div>
                    <div className="w-full  flex justify-end 
                        sm:flex-col
                     md:basis-[50%] 
                      "
                    >{book === 1 &&
                        <div  >
                            <h3 className="font-agency font-bold uppercase text-[#438029] mb-2 text-center
                            md:text-[22px]">BOOK-01  </h3>
                            <p className="font-agency font-normal lowercase text-black text-left
                            md:text-[20px]">We have conducted many mind power workshops and helped people
                                find and achieve their goal, solve their problems in life and career, discover
                                their passion and work towards it and power to take quick and wise decisions.
                                Thousands of people are benefited and become successful through his mind-power training.</p>
                            <button className=' mx-auto block cursor-pointer uppercase mt-[24px] font-agency font-bold px-2 bg-[#D4AF37]   text-white  text-[14px]     w-[130px] p-2 py-2  
                        md:text-[20px] md:[display:unset]   '>Buy Now </button>
                        </div>
                        }
                        {book === 2 &&
                            <div  >
                                <h3 className="font-agency font-bold uppercase text-[#438029] mb-2 text-center
                            md:text-[22px]">BOOK-02  </h3>
                                <p className="font-agency font-normal lowercase text-black text-left
                            md:text-[20px]">We have conducted many mind power workshops and helped people
                                    find and achieve their goal, solve their problems in life and career, discover
                                    their passion and work towards it and power to take quick and wise decisions.
                                    Thousands of people are benefited and become successful through his mind-power training.</p>
                                <button className=' mx-auto block cursor-pointer uppercase mt-[24px] font-agency font-bold px-2 bg-[#D4AF37]   text-white  text-[14px]     w-[130px] p-2 py-2  
                        md:text-[20px] md:[display:unset]   '>Buy Now </button>
                            </div>
                        }
                        {book === 3 &&
                            <div  >
                                <h3 className="font-agency font-bold uppercase text-[#438029] mb-2 text-center
                            md:text-[22px]">BOOK-03  </h3>
                                <p className="font-agency font-normal lowercase text-black text-left
                            md:text-[20px]">We have conducted many mind power workshops and helped people
                                    find and achieve their goal, solve their problems in life and career, discover
                                    their passion and work towards it and power to take quick and wise decisions.
                                    Thousands of people are benefited and become successful through his mind-power training.</p>
                                <button className=' mx-auto block cursor-pointer uppercase mt-[24px] font-agency font-bold px-2 bg-[#D4AF37]   text-white  text-[14px]     w-[130px] p-2 py-2  
                        md:text-[20px] md:[display:unset]   '>Buy Now </button>
                            </div>
                        }
                        {book === 4 &&
                            <div  >
                                <h3 className="font-agency font-bold uppercase text-[#438029] mb-2 text-center
                            md:text-[22px]">BOOK-04  </h3>
                                <p className="font-agency font-normal lowercase text-black text-left
                            md:text-[20px]">We have conducted many mind power workshops and helped people
                                    find and achieve their goal, solve their problems in life and career, discover
                                    their passion and work towards it and power to take quick and wise decisions.
                                    Thousands of people are benefited and become successful through his mind-power training.</p>
                                <button className=' mx-auto block cursor-pointer uppercase mt-[24px] font-agency font-bold px-2 bg-[#D4AF37]   text-white  text-[14px]     w-[130px] p-2 py-2  
                        md:text-[20px] md:[display:unset]   '>Buy Now </button>
                            </div>
                        }

                    </div>

                </div>
            </div>
        </section >
    )
}

export default Books