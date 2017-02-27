import React, { Component} from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Tabs from './tabs.android';
import { loadChapters } from '../actions/navigation.action.creators';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ScreenHeader from './screen.header';
import Styles from '../styles/common';

class Home extends Component {
    static navigationOptions = {
        title: ({ state }) => 'Tariff search',
        drawer: () => ({
        label: 'Tariff Search',
        icon: ({ tintColor }) => (
            <Icon name="home" size={45} color={tintColor} />
        )
        })
    };
    componentDidMount() {

    }
    render(): ReactElement {
    return <View style={Styles.container}>
					<ScreenHeader navigation={this.props.navigation} banner={'Tariff Search'} />
					<View style={Styles.content}>
						<Text>Home</Text>
					</View>
        </View>;
    }
}

// const HomeScreen = connect(state => ({
// 	chapters: state.chapters,
// 	sections: state.sections
// }), (dispatch, ownProps) => ({
// 	loadChapters: () => dispatch(loadChapters())
// }))(Home);
export default Home;





