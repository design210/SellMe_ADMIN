<template>
	<modalWrap @close="close">
		<template slot="body">
			<div class="info-wrap">
				<p>아이디/비밀번호가<br />일치하지 않습니다.</p>
				<button type="button" id="modalBtn" @click="close">확인</button>
			</div>
		</template>
	</modalWrap>
</template>

<script>
import modalWrap from '@/components/modal/AlertTemplate';
export default {
	data() {
		return {
			//게시물 설정
			size: 15,
			page: 1,
			searchText: '',
			len: null,
			list: [],
		};
	},
	components: {
		modalWrap,
	},
	methods: {
		close() {
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
</style>
