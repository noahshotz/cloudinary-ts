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

// access environment variables from netlify
const cloudName = import.meta.env.VITE_CLOUD_NAME;
const apiKey = import.meta.env.VITE_API_KEY;
const apiSecret = import.meta.env.VITE_API_SECRET;
const uploadPreset = import.meta.env.VITE_UPLOAD_PRESET;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/mymedia",
    element:
      <MyMedia
        cloudName={cloudName}
        apiKey={apiKey}
        apiSecret={apiSecret}
      />,
  },
  {
    path: "/upload",
    element:
      <Upload
        cloudName={cloudName}
        uploadPreset={uploadPreset}
      />,
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
