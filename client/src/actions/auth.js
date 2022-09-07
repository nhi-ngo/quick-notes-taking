import { AUTH } from '../constants/actionTypes';
// eslint-disable-next-line import/extensions
import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
	try {
		const { data } = await api.signIn(formData);

		dispatch({ type: AUTH, data });

		router.push('/');
	} catch (error) {
		console.log(error);
	}
};

export const signup = (formData, router) => async (dispatch) => {
	try {
		const { data } = await api.signUp(formData);
		const { password, ...others } = data;

		dispatch({ type: AUTH, data: others });

		router.push('/');
	} catch (error) {
		console.log(error);
	}
};
