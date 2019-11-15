import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-lodder';
import promise from 'redux-promise-middleware';

//import reducer from './reducers';

const middleware = applyMiddleware(promise(), logger());

// export default createStore(reducer, middleware);