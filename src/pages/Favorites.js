import React from 'react';

import CMS from "../components/CMS";

const Favorites = props => {

    const response = props.data;

    const cmsList =
        (response.length > 0)
        &&
        response.map((cmsInfo, index) => <CMS key={ index } isFromFavorite { ...cmsInfo }/>);

    return (
        <div className="main__favorites">
            <h1 className="main__text-header">Выбранные Компании:</h1>
            { cmsList }
        </div>
    )
}

export default Favorites;