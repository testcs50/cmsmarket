import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Instruments from '../pages/Instruments';
import Favorites from '../pages/Favorites';
import NotFound from '../pages/NotFound';

const MainSide = props => {

    return (
        <div className="main__main-side">
            <Switch>
                <Redirect exact from="/" to="/instruments" />
                <Route
                    path="/instruments"
                    render={() => <Instruments data={ props.data.instruments }/>}
                />
                <Route
                    path="/favorites"
                    render={() => <Favorites data={ props.data.favorites }/>}
                />
                <Route path="/404">{ NotFound }</Route>
            </Switch>
        </div>
    );
}

export default MainSide;