import React from 'react';
import {HashRouter} from 'react-router-dom';

import LeftSide from '../modules/LeftSide';
import MainSide from '../modules/MainSide';

const Layout = () => (
    <HashRouter>
        <main className="main">
            <LeftSide/>
            <MainSide/>
        </main>
    </HashRouter>
);

export default Layout;