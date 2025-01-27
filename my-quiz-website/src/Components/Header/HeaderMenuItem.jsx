import React from 'react';
import { NavLink } from 'react-router-dom';

export const HeaderMenuItem = ({ headerName, navLink }) => {
    return (
        <li>
            <NavLink
                to={navLink}
                className={({ isActive }) =>
                    isActive ? 'text-accent' : 'text-base-content'
                }
            >
                {headerName}
            </NavLink>
        </li>
    );
};