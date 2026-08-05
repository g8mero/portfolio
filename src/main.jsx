import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home.jsx'
import Code from './Code.jsx'
import Communication from './Communication.jsx'
import Conservation from './Conservation.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/code",
    element: <Code/>,
  },
  {
    path: "/communication",
    element: <Communication/>,
  },
  {
    path: "/conservation",
    element: <Conservation/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
