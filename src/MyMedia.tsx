import React from 'react'
import Sidebar from './components/Sidebar';

function MyMedia() {

  return (
    <React.Fragment>
      <div className="wrapper">
        <Sidebar />
        <div className="content">
          <h1>My media</h1>
        </div>
      </div>
    </React.Fragment>
  )
}

export default MyMedia
