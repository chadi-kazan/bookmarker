import * as types from './actions';

function buildPayLoad(payload: any): any {
	return typeof payload === 'string' ? { key: payload, title: payload } : payload;
}
export function navigatePush(state) {
	return {
		type: types.NAV_PUSH,
		state: buildPayLoad(state)
	};
}

export function navigatePop() {
	return {
		type: types.NAV_POP
	}
}

export function navigateJumpToKey(key) {
	return {
		type: types.NAV_JUMP_TO_KEY,
		key
	}
}

export function navigateJumpToIndex(index) {
	return {
		type: types.NAV_JUMP_TO_INDEX,
		index
	}
}

export function navigateReset(children, index) {
	return {
		type: types.NAV_RESET,
		index,
		children
	}
}
