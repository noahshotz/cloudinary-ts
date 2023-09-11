import React from 'react'
import Sidebar from './components/Sidebar';

function Profile() {

  return (
    <React.Fragment>
      <div className="wrapper">
        <Sidebar />
        <div className="content">
          <h1>Profile</h1>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Profile
