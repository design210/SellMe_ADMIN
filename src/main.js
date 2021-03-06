import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import VModal from 'vue-js-modal';
Vue.use(VModal);
Vue.use(require('vue-moment'));

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	vuetify,
	VModal,
	render: h => h(App),
}).$mount('#app');
