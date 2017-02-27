import {
  NavigationActions
} from 'react-navigation';
import AppNavigator from '../navigator';

const INITIAL_STATE = {
	index: 1,
    routes: [
        { key: 'InitA', routeName: 'home' },
        { key: 'InitB', routeName: 'settings' },
        { key: 'InitC', routeName: 'login' }
    ]
};

export default function navigation(state = INITIAL_STATE, action) {
    switch (action.type) {
            case 'login':
                return AppNavigator.router.getStateForAction(NavigationActions.back(), state);
            case 'home':
            case 'settings':
            case 'logout':
                return AppNavigator.router.getStateForAction(action, state);
        }
    return state;
}
