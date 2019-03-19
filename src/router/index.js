// import { Route, Switch } from 'react-router';

// const Home = props => <Hello complier="typescript" framework="react"/>;

// const routes = (
//   <Switch>
//     <Route exact path='/' component={Home} />
//   </Switch>
// );
// export default routes;

// import Hello from '../pages/Hello';
import React from 'react';
import Home from '../pages/Home';

const Hello = <div>hello</div>;

const router = [{ path: '/', component: Home, exact: true }, { path: '/home', component: Home, exact: true }, { path: '/hello', component: Hello }];

export default router;
