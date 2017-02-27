import React, { Component, PropTypes } from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, Text } from 'react-native';
import { changeTab } from '../actions/app.action.creators';

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    tabs: {
      flexDirection: 'row',
      height: 40,
      width: deviceWidth,
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderBottomColor: '#e3e3e3'
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderLeftColor: '#e3e3e3'
    },
    tabtext: {
        textAlign: 'center',
        fontWeight: '300',
        fontSize: 11,
        color: '#adadad',
    }
});
export default class Tabs extends Component{
    onPress(tab) {
        this.props.onNavigate(tab);
    }
    render(): View {
        const { pathParts } = this.props;
      return <View style={styles.tabs}>
        {(() => {
            return pathParts.map((t,idx) => {
                return <TouchableOpacity key={idx} style={[styles.tab, {
                'borderLeftWidth': idx === 0 ? 0 : 1,
                'borderBottomWidth': pathParts.length - 1 === idx ? 2 : 1,
                'borderBottomColor': this.props.activeTab ? '#a6d2a5' : '#e3e3e3'
              }]} onPress={this.onPress.bind(this, t)}>
                <Text style={styles.tabtext}>{t.toUpperCase()}</Text>
                </TouchableOpacity>;
            });
        })()}
        </View>;
    }
}

Tabs.propTypes = {
    pathParts: PropTypes.arrayOf(PropTypes.string).isRequired
};

Tabs.defaultProps = {
    pathParts: []
};


