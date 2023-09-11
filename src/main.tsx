import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

// import default root apge
import Root from "./routes/Root";
// import error page
import ErrorPage from "./ErrorPage"

// import pages from sidebar links
import MyMedia from "./MyMedia"
import Upload from "./Upload"
import Profile from "./Profile"

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/mymedia",
    element: <MyMedia />,
  },
  {
    path: "/upload",
    element: <Upload />,
  },
  {
    path: "/profile",
    element: <Profile />,
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
