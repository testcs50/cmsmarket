import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Instruments from '../pages/Instruments';
import Favorites from '../pages/Favorites';
import NotFound from '../pages/NotFound';

const MainSide = () => (
    <div className="main__main-side">
        <Switch>
            <Route exact path="/" component={Instruments}/>
            <Route path="/instruments">{Instruments}</Route>
            <Route path="/favorites">{Favorites}</Route>
            <Route path="/404">{NotFound}</Route>
        </Switch>
    </div>
);

export default MainSide;