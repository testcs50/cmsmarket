import axios from 'axios';

export default function () {
    return {
        type: 'FETCH_INSTRUMENTS',
        payload: axios.get('https://api.cmsmagazine.ru/v1/instrumentsList?instrument_type_code=cms&page=1')
    }
};