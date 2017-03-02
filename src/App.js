import React, { Component } from 'react';
import Store from './store';
import { Provider } from 'react-redux';
import AppContainer from './containers/app.container';
import { AsyncStorage } from 'react-native';
import {
  persistStore
} from 'redux-persist';

export default class App extends Component{
    store = Store;
    componentDidMount() {
        persistStore(this.store, { storage: AsyncStorage, blackList: ['nav'] });
    }
    render() {
        return <Provider store={Store}>
                 <AppContainer />
                </Provider>;
    }
}
