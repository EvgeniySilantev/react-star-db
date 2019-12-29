import React from "react";
import './app-header.css';

const AppHeader = () => {
    const items=[
        {
            link:'#',
            label:'People'
        },
        {
            link:'#',
            label:'Planets'
        },
        {
            link:'#',
            label:'Starships'
        }
    ];
    return (
        <div className='header d-flex'>
            <h3>
                <a href="#">Star DB</a>
            </h3>
            <ul className='d-flex'>
                {items.map(item=>{
                    return (<li>
                        <a href={item.link}>{item.label}</a>
                    </li>)
                })}
            </ul>
        </div>
    );
}

export default AppHeader
