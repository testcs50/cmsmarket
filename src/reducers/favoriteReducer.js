const initialStore = [];

export default function(state=initialStore, action) {
    switch (action.type) {
        case 'ADD_INSTRUMENT':
            return [...state, action.payload];
    
        case 'DELETE_INSTRUMENT':
            return [...state.filter((obj) => obj.id !== action.payload)]
    }
    return state
}