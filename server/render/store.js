import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../../src/reducer/index';
// import { connectRouter } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../../src/reducer/saga';

// import { composeWithDevTools } from 'redux-devtools-extension'; //devToolsEnhancer,

// import createMemoryHistory from 'history/createMemoryHistory';

// let sagaMiddleware = createSagaMiddleware(); //创建saga中间件

const getCreateStore = ctx => {
  const initialState = {};
  // const path = ctx.req.url;
  // const history = createMemoryHistory({ initialEntries: [path] });
  // const middleware = [sagaMiddleware];
  const sagaMiddleware = createSagaMiddleware();
  const composedEnhancers = compose(applyMiddleware(sagaMiddleware));
  const store = createStore(reducer, initialState, composedEnhancers);
  sagaMiddleware.run(rootSaga);
  return { store };
};

export default getCreateStore;
