import { INCREMENT } from '../action-types';

export default (state = 0, action) => {
	switch (action.type) {
		case INCREMENT:
			return state + 1;
		default:
			return state;
	}
};