import React from 'react';
import {Link} from 'react-router-dom';
import NavbarLeft from './NavbarLeft'


const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand">Vk App</a>
                <div className="collapse navbar-collapse" id="navbarText">
                     <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Домой</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/friends">Друзья</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/photos">Фото</Link>
                        </li>
                        </ul>
                    <span className="navbar-text ml-auto">
                       <NavbarLeft/>
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar