import { connect } from 'react-redux';
import {AppNavigator, TabNavigator} from '../navigator';
import { addNavigationHelpers } from 'react-navigation';
import React, { Component } from 'react';

@connect(state => ({nav: state.navigation, navigation: state.navigation, data: state.data}))
export default class AppContainer extends Component {
	render(): ReactElement {
		const { dispatch, nav } = this.props;
		const navigation = addNavigationHelpers({dispatch, state: nav});
		return <TabNavigator navigation={navigation} />;
	}
}
/* equivalent to
const mapStateToProps = state => ({nav: state});
export default connect(mapStateToProps)(AppContainer);
*/
