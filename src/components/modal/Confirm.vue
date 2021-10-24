<template>
	<modalWrap @close="close">
		<template slot="body">
			<div class="info-wrap">
				<p v-html="msg"></p>
				<div class="btn-group">
					<span class="modal-btn-cancel" @click="close">아니오</span>
					<span class="modal-btn" @click="comfirm">네</span>
				</div>
			</div>
		</template>
	</modalWrap>
</template>

<script>
import modalWrap from '@/components/modal/AlertTemplate';
export default {
	props: ['msg'],
	components: {
		modalWrap,
	},
	methods: {
		close() {
			this.$emit('close');
		},
		comfirm() {
			this.$attrs.update();
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
.btn-group {
	display: flex;
	justify-content: space-around;
}
.modal-btn {
	width: 100px;
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
.modal-btn-cancel {
	width: 100px;
	height: 42px;
	border: 1px solid #ff4839;
	border-radius: 5px;
	color: #ff4839;
	font-size: 14px;
	font-weight: 700;
	cursor: pointer;
	display: block;
	margin: 0 auto;
	line-height: 40px;
}
</style>
