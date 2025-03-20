import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './component/Home.jsx'
import About from './component/About.jsx'
import Contact from './component/Contact.jsx'

import ContactNo1 from './component/ContactNo1.jsx'
import ContactNo2 from './component/ContactNo2.jsx'

const router=createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <Home/>
        
      },{
        path: "about",
        element: <About/>,
        
      },
      {
        path: "contact",
        element: <Contact/>,
        children: [
          {
            path: "/contact/",
            element:<ContactNo1/>,
            

          },{
            path: "/contact/no",
            element:<ContactNo2/>,
          }
        ]
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
