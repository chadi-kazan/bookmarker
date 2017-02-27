import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Settings extends Component {
    static navigationOptions = {
        title: 'Settings',
        drawer: () => ({
        label: 'Settings',
        icon: ({ tintColor }) => (
            <Icon name="settings" size={30} color={tintColor} />
        )
        })
    };
    render(): ReactElement {
        return <View><Text>Settings</Text></View>;
    }
}
