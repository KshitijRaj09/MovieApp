import React from 'react';
import './Header.css';

export default function Header() {
    return (
        <div className="main-header-div">
            <div className="header-inner-div">
                <h1 style={{fontSize:'1.5rem'}}>Movie-App-React</h1>
                <div className="favourite"><div style={{marginRight:'10px', fontSize:'1.1rem'}}>Favourite</div>
                <i className="fas fa-heart fa-2x" style={{color:'red'}}></i>
                </div>
            </div>
            
        </div>
    )
}
