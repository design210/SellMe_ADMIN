import Vue from 'vue';
import Vuex from 'vuex';
import login from '@/store/modules/member/login.js';
import common from '@/store/modules/common/common.js';
import company from '@/store/modules/company/company.js';
Vue.use(Vuex);
export default new Vuex.Store({
	modules: {
		login,
		common,
		company,
	},
});
