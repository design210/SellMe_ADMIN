import Vue from 'vue';
import VueRouter from 'vue-router';
import { getAccessTokenCookie } from '@/utils/cookie';
const top = () => import('@/components/common/Top.vue');

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/login',
		},
		{
			path: '/main',
			redirect: '/company/list',
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('@/views/login/Login.vue'),
			meta: { unauthorized: true },
		},
		{
			path: '/company/list',
			name: 'company_list',
			components: {
				top,
				contents: () => import('@/views/company/list.vue'),
			},
		},
		{
			path: '/company/reg',
			name: 'company_reg',
			components: {
				top,
				contents: () => import('@/views/company/reg.vue'),
			},
		},
		{
			path: '/company/modify/:id',
			name: 'company_modify',
			components: {
				top,
				contents: () => import('@/views/company/modify.vue'),
			},
		},
		{
			path: '/applicant/list',
			name: 'applicant_list',
			components: {
				top,
				contents: () => import('@/views/applicant/list.vue'),
			},
		},
		{
			path: '/applicant/list/:filter',
			name: 'applicant_list',
			components: {
				top,
				contents: () => import('@/views/applicant/list.vue'),
			},
		},
		{
			path: '/applicant/reg',
			name: 'applicant_reg',
			components: {
				top,
				contents: () => import('@/views/applicant/reg.vue'),
			},
		},
		{
			path: '/applicant/modify/:id',
			name: 'applicant_modify',
			components: {
				top,
				contents: () => import('@/views/applicant/modify.vue'),
			},
		},
		{
			path: '/advertisemen/list',
			name: 'advertisemen_list',
			components: {
				top,
				contents: () => import('@/views/advertisemen/list.vue'),
			},
		},
		{
			path: '/advertisemen/reg',
			name: 'advertisemen_reg',
			components: {
				top,
				contents: () => import('@/views/advertisemen/reg.vue'),
			},
		},
		{
			path: '/advertisemen/modify/:id',
			name: 'advertisemen_modify',
			components: {
				top,
				contents: () => import('@/views/advertisemen/modify.vue'),
			},
		},
		//404
		{
			path: '*',
			name: 'pageNotFound',
			component: () => import('@/views/error/NotFoundPage.vue'),
			meta: { unauthorized: true },
		},
	],
});

//router guard
router.beforeEach(async (to, from, next) => {
	//????????? ????????? ?????? ??????
	if (getAccessTokenCookie() !== null) {
		return next();
	}

	//????????? ?????? ?????? ?????????
	if (to.matched.some(record => record.meta.unauthorized) || getAccessTokenCookie()) {
		return next();
	}

	//????????? ????????? ?????? ??????
	return next('/login');
});

export default router;
