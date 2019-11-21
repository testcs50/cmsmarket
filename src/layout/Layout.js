import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import getInstruments from '../actions/getInstruments';

import LeftSide from '../modules/LeftSide';
import MainSide from '../modules/MainSide';

const Layout = () => {
    const instruments = useSelector(state => state, shallowEqual);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInstruments())
    }, []);

    return (
        <main className="main">
            <LeftSide data={ instruments.favorites }/>
            <MainSide data={ instruments } />
        </main>
    );
};

export default Layout;