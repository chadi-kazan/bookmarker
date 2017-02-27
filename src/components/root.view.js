import React, {Component, PropTypes} from 'react';
import NavigationExperimental from 'react-native';
import Home from './home';
import Sections from './sections';
import Settings from './settings';


const {
  CardStack: NavigationCardStack,
  Header: NavigationHeader,
} = NavigationExperimental

export default class RootView extends Component {
    _renderScene = (props: any) => {
        switch (props.scene.route.key) {
        case 'sections':
            return <Sections />;
        case 'settings':
            return <Settings />;
        case 'home':
        default:
            return <Home />;
        }
    }
    render() {
        return <NavigationCardStack navigationState={this.props.navigation} renderScene={this._renderScene.bind(this)} />;
    }
}
RootView.propTypes = {
    navigation: PropTypes.object
};

