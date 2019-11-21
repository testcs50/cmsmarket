import React from 'react';

import Brand from '../components/Brand';
import Navigation from '../components/Navigation';
import UserCabinet from '../components/UserCabinet';
import HorizontalRule from '../components/HorizontalRule';

const LeftSide = props => (
    <div className="main__left-side">
        <Brand/>
        <HorizontalRule/>
        <Navigation/>
        <HorizontalRule/>
        <UserCabinet data={ props.data }/>
    </div>
);

export default LeftSide;