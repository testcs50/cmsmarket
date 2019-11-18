import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import reducer from './reducers/instrumentsReducer';

const middleware = applyMiddleware(promise, logger);

export default createStore(reducer, middleware);