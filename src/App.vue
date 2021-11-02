<template>
	<v-app>
		<v-main class="main-container">
			<div class="layout-main">
				<router-view name="top"></router-view>
				<router-view name="contents" class="contents"></router-view>
			</div>
			<router-view />
			<v-progress-circular :size="70" :width="7" color="amber" indeterminate class="spinner" v-if="loadingStatus"></v-progress-circular>
		</v-main>
	</v-app>
</template>

<script>
import bus from './utils/bus.js';
import '@/styles/style.css';
export default {
	name: 'App',
	data() {
		return {
			loadingStatus: false,
		};
	},
	created() {
		bus.$on('start:spinner', this.startSpinner);
		bus.$on('end:spinner', this.endSpinner);
	},
	beforeDestroy() {
		bus.$off('start:spinner', this.startSpinner);
		bus.$off('end:spinner', this.endSpinner);
	},
	methods: {
		startSpinner() {
			this.loadingStatus = true;
		},
		endSpinner() {
			this.loadingStatus = false;
		},
	},
};
</script>
<style lang="scss">
.spinner {
	position: fixed !important;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 99999;
}
.logout-main {
	& a {
		color: #808080 !important;
	}
}
footer {
	& a {
		color: #808080 !important;
	}
}
</style>
