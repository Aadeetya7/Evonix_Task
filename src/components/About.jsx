import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../css/common.css"
import Books from "./Books";
import Services from "./Services";
import UpcomingEvents from "./UpcomingEvents";
import ContactUs from "./ContactUs";


const About = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    };

    return (
        <>
            {/* // mt-[60px]  md:mt-[102px] mt */}
            <main >
                <Slider  {...settings} className="about-slider">
                    <section className="relative">
                        <img
                            className="w-full h-auto object-cover relative"
                            src="src/assets/images/kushfirst.png"
                            srcset="src/assets/images/kushfirst.png 600w, src/assets/images/kush2x.png 900w, src/assets/images/kush2x.png 1200w"
                            sizes="(max-width: 600px) 100vw, 100vw"
                            alt="A mountain view"
                        />
                        <div className="absolute top-3/6 left-1/2  -translate-x-1/4 -translate-y-1/2">
                            <h1 className="uppercase  text-white leading-6 font-agency
                 tracking-[0.3px] font-bold text-[23px] mb-2 
                 sm:text-[50px]  sm:leading-[50px] 
                  md:text-[70px] md:leading-[60px]  
                  lg:text-[109px] lg:leading-[90px] ">Global <br /> Business<br /> Coach 1</h1>
                            <p className="uppercase text-[10px] mb-2 leading-3 font-agency font-normal tracking-[0.3px] text-white
                sm:text-[20px]  sm:leading-5  
                 lg:leading-5">Lorem ipsum dolor sit<br /> amet consectetur elit.</p>
                            <button className='cursor-pointer font-agency font-bold px-2  py-0.5 bg-[#438029]   text-white  text-[8px] 
                sm:text-[12px] sm:w-[90px]  
                md:w-[130px] md:p-2 md:py-2 
                lg:w-[150px] lg:text-[20px] lg:p-1.5 uppercase '>Buy Now </button>
                        </div>
                    </section>
                    <section className="relative">
                        <img
                            className="w-full h-auto object-cover relative"
                            src="src/assets/images/kushfirst.png"
                            srcset="src/assets/images/kushfirst.png 600w, src/assets/images/kush2x.png 900w, src/assets/images/kush2x.png 1200w"
                            sizes="(max-width: 600px) 100vw, 100vw"
                            alt="A mountain view"
                        />
                        <div className="absolute top-3/6 left-1/2  -translate-x-1/4 -translate-y-1/2">
                            <h1 className="uppercase  text-white leading-6 font-agency
                 tracking-[0.3px] font-bold text-[23px] mb-2 
                 sm:text-[50px]  sm:leading-[50px] 
                  md:text-[70px] md:leading-[60px]  
                  lg:text-[109px] lg:leading-[90px] ">Global <br /> Business<br /> Coach 2</h1>
                            <p className="uppercase text-[10px] mb-2 leading-3 font-agency font-normal tracking-[0.3px] text-white
                sm:text-[20px]  sm:leading-5  
                 lg:leading-5">Lorem ipsum dolor sit<br /> amet consectetur elit.</p>
                            <button className='cursor-pointer font-agency font-bold px-2  py-0.5 bg-[#438029]   text-white  text-[8px] 
                sm:text-[12px] sm:w-[90px]  
                md:w-[130px] md:p-2 md:py-2 
                lg:w-[150px] lg:text-[20px] lg:p-1.5 uppercase '>Buy Now </button>
                        </div>
                    </section>
                    <section className="relative">
                        <img
                            className="w-full h-auto object-cover relative"
                            src="src/assets/images/kushfirst.png"
                            srcset="src/assets/images/kushfirst.png 600w, src/assets/images/kush2x.png 900w, src/assets/images/kush2x.png 1200w"
                            sizes="(max-width: 600px) 100vw, 100vw"
                            alt="A mountain view"
                        />
                        <div className="absolute top-3/6 left-1/2  -translate-x-1/4 -translate-y-1/2">
                            <h1 className="uppercase  text-white leading-6 font-agency
                 tracking-[0.3px] font-bold text-[23px] mb-2 
                 sm:text-[50px]  sm:leading-[50px] 
                  md:text-[70px] md:leading-[60px]  
                  lg:text-[109px] lg:leading-[90px] ">Global <br /> Business<br /> Coach 3</h1>
                            <p className="uppercase text-[10px] mb-2 leading-3 font-agency font-normal tracking-[0.3px] text-white
                sm:text-[20px]  sm:leading-5  
                 lg:leading-5">Lorem ipsum dolor sit<br /> amet consectetur elit.</p>
                            <button className='cursor-pointer font-agency font-bold px-2  py-0.5 bg-[#438029]   text-white  text-[8px] 
                sm:text-[12px] sm:w-[90px]  
                md:w-[130px] md:p-2 md:py-2 
                lg:w-[150px] lg:text-[20px] lg:p-1.5 uppercase '>Buy Now </button>
                        </div>
                    </section>
                </Slider>
            </main>
            {/* About Section  */}

            <section>
                <div className="flex flex-col p-[30px] 
                sm:flex-row 
                lg:py-[80px] lg:px-[140px]">
                    <div className="w-full p-[15px] flex justify-end 
                    sm:basis-2/3  sm:grow sm:shrink-0 sm:flex-col
                    md:p-[40px]
                    lg:p-[65px] lg:basis-[65%]"
                        style={{ background: "linear-gradient(92deg, #438029 0%, #D4AF37 100%)", }}>
                        <div  >
                            <h2 className="font-agency font-normal uppercase text-white mb-4 text-center
                            sm:text-right
                            md:text-[22px]">About <span className=" font-agency font-bold md:text-[32px]"> KushChaturvedi </span></h2>
                            <p className="font-agency font-normal lowercase text-white mb-4 text-center
                            sm:text-right
                            md:text-[20px]">Lorem ipsum dolor sit amet, consectetur<br /> adipisicing elit. Modi accusamus, repudiandae libero at officia
                                quaerat sit, laudantium<br /> in neque sapiente perspiciatis? Asperiores consequuntur error itaque.</p>
                        </div>
                        <div  >
                            <span className=" font-agency font-bold block mb-4 text-white text-center
                            sm:text-right
                            md:text-[20px]"> KushChaturvedi </span>
                            <p className="font-agency font-normal lowercase text-white mb-4 text-center 
                            sm:text-right
                            md:text-[20px]">Lorem ipsum dolor sit amet, consectetur <br />adipisicing elit. Modi accusamus, repudiandae libero at officia
                                quaerat <br />sit, laudantium in neque sapiente perspiciatis? Asperiores consequuntur error itaque.</p>
                        </div>
                    </div>
                    <div className=" sm:basis-2/6 h-[200px] w-[200px] 
                    lg:basis-[35%]"><img src="" alt="" /></div>
                </div>
            </section>

            {/* The books */}
            <Services />
            <Books />
            <UpcomingEvents />
            <ContactUs />
        </>
    )
}

export default About