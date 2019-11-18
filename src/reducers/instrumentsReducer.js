const initialStore = {
    data: {},
    fetching: false,
    fetched: false,
    error: null
};

export default function (state=initialStore, action) {
    switch (action.type) {
        case 'FETCH_INSTRUMENTS_PENDING': {
            return {
                ...state,
                fetching: true
            }
        }
        case 'FETCH_INSTRUMENTS_REJECTED': {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        }
        case 'FETCH_INSTRUMENTS_FULFILLED': {
            return {
                ...state,
                fetching: false,
                fetched: true,
                data: action.payload
            }
        }
    }
    return state;
}