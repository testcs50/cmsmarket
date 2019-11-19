import React from 'react';
import { NavLink } from 'react-router-dom';

const UserCabinet = () => (
    <ul className="main__user-room">
        <li className="main__user-item">
            <NavLink
                className="main__user-link"
                activeClassName="main__user-link--active"
                to="/favorites"
            >
                Избранное
            </NavLink>
        </li>
        <li className="main__user-item">
            <NavLink
                className="main__user-link"
                to="/404"
            >
                Поиск
            </NavLink>
        </li>
        <li className="main__user-item">
            <NavLink
                className="main__user-link"
                to="/404"
            >
                Кабинет агентства
            </NavLink>
        </li>
    </ul>
);

export default UserCabinet;