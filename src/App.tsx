import React from 'react'
import ImageUpload from './components/ImageUpload'

function App() {


  const cloudName = 'dhc0uuvta';
  const uploadPreset = 'devpreset';

  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="sidebar">
          <div className="logo">
            <h1>My app</h1>
          </div>
          <div className="navigation">
            <ul>
              <li><a href="#mymedia">My media</a></li>
              <li><a href="#upload">Upload</a></li>
            </ul>
          </div>
        </div>
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

export default App
