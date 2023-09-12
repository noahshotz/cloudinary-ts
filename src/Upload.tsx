import React from 'react'
import Sidebar from './components/Sidebar';
import ImageUpload from './components/ImageUpload'

// define interface for props
interface UploadProps {
  cloudName: string
  uploadPreset: string
}

function Upload({cloudName, uploadPreset}: UploadProps): JSX.Element {

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
