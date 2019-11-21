import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconStar, IconSearch, IconCabinet } from './svgIcons';

const UserCabinet = props => (
    <ul className="main__user-room">
        <li className="main__user-item">
            <NavLink
                className="main__user-link"
                activeClassName="main__user-link--active"
                to="/favorites"
            >
                <IconStar />
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
                <IconSearch />
                Поиск
            </NavLink>
        </li>
        <li className="main__user-item">
            <NavLink
                className="main__user-link"
                to="/404"
            >
                <IconCabinet />
                Кабинет агентства
            </NavLink>
        </li>
    </ul>
);

export default UserCabinet;