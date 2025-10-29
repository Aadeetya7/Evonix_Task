import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <nav>
        <Link to="/">About</Link>
        <Link to="/Books">Books</Link>
        <Link to="/ContactUs">ContactUs</Link>
        <Link to="/Services">Services</Link>
        <Link to="/Testimonial">Testimonial</Link>
        <Link to="/UpcomingEvents">UpcomingEvents</Link>
      </nav>
      <Outlet />
    </>
  )
}

export default App
