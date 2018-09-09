/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Enzyme, { mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  mountWithIntl,
  shallowWithIntl,
  renderWithIntl,
  loadTranslationObject,
} from 'enzyme-react-intl';
import messages, { flattenMessages } from '../i18n';

global.React = React;
global.mount = mount;
global.shallow = shallow;
global.render = render;
global.mountWithIntl = mountWithIntl;
global.shallowWithIntl = shallowWithIntl;
global.renderWithIntl = renderWithIntl;
global.loadTranslationObject = loadTranslationObject;

Enzyme.configure({ adapter: new Adapter() });
loadTranslationObject(flattenMessages(messages.en));
/* eslint-enable */
