// import { applyMiddleware, createStore, combineReducers } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import global from './global';
// import rootSaga from './saga';
// // import { connectRouter } from "connected-react-router";
// import { composeWithDevTools } from 'redux-devtools-extension'; //devToolsEnhancer,

// export const rootReducer = combineReducers({
//   global
//   // router:connectRouter(history)
// });

// const sagaMiddleware = createSagaMiddleware();
// const configureStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

// sagaMiddleware.run(rootSaga);

// export default configureStore;

import { combineReducers } from 'redux';
import global from './global';

const configureStore = combineReducers({
  global
});

export default configureStore;
