import { loginUser, idCheck } from '@/api/member/login';
import { saveAccessTokenCookie, saveCompanyNameCookie, saveCompanyLogoCookie } from '@/utils/cookie';
const login = {
	namespaced: true,
	state: {
		getLoginInfo: {},
		getIdCheck: {},
	},
	getters: {
		getLoginInfo: state => {
			return state.getLoginInfo;
		},
		getIdCheck: state => {
			return state.getIdCheck;
		},
	},
	mutations: {
		getLoginInfo(state, userInfo) {
			state.getLoginInfo = userInfo;
		},
		getIdCheck(state, userInfo) {
			state.getIdCheck = userInfo;
		},
	},
	actions: {
		async LOGIN({ commit }, userData) {
			const { data } = await loginUser(userData);
			if (data.msg === undefined) {
				if (data.token !== '') {
					saveAccessTokenCookie(data.token);
					saveCompanyNameCookie(data.user.companyName);
					saveCompanyLogoCookie(data.user.companyLogo);
				}
			}
			commit('getLoginInfo', data);
		},
		async ID_CHECK({ commit }, id) {
			const { data } = await idCheck(id);
			commit('getIdCheck', data);
		},
	},
};

export default login;
