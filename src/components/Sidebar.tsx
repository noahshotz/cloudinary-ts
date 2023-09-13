import React from "react";
import Logout from "./Logout";

import { HiPhoto } from "react-icons/hi";
import { AiOutlineCloudUpload as UploadIcon } from "react-icons/ai";
import { AiOutlineUser as UserIcon } from "react-icons/ai";

const Sidebar: React.FC = () => {
    return (
        <React.Fragment>
            <div className="sidebar">
                <div className="logo">
                    <h1>My app</h1>
                </div>
                <div className="navigation">
                    <ul>
                        <li><a href="mymedia"><HiPhoto /> My media</a></li>
                        <li><a href="upload"><UploadIcon /> Upload</a></li>
                        <li><a href="profile"><UserIcon /> User profile</a></li>
                    </ul>
                </div>
                <div className="logout">
                    <Logout />
                </div>
                <img src="https://api.netlify.com/api/v1/badges/4340a9ce-6d53-4341-bbdc-43578b761064/deploy-status"></img>
            </div>
        </React.Fragment>
    )
}

export default Sidebar