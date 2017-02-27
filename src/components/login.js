import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class LoginScreen extends Component {
    static navigationOptions = {
        title: 'Login',
        drawer: () => ({
        label: 'Login',
        icon: ({ tintColor }) => (
            <Icon name="login" size={30} color={tintColor} />
        )
        })
    };
    render(): ReactElement {
        return <View><Text>Login</Text></View>;
    }
}
