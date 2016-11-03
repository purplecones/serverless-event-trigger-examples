import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import getRootNode from '../../configs/get_root_node';

import MainLayout from './containers/main_layout';
import Home from './components/home.jsx';

export default function (injectDeps) {
  const MainLayoutCtx = injectDeps(MainLayout);
  ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={MainLayoutCtx}>
        <IndexRoute component={Home} />
      </Route>
    </Router>,
    getRootNode('app')
  );
}
