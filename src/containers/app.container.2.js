import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { loadChapters } from '../actions/navigation.action.creators';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Views from '../components/UIIndex';


class AsytarContainer extends Component{

	getCurrentScreen(navigationState) {
	// navigationState can be null when exnav is initializing
	if (!navigationState) {
		return null;
	}
	const { currentNavigatorUID, navigators } = navigationState;
	if (!currentNavigatorUID) {
		return null;
	}

	const { index, routes } = navigators[currentNavigatorUID];
	const { routeName } = routes[index];
	return routeName;
	}
    render() {
		const {navigation} = this.props;
		const key = this.getCurrentScreen(navigation);
		const Module = Views.find(v => v.key === key).module;
		return (
        <View style={styles.container}>
					<View style={styles.content}>
						<Module {...this.props.data}
							{...this.props.dataLoadFunctions}/>
					</View>
        </View>
      );
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		flexDirection : 'column'
  },
  toolbar: {
    height: 56,
	backgroundColor: '#009688',
	alignItems: 'center'
  },
	content: {
		flex: 1
	}
});

const AppContainer = connect(state => ({
	data: {
		chapters: state.chapters,
		sections: state.sections
	},
	navigation: state.navigation
}), (dispatch, ownProps) => ({
	dataLoadFunctions: {
		loadChapters: () => dispatch(loadChapters())
	}
}))(AsytarContainer);
export default AppContainer;
