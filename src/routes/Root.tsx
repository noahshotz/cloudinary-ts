import React from 'react'
import Sidebar from '../components/Sidebar';

function Root() {

    return (
        <React.Fragment>
            <div className="wrapper">
                <Sidebar />
                <div className="content">
                    <h1>This is the root</h1>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Root
