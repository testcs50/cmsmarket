import React from 'react';

import Brand from '../components/Brand';
import Navigation from '../components/Navigation';
import UserCabinet from '../components/UserCabinet';

const LeftSide = () => (
    <div className="main__left-side">
        <Brand/>
        <Navigation/>
        <UserCabinet/>
    </div>
);

export default LeftSide;