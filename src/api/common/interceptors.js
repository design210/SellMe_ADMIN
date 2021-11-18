import router from '@/router/index';
import { getAccessTokenCookie } from '@/utils/cookie';
import { deleteCookie } from '@/utils/cookie';

export function setInterceprors(instance, data, type) {
	const accessCookie = getAccessTokenCookie();
	instance.interceptors.request.use(
		function (config) {
			config.headers['Content-Type'] = type;
			config.headers['Authorization'] = 'Bearer ' + accessCookie;
			config.data = data;
			return config;
		},
		function (error) {
			return Promise.reject(error);
		},
	);

	instance.interceptors.response.use(
		function (response) {
			if (response.status === 401) {
				//alert(response.data.channeltuneApiResult.token.errorMessage);
				deleteCookie('accessToken');
				deleteCookie('adminUserName');
				router.push('/login');
			}
			return response;
		},
		function (error) {
			if (error.response && error.response.data) {
				return Promise.reject(error.response.data);
			}
			return Promise.reject(error.message);
		},
	);

	return instance;
}
