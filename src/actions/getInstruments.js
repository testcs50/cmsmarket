import axios from 'axios';

export default function (page=1) {

    const path = `https://api.cmsmagazine.ru/v1/instrumentsList?instrument_type_code=cms&page=${page}`;

    return {
        type: 'FETCH_INSTRUMENTS',
        payload: axios.get(path)
    }
};