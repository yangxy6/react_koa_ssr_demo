import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import * as serviceWorker from './serviceWorker';

import configureStore from './reducer/index';
import { BrowserRouter as Router } from 'react-router-dom';

// const State = Window as any;
// const store = configureStore(State.__INITIAL_STATE__);

console.log(configureStore)

const render = () => {
  ReactDOM.render(
    <Provider store={configureStore}>
        <Router>
          <App />
        </Router>
    </Provider>,
    document.getElementById('root')
  );
};
render();
// serviceWorker.unregister();
