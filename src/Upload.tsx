import React from 'react'
import Sidebar from './components/Sidebar';
import ImageUpload from './components/ImageUpload'

function Upload() {
  const cloudName = 'dhc0uuvta';
  const uploadPreset = 'devpreset';

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
