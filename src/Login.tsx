import React from 'react'
import Sidebar from './components/Sidebar';

function Login() {

  return (
    <React.Fragment>
      <div className="wrapper">
        <Sidebar />
        <div className="content">
          <h1>Login</h1>
          <h2>Das wird die Login seite</h2>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Login
