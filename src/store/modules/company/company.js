import { companyReg, getCompanyList, companyDel, getCompanyDetail, companyModify } from '@/api/company/company';
const company = {
	namespaced: true,
	state: {
		getFileInfo: {},
		getCompanyList: {},
		getCompanyDetail: {},
	},
	getters: {
		getFileInfo: state => {
			return state.getFileInfo;
		},
		getCompanyList: state => {
			return state.getCompanyList;
		},
		getCompanyDetail: state => {
			return state.getCompanyDetail;
		},
	},
	mutations: {
		getFileInfo(state, data) {
			state.getFileInfo = data;
		},
		getCompanyList(state, data) {
			state.getCompanyList = data;
		},
		getCompanyDetail(state, data) {
			state.getCompanyDetail = data;
		},
	},
	actions: {
		async COMPANY_REG({ commit }, datas) {
			await companyReg(datas);
		},
		async COMPANY_LIST({ commit }, datas) {
			const { data } = await getCompanyList(datas);
			commit('getCompanyList', data);
		},
		async COMPANY_DETAIL({ commit }, datas) {
			const { data } = await getCompanyDetail(datas);
			commit('getCompanyDetail', data);
		},
		async COMPANY_DEL({ commit }, datas) {
			await companyDel(datas);
		},
		async COMPANY_MODIFY({ commit }, datas) {
			await companyModify(datas);
		},
	},
};

export default company;
