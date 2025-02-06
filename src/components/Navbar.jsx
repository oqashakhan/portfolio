import React, { useState } from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
    const [navList] = useState(['Home', 'Skills', 'Projects', 'Contact']);
    const [showNav, SetShowNav] = useState(false)
    const handelNav = () => {
        SetShowNav(!showNav);
      };

    return (

        <header>
            <div className="logo">
                <img src="./logo.png" alt="" />
            </div>
            <nav className={showNav ? "show" : ""}>
                {navList.map((value, key) => (
                    <span key={key}>{value}</span>
                ))}
            </nav>
            <i  onClick={handelNav}>  <FontAwesomeIcon icon={faBars} size="lg" /></i>
        </header>
    )
}

export default Navbar
//