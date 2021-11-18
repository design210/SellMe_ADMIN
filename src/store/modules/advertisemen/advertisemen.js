import { advertisemenModify, getAdvertisemenList, advertisemenDel, advertisemenReg, getAdvertisemenDetail } from '@/api/advertisemen/advertisemen';
const advertisemen = {
	namespaced: true,
	state: {
		getAdvertisemenList: {},
		getAdvertisemenDetail: {},
	},
	getters: {
		getAdvertisemenList: state => {
			return state.getAdvertisemenList;
		},
		getAdvertisemenDetail: state => {
			return state.getAdvertisemenDetail;
		},
	},
	mutations: {
		getAdvertisemenList(state, data) {
			state.getAdvertisemenList = data;
		},
		getAdvertisemenDetail(state, data) {
			state.getAdvertisemenDetail = data;
		},
	},
	actions: {
		async ADVERTISEMEN_LIST({ commit }, datas) {
			const { data } = await getAdvertisemenList(datas);
			commit('getAdvertisemenList', data);
		},
		async ADVERTISEMEN_REG({ commit }, datas) {
			const { data } = await advertisemenReg(datas);
		},
		async ADVERTISEMEN_DETAIL({ commit }, datas) {
			const { data } = await getAdvertisemenDetail(datas);
			commit('getAdvertisemenDetail', data);
		},
		async ADVERTISEMEN_DEL({ commit }, datas) {
			await advertisemenDel(datas);
		},
		async ADVERTISEMEN_MODIFY({ commit }, datas) {
			await advertisemenModify(datas);
		},
	},
};

export default advertisemen;
