import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import 'normalize.css';

import Setter from 'components/Setter';
// import configureStore from 'store/configureStore';
// import Routing from 'routing/Routing';

import './styles/global-settings';

// const store = configureStore();

ReactDOM.render(<Setter />, document.getElementById('root'));
