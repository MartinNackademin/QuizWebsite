import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export const HeaderMenuItem = ({headerName, ToggleNavbar,navLink}) => {
    
    const location = useLocation();


    return(
        <li onClick={ToggleNavbar}>
            <Link
            to={navLink}
            className={`headeranchor ${location.pathname === navLink ? "active" : ""}`}
             >
             {headerName}
             </Link>
        </li>
    )  

}