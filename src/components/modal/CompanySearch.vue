<template>
	<modalWrap @close="close">
		<template slot="body">
			<div class="search_modal_body">
				<div>
					<h3>기업 검색</h3>
					<div class="d-flex" style="margin: 20px 0">
						<input type="text" id="searchCompany" style="margin: 0 5px 0 0" v-model="name" />
						<button type="button" class="btn" @click="reload">검색</button>
					</div>
				</div>
				<div class="search_company_result">
					<ul class="company_list">
						<li v-for="(item, index) in list" :key="index">
							<div style="cursor: pointer" @click="selectCompany({ companyUserNo: item.companyUserNo, companyName: item.companyName })">
								{{ item.companyName }}
							</div>
						</li>
					</ul>
				</div>
			</div>
		</template>
	</modalWrap>
</template>

<script>
import modalWrap from '@/components/modal/AlertTemplate';
import { mapGetters } from 'vuex';
export default {
	computed: {
		...mapGetters('common', ['getCompanyList']),
	},
	props: ['msg'],
	data() {
		return {
			name: '',
			list: [],
		};
	},
	components: {
		modalWrap,
	},
	mounted() {
		this.reload();
	},
	methods: {
		close() {
			this.$emit('close');
		},
		selectCompany(data) {
			this.$attrs.update(data);
			this.$emit('close');
		},
		async reload() {
			await this.$store.dispatch('common/COMPANY_SEARCH', this.name);
			this.list = this.getCompanyList;
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
.btn {
	text-align: center;
	background-color: #ff4839;
	border: 1px solid #ff4839;
	border-radius: 3px;
	color: #ffffff !important;
	font-size: 13px;
	width: 80px;
	height: 30px;
	margin-top: -6px;
	cursor: pointer;
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
