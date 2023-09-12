import React from 'react'
import Sidebar from '../components/Sidebar';

function Root() {

    return (
        <React.Fragment>
            <div className="wrapper">
                <Sidebar />
                <div className="content">
                    <h1>This is the root</h1>
                    <h2>Use the nav on the left while this page is under constructionr</h2>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Root
