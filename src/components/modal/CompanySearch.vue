<template>
	<modalWrap @close="close">
		<template slot="body">
			<div class="search_modal_body">
				<div>
					<h3>기업 검색</h3>
					<div class="d-flex" style="margin: 20px 0">
						<input type="text" id="searchCompany" style="margin: 0 5px 0 0" />
						<button type="button">검색</button>
					</div>
				</div>
				<div class="search_company_result">
					<ul class="company_list">
						<li>
							<div>(주)컴퍼니제이</div>
						</li>
					</ul>
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
#searchCompany {
	font-size: 13px;
}
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
