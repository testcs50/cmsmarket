import React from 'react';
import { NavLink } from 'react-router-dom';

const UserCabinet = props => (
    <ul className="main__user-room">
        <li className="main__user-item">
            <NavLink
                className="main__user-link"
                activeClassName="main__user-link--active"
                to="/favorites"
            >
                Избранное
            </NavLink>
            {
                (props.data.length > 0) && <div className="main__user-notification">{props.data.length}</div>
            }
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