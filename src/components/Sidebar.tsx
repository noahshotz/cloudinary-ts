import React from "react";

const Sidebar: React.FC = () => {
    return (
        <React.Fragment>
            <div className="sidebar">
                <div className="logo">
                    <h1>My app</h1>
                </div>
                <div className="navigation">
                    <ul>
                        <li><a href="mymedia">My media</a></li>
                        <li><a href="upload">Upload</a></li>
                        <li><a href="profile">User profile</a></li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Sidebar