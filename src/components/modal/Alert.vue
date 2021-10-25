<template>
	<modalWrap @close="close">
		<template slot="body">
			<div class="info-wrap">
				<p v-html="msg"></p>
				<span class="modal-btn" @click="close">확인</span>
			</div>
		</template>
	</modalWrap>
</template>

<script>
import modalWrap from '@/components/modal/AlertTemplate';
export default {
	props: ['msg', 'link'],
	components: {
		modalWrap,
	},
	methods: {
		close() {
			if (this.link !== undefined) {
				this.$router.push(this.link);
			}
			this.$emit('close');
		},
	},
};
</script>
<style lang="scss">
.info-wrap {
	text-align: center;
	& p {
		margin-bottom: 20px;
	}
}
.modal-btn {
	width: 146px;
	height: 42px;
	background-color: #ff4839;
	border: 1px solid #ff4839;
	border-radius: 5px;
	color: #ffffff;
	font-size: 14px;
	font-weight: 700;
	cursor: pointer;
	display: block;
	margin: 0 auto;
	line-height: 40px;
}
</style>
