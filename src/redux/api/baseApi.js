import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {logOut, setUser} from '../features/auth/authSlice';
import {toast} from 'sonner';

const baseQuery = fetchBaseQuery({
	baseUrl: 'http://localhost:5000/api',
	prepareHeaders: (headers, {getState}) => {
		const token = getState().auth.token;
		if (token) {
			headers.set('authorization', `Bearer ${token}`);
		}

		return headers;
	},
});

const customBaseQueryWithRefressToken = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions);

	if (result?.error?.status === 404) {
		const message = result?.error?.data?.message;
		toast.error(message);
	}
	if (result?.error?.status === 401) {
		const res = await fetch('https://devrabbani-backend.vercel.app/api/auth/refresh-token', {
			method: 'POST',
			credentials: 'include',
		});

		const data = await res.json();
		if (data?.data?.accessToken) {
			const user = api.getState().auth.user;

			api.dispatch(setUser({user, token: data?.data?.accessToken}));
		} else {
			api.dispatch(logOut());
		}
		result = await baseQuery(args, api, extraOptions);

		return result;
	}
	return result;
};

export const baseApi = createApi({
	reducerPath: 'baseApi',
	baseQuery: customBaseQueryWithRefressToken,
	tagTypes: ['Projects,Technologies'],
	endpoints: () => ({}),
});
