import { getApplicantList } from '@/api/applicant/applicant';
const applicant = {
	namespaced: true,
	state: {
		getApplicantList: {},
		getAdvertisemenDetail: {},
	},
	getters: {
		getApplicantList: state => {
			return state.getApplicantList;
		},
		getAdvertisemenDetail: state => {
			return state.getAdvertisemenDetail;
		},
	},
	mutations: {
		getApplicantList(state, data) {
			state.getApplicantList = data;
		},
		getAdvertisemenDetail(state, data) {
			state.getAdvertisemenDetail = data;
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
		// async ADVERTISEMEN_DETAIL({ commit }, datas) {
		// 	const { data } = await getAdvertisemenDetail(datas);
		// 	commit('getAdvertisemenDetail', data);
		// },
		// async ADVERTISEMEN_DEL({ commit }, datas) {
		// 	await advertisemenDel(datas);
		// },
		// async ADVERTISEMEN_MODIFY({ commit }, datas) {
		// 	await advertisemenModify(datas);
		// },
	},
};

export default applicant;
