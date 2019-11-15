import React from 'react';

import Instruments from '../pages/Instruments';
import Favorites from '../pages/Favorites';

const MainSide = () => (
    <div className="main__main-side">
        <Instruments/>
        <Favorites/>
    </div>
);

export default MainSide;