import React from 'react';
import { Route, Link } from 'react-router-dom';
import router from './router/index';
import imageSrc from './assets/img/joy.png';

const configRoute = router => {
  return (
    <div>
      {router.map((route, index) => (
        <Route key={index + 'route-render'} path={route.path} exact={route.exact ? route.exact : false} component={()=>route.component} />
      ))}
    </div>
  );
};

const BasicExample = () => (
  <div className='app-container'>
    <img src={imageSrc} alt='图片丢失啦' />
    <div>
      <ul>
        <li>
          <Link to='/home'>Home</Link>
        </li>
        <li>
          <Link to='/hello'>hello</Link>
        </li>
      </ul>
      <hr />
      {configRoute(router)}
    </div>
  </div>
);
export default BasicExample;
