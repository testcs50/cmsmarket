import axios from 'axios';

export default function(page, sortType, sortDesc) {

    const sortDirection = sortDesc ? 'desc' : 'asc';
    const path = `https://api.cmsmagazine.ru/v1/instrumentsList?instrument_type_code=cms&page=${page}&sort=${sortType}&sort_direction=${sortDirection}`;

    return {
        type: 'SORT_INSTRUMENTS',
        payload: axios.get(path)
    }
}