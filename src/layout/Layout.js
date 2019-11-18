import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import getInstruments from '../actions/getInstruments';

import LeftSide from '../modules/LeftSide';
import MainSide from '../modules/MainSide';

const Layout = () => {
    const instruments = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInstruments())
    }, [])

    return (
        <main className="main">
            <LeftSide/>
            <MainSide/>
        </main>
    );
};

export default Layout;