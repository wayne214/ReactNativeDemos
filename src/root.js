/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View
} from 'react-native';
import { Provider } from 'react-redux';
import store from './store/store';
import AppNavigator from './common/navigator';


export default class ReactNativeDemos extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigator/>
            </Provider>
        );
    }
}

AppRegistry.registerComponent('ReactNativeDemos', () => ReactNativeDemos);