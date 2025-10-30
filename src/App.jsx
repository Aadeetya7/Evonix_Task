import { Link, Outlet } from 'react-router-dom'
import './App.css'

import { HiMenu } from 'react-icons/hi'
import { useState } from 'react'

function App() {
  const [open, setOpen] = useState(false)

  const handleHambuger = () => {
    setOpen(!open)
    console.log(open);

  }
  return (
    <>
      <nav className=' flex  w-full container-fluid  justify-between p-[17px]'>
        <Link to="/"><img className='h-10 object-contain  cursor-pointer md:h-14 md:w-[130px] lg:w-auto' src="src/assets/icons/navImage.svg" alt="Kush Chatruvedi Global Business Coach Logo" /></Link>

        {/* Navigation Links (hidden on mobile) */}
        <div className={` absolute   left-0 w-full flex-col items-center top-[60px]  md:top-[102px] bg-white ${open ? "flex" : "hidden"} md:static md:flex-row md:justify-center md:w-auto md:flex `}>
          <div className='relative group'>
            <Link className='flex justify-center font-agency font-normal w-full uppercase text-[16px] md:text-[20px] text-[#000000] lg:px-2 md:px-1' to="/">About</Link>
            <div className='absolute left-[30px] hidden group-hover:block bg-white shadow-lg w-40 z-20 '>
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Our Mission</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Our Mission</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Our Mission</li>
              </ul>
            </div>
          </div>

          <Link className='nav-link' to="/Books">Books</Link>
          <Link className='nav-link' to="/ContactUs">ContactUs</Link>
          <Link className='nav-link' to="/Services">Services</Link>
          <Link className='nav-link' to="/Testimonial">Testimonial</Link>
          <Link className='nav-link' to="/UpcomingEvents">UpcomingEvents</Link>
          <button className='cursor-pointer font-agency font-bold p-1.5   w-[100px] text-[#ffffff] shrink-0 text-[18px]  md:w-[130px] md:p-2 md:py-2 lg:w-[150px] lg:text-[20px] '
            style={{ background: "linear-gradient(92deg, #D4AF37 0%, #438029 100%)", }}>Contact Us</button>
        </div>

        {/* Hamburger Menu Button (visible on mobile) */}
        <button className='md:hidden cursor-pointer ' onClick={handleHambuger}><HiMenu /></button>
      </nav>
      <Outlet />
    </>
  )
}

export default App
