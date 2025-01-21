import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const HeaderMenuItem = ({ headerName, navLink }) => {
    const location = useLocation();

    return (
        <li className="border-black border-2"> 
            <Link
                to={navLink}
                className={`headeranchor ${location.pathname === navLink ? "active" : ""}` }
            >
                {headerName}
            </Link>
        </li>
    );
};