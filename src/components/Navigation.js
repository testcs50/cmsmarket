import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => (
    <ul className="main__navigation">
        <li><Link to="/404">Журнал</Link></li>
        <li><Link to="/404">Агентства</Link></li>
        <li><Link to="/instruments">Инструменты</Link></li>
    </ul>
);

export default Navigation;