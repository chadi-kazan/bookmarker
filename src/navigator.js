import Drawer from './components/drawer.android';
import { Dimensions } from 'react-native';
import ReactNavigation from 'react-navigation';
import Home from './components/home';
import Settings from './components/settings';
import LoginScreen from './components/settings';
const DRAWER_WIDTH_LEFT = 56;

const { DrawerNavigator, TabNavigator: Tabs } = ReactNavigation;
export const AppNavigator = DrawerNavigator({
	home: {
		screen: Home
	},
	settings: {
		screen: Settings
	},
	login: {
		screen: LoginScreen
	}
}/*,{
	contentOptions: {
		activeBackgroundColor: '#eee',
		activeTintColor: '#009688',
		inactiveBackgroundTintColor: '#fff',
		style: {
			backgroundColor: 'white',
			justifyContent: 'center',
			paddingHorizontal: 15,
			paddingVertical: 8,
			paddingLeft: 31,
			paddingRight: 16
		}
	}
}
*/);
export const TabNavigator = Tabs({
	home: {
		screen: Home
	},
	settings: {
		screen: Settings
	},
	login: {
		screen: LoginScreen
	}
});
