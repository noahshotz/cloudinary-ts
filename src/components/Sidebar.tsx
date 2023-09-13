import React from "react";
import Logout from "./Logout";

import { HiPhoto } from "react-icons/hi2";
import { AiOutlineCloudUpload as UploadIcon } from "react-icons/ai";
import { AiOutlineUser as UserIcon } from "react-icons/ai";

const Sidebar: React.FC = () => {
    return (
        <React.Fragment>
            <div className="sidebar">
                <div className="top-section">
                    <div className="logo">
                        <h1>ImageHub</h1>
                    </div>
                    <div className="navigation">
                        <ul>
                            <li><a href="mymedia"><HiPhoto /> Photos</a></li>
                            <li><a href="upload"><UploadIcon /> Upload</a></li>
                            <li><a href="profile"><UserIcon /> Profile</a></li>
                        </ul>
                    </div>
                </div>
                <div className="bottom-section">
                    <img src="https://api.netlify.com/api/v1/badges/4340a9ce-6d53-4341-bbdc-43578b761064/deploy-status"></img>
                    <div className="logout">
                        <Logout />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Sidebar