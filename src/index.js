import dva from 'dva';
import 'antd/dist/antd.css';
import {initIntl} from './utils/util';
import './index.less';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

//国际化
initIntl('en', () => {
// 5. Start
  app.start('#root');
});

