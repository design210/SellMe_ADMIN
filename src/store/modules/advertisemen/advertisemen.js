import { getAdvertisemenList, advertisemenDel } from '@/api/advertisemen/advertisemen';
const advertisemen = {
	namespaced: true,
	state: {
		getAdvertisemenList: {},
		// getCompanyList: {},
		// getCompanyDetail: {},
	},
	getters: {
		getAdvertisemenList: state => {
			return state.getAdvertisemenList;
		},
		// getCompanyList: state => {
		// 	return state.getCompanyList;
		// },
		// getCompanyDetail: state => {
		// 	return state.getCompanyDetail;
		// },
	},
	mutations: {
		getAdvertisemenList(state, data) {
			state.getAdvertisemenList = data;
		},
		// getCompanyList(state, data) {
		// 	state.getCompanyList = data;
		// },
		// getCompanyDetail(state, data) {
		// 	state.getCompanyDetail = data;
		// },
	},
	actions: {
		async ADVERTISEMEN_LIST({ commit }, datas) {
			const { data } = await getAdvertisemenList(datas);
			commit('getAdvertisemenList', data);
		},
		// async ADVERTISEMEN_REG({ commit }, datas) {
		// 	await advertisemenReg(datas);
		// },
		// async COMPANY_DETAIL({ commit }, datas) {
		// 	const { data } = await getCompanyDetail(datas);
		// 	commit('getCompanyDetail', data);
		// },
		async ADVERTISEMEN_DEL({ commit }, datas) {
			await advertisemenDel(datas);
		},
		// async COMPANY_MODIFY({ commit }, datas) {
		// 	await companyModify(datas);
		// },
	},
};

export default advertisemen;
