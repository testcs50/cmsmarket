import React from 'react';

import Sorting from "../components/Sorting";
import CMS from "../components/CMS";
import Pagination from '../components/Pagination';

const Instruments = props => {

    const response = props.data.data.data;

    const cmsList =
        response
        &&
        response.map((cmsInfo, index) => <CMS key={ index } { ...cmsInfo }/>);

    return (
        <div className="main__instruments">
            <Sorting data={ props }/>
            { cmsList }
            <Pagination data={ props } />
        </div>
    );
}

export default Instruments;