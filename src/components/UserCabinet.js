import React from 'react';
import {Link} from 'react-router-dom';

const UserCabinet = () => (
    <ul className="main__user-cabinet">
        <li><Link to="/favorites">Избранное</Link></li>
        <li><Link to="/404">Поиск</Link></li>
        <li><Link to="/404">Кабинет агентства</Link></li>
    </ul>
);

export default UserCabinet;