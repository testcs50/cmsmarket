import React from 'react';

import Brand from '../components/Brand';
import Navigation from '../components/Navigation';
import UserCabinet from '../components/UserCabinet';
import HorizontalRule from '../components/HorizontalRule';

const LeftSide = () => (
    <div className="main__left-side">
        <Brand/>
        <HorizontalRule/>
        <Navigation/>
        <HorizontalRule/>
        <UserCabinet/>
    </div>
);

export default LeftSide;