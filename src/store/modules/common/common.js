import { fileUpload, companySearch } from '@/api/common/common';
const common = {
	namespaced: true,
	state: {
		getFileInfo: {},
		getCompanyList: {},
	},
	getters: {
		getFileInfo: state => {
			return state.getFileInfo;
		},
		getCompanyList: state => {
			return state.getCompanyList;
		},
	},
	mutations: {
		getFileInfo(state, data) {
			state.getFileInfo = data;
		},
		getCompanyList(state, data) {
			state.getCompanyList = data;
		},
	},
	actions: {
		async FILE_UPLOAD({ commit }, datas) {
			const { data } = await fileUpload(datas);
			commit('getFileInfo', data);
		},
		async COMPANY_SEARCH({ commit }, name) {
			const { data } = await companySearch(name);
			commit('getCompanyList', data);
		},
	},
};

export default common;
