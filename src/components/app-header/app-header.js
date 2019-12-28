import React from "react";
import './app-header.css';

const AppHeader = () => {
    return (
        <div className='header d-flex'>
            <h1>Star DB</h1>
            <ul className='nav'>
                <li className='nav-item'>People</li>
                <li className='nav-item'>Planets</li>
                <li className='nav-item'>Starships</li>
            </ul>
        </div>
    );
}

export default AppHeader
