import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => (
    <ul className="main__navigation">
        <li className="main__navigation-item">
            <NavLink
                className="main__navigation-link"
                to="/404"
            >
                Журнал
            </NavLink>
        </li>
        <li className="main__navigation-item">
            <NavLink
                className="main__navigation-link"
                to="/404"
            >
                Агентства
            </NavLink>
        </li>
        <li className="main__navigation-item">
            <NavLink
                className="main__navigation-link"
                activeClassName="main__navigation-link--active"
                to="/instruments"
            >
                Инструменты
            </NavLink>
        </li>
    </ul>
);

export default Navigation;