import { AUTH, LOGOUT } from '../constants/actionTypes';

const authReducer = (state = { user: null }, action) => {
	switch (action.type) {
		case AUTH:
			localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
			return {
				...state,
				user: action?.data,
				loading: false,
				errors: null,
			};

		case LOGOUT:
			localStorage.clear();
			return {
				...state,
				user: null,
				loading: false,
				errors: null,
			};

		default:
			return state;
	}
};

export default authReducer;
