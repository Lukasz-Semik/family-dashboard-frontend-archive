import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import 'normalize.css';

import messages, { flattenMessages } from 'i18n';
import configureStore from 'store/configureStore';
import Routing from 'routing/Routing';

import GlobalStyles from './styles/global-settings';
// import './styles/global-settings';

const store = configureStore();

addLocaleData([...en]);
const defaultLocale = 'en';

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale={defaultLocale} messages={flattenMessages(messages[defaultLocale])}>
      <Fragment>
        <GlobalStyles />
        <Routing />
      </Fragment>
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
);
