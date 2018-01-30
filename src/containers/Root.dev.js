import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import DevTools from './DevTools'
import App from '../components/App';

const Root = ({store}) => (
  <Provider store={store}>
    <App>
      <DevTools/>
    </App>

  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};
export default Root
