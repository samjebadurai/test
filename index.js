/** @format */
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './app/components/App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';

import configureStore from './app/redux/store';

const store = configureStore()

// const RNRedux = () => (
//     <Provider store = { store }>
//       <App />
//     </Provider>
//   )

export default class ReactNavApp extends Component {
    render() {
        console.disableYellowBox = true;
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

AppRegistry.registerComponent('ReactNavApp', () => ReactNavApp);
