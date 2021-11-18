import { applicantReg, getApplicantfind, getApplicantList, getApplicantDetail, applicantModify, applicantDel } from '@/api/applicant/applicant';
const applicant = {
	namespaced: true,
	state: {
		getApplicantList: {},
		getApplicantDetail: {},
		getApplicantfind: {},
	},
	getters: {
		getApplicantList: state => {
			return state.getApplicantList;
		},
		getApplicantDetail: state => {
			return state.getApplicantDetail;
		},
		getApplicantfind: state => {
			return state.getApplicantfind;
		},
	},
	mutations: {
		getApplicantList(state, data) {
			state.getApplicantList = data;
		},
		getApplicantDetail(state, data) {
			state.getApplicantDetail = data;
		},
		getApplicantfind(state, data) {
			state.getApplicantfind = data;
		},
	},
	actions: {
		async APPLICANT_LIST({ commit }, datas) {
			const { data } = await getApplicantList(datas);
			commit('getApplicantList', data);
		},
		async APPLICANT_REG({ commit }, datas) {
			const { data } = await applicantReg(datas);
		},
		async APPLICANT_DETAIL({ commit }, datas) {
			const { data } = await getApplicantDetail(datas);
			commit('getApplicantDetail', data);
		},
		async APPLICANT_DEL({ commit }, datas) {
			await applicantDel(datas);
		},
		async APPLICANT_MODIFY({ commit }, datas) {
			await applicantModify(datas);
		},
		async APPLICANT_FIND({ commit }, id) {
			const { data } = await getApplicantfind(id);
			commit('getApplicantfind', data);
		},
	},
};

export default applicant;
