import { getApplicantList, getApplicantDetail } from '@/api/applicant/applicant';
const applicant = {
	namespaced: true,
	state: {
		getApplicantList: {},
		getApplicantDetail: {},
	},
	getters: {
		getApplicantList: state => {
			return state.getApplicantList;
		},
		getApplicantDetail: state => {
			return state.getApplicantDetail;
		},
	},
	mutations: {
		getApplicantList(state, data) {
			state.getApplicantList = data;
		},
		getApplicantDetail(state, data) {
			state.getApplicantDetail = data;
		},
	},
	actions: {
		async APPLICANT_LIST({ commit }, datas) {
			const { data } = await getApplicantList(datas);
			commit('getApplicantList', data);
		},
		// async ADVERTISEMEN_REG({ commit }, datas) {
		// 	const { data } = await advertisemenReg(datas);
		// },
		async APPLICANT_DETAIL({ commit }, datas) {
			const { data } = await getApplicantDetail(datas);
			commit('getApplicantDetail', data);
		},
		// async ADVERTISEMEN_DEL({ commit }, datas) {
		// 	await advertisemenDel(datas);
		// },
		// async ADVERTISEMEN_MODIFY({ commit }, datas) {
		// 	await advertisemenModify(datas);
		// },
	},
};

export default applicant;
