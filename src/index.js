import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/theme/solarized.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
