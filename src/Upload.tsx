import React from 'react'
import { useEffect } from 'react'
import Sidebar from './components/Sidebar';
import ImageUpload from './components/ImageUpload'

import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

// define interface for props
interface UploadProps {
  cloudName: string
  uploadPreset: string
}

function Upload({ cloudName, uploadPreset }: UploadProps): JSX.Element {

  const navigate = useNavigate()

  useEffect(() => {
    // Set up a Firebase Authentication state listener
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate('/login')
      }
    })

    // Clean up the listener when the component unmounts
    return () => unsubscribe()
  }, [])

  return (
    <React.Fragment>
      <div className="wrapper">
        <Sidebar />
        <div className="content">
          <h1>Upload image</h1>
          <ImageUpload
            cloudName={cloudName}
            uploadPreset={uploadPreset}
          />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Upload
