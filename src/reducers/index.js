import { combineReducers } from 'redux';

import instrumentsReducer from './instrumentsReducer';
import favoriteReducer from './favoriteReducer';

export default combineReducers({
    instruments: instrumentsReducer,
    favorites: favoriteReducer
});