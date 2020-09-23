import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import {ConfigProvider} from 'antd';
import enGB from 'antd/es/locale/en_GB';
import IndexPage from './routes/indexPage';

function RouterConfig({ history }) {
  return (
    <ConfigProvider local={enGB}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={IndexPage} />
        </Switch>
      </Router>
    </ConfigProvider>
  );
}

export default RouterConfig;
