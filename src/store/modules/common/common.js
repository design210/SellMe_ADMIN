import { fileUpload, companySearch, videoUpload } from '@/api/common/common';
const common = {
	namespaced: true,
	state: {
		getFileInfo: {},
		getCompanyList: {},
		getVideoInfo: {},
	},
	getters: {
		getFileInfo: state => {
			return state.getFileInfo;
		},
		getCompanyList: state => {
			return state.getCompanyList;
		},
		getVideoInfo: state => {
			return state.getVideoInfo;
		},
	},
	mutations: {
		getFileInfo(state, data) {
			state.getFileInfo = data;
		},
		getCompanyList(state, data) {
			state.getCompanyList = data;
		},
		getVideoInfo(state, data) {
			state.getVideoInfo = data;
		},
	},
	actions: {
		async FILE_UPLOAD({ commit }, datas) {
			const { data } = await fileUpload(datas);
			commit('getFileInfo', data);
		},
		async VIDEO_UPLOAD({ commit }, datas) {
			const { data } = await videoUpload(datas);
			commit('getVideoInfo', data);
		},
		async COMPANY_SEARCH({ commit }, name) {
			const { data } = await companySearch(name);
			commit('getCompanyList', data);
		},
	},
};

export default common;
