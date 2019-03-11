import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import Store from './store';

ReactDOM.render(<App store={new Store('Hello React!')} />, document.getElementById('app'));
