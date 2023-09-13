import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const Logout: React.FC = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/login");
            console.log("Signed out successfully")
        }).catch((error: any) => {
            console.log("log out not successful: ", error)
        });
    }

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    )
}

export default Logout
