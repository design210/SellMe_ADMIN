<template>
	<header>
		<div class="header_container">
			<div class="header_logo"><router-link to="/company/list">기업 관리</router-link></div>
			<div class="header_logo"><router-link to="/advertisemen/list">공고 관리</router-link></div>
			<div class="header_logo"><router-link to="/applicant/list">지원자 관리</router-link></div>
			<div class="header_status">
				<div class="logout"><a href="#" @click="logout">로그아웃</a></div>
			</div>
		</div>
	</header>
</template>

<script>
import { getCompanyNameCookie, getCompanyLogoCookie, deleteCookie } from '@/utils/cookie.js';
export default {
	data() {
		return {
			companyName: '',
			companyLogo: '',
		};
	},
	async mounted() {
		this.companyName = getCompanyNameCookie();
		this.companyLogo = getCompanyLogoCookie();
	},
	methods: {
		logout() {
			deleteCookie('accessToken');
			deleteCookie('companyName');
			deleteCookie('companyLogo');
			this.$router.push('/login');
		},
	},
};
</script>
