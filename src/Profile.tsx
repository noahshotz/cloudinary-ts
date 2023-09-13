import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import { auth } from '../firebase';

function Profile() {
  const [userMailAddress, setUserMailAddress] = useState<string | null>(null);

  useEffect(() => {
    // Set up a Firebase Authentication state listener
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // If a user is signed in, set the user's email address
        setUserMailAddress(user.email);
      } else {
        // If no user is signed in, you can handle this case as needed
        console.log('No user is signed in');
        // For example, you can navigate the user to the login page:
        // navigate('/login');
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
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
