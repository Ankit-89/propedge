import { init } from '@rematch/core';
import logger from 'redux-logger';

import * as models from '../Models';
import { loadingPlugin } from '../Plugins';
import { persistPlugin } from '../Persist';

export default init({
  models,
  plugins: [loadingPlugin, persistPlugin],
  redux: {
    middlewares: [logger],
  },
});
