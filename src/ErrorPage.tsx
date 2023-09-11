import React from 'react'
import Sidebar from './components/Sidebar';

import { useRouteError } from "react-router-dom";

function App() {

    const error = useRouteError();
    console.error(error);  

    return (
        <React.Fragment>
            <div className="wrapper">
                <Sidebar />
                <div className="content">
                    <h1>Error ._.</h1>
                    <h2>Nothing so see here</h2>
                </div>
            </div>
        </React.Fragment>
    )
}

export default App
