import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from "./components/About.jsx"
import Books from "./components/Books.jsx"
import ContactUs from "./components/ContactUs.jsx"
import Services from "./components/Services.jsx"
import Testimonial from "./components/Testimonial.jsx"
import UpcomingEvents from "./components/UpcomingEvents.jsx"



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <About /> },
      { path: "Books", element: <Books /> },
      { path: "ContactUs", element: <ContactUs /> },
      { path: "Services", element: <Services /> },
      { path: "Testimonial", element: <Testimonial /> },
      { path: "UpcomingEvents", element: <UpcomingEvents /> },
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
