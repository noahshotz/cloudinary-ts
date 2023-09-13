import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import { auth } from '../firebase'; // Import the auth object directly
import { useNavigate } from 'react-router-dom';

function Profile() {

  const navigate = useNavigate();

  const [userMailAddress, setUserMailAddress] = useState<string | null>('');

  useEffect(() => {
    // Check if the user is authenticated
    if (auth.currentUser) {
      // If the user is authenticated, set the user's email address
      setUserMailAddress(auth.currentUser.email);
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <React.Fragment>
      <div className="wrapper">
        <Sidebar />
        <div className="content">
          <h1>Profile</h1>
          {userMailAddress && <h2>Hello {userMailAddress}</h2>}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Profile;
