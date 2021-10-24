<template>
	<div>
		<div class="main_container">
			<div class="sub_container">
				<div class="head_title">
					<div class="company_managing">기업 관리</div>
					<div class="company_modify">기업 정보를 등록/수정 관리합니다.</div>
				</div>

				<div class="head_option">
					<div class="company_net">
						총 기업 수 : <span>{{ totalCount }}</span>
					</div>
					<select class="company_option" v-model="select">
						<option value="30">30개씩 보기</option>
						<option value="50">50개씩 보기</option>
						<option value="100">100개씩 보기</option>
					</select>
				</div>
				<table class="table_container">
					<thead>
						<tr>
							<th><input type="checkbox" @change="allCheck" v-model="allCheckStatus" /></th>
							<th>기업 아이디</th>
							<th>기업명</th>
							<th>연락처</th>
							<th>이메일</th>
							<th>등록일</th>
							<th>진행 중 공고</th>
							<th>기능</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item, index) in list" :key="index">
							<td><input type="checkbox" :value="item.companyUserNo" v-model="deleteList" @change="ckStatus(item.companyUserNo)" /></td>
							<td>{{ item.id }}</td>
							<td>{{ item.companyName }}</td>
							<td>{{ item.departPhoneNo }}</td>
							<td>{{ item.departEmail }}</td>
							<td>{{ item.date }} {{ item.time }}</td>
							<td>12</td>
							<td><a @click="modify(item.companyUserNo)">수정</a></td>
						</tr>
					</tbody>
				</table>

				<div class="d-flex justify-space-between page-group">
					<button type="button" @click="del">선택 삭제</button>
					<div class="pagination">
						<v-pagination v-model="pageNo" :length="totalPage" :total-visible="7"></v-pagination>
					</div>
					<button type="button" @click="$router.push('/company/reg')">신규 등록</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import AlertModal from '@/components/modal/Alert';
import confirmModal from '@/components/modal/Confirm';
import { getPopupOpt } from '@/utils/modal';
import { mapGetters } from 'vuex';
export default {
	computed: {
		...mapGetters('company', ['getCompanyList']),
	},
	data() {
		return {
			pageNo: 1,
			pageSize: 30,
			totalPage: null,
			totalCount: null,
			select: 30,
			allCk: false,
			allCheckStatus: false,
			list: [],
			deleteList: [],
		};
	},
	watch: {
		pageNo() {
			this.reload();
		},
		pageSize() {
			this.reload();
		},
		select(num) {
			this.pageSize = num;
			this.reload();
		},
	},
	mounted() {
		this.reload();
	},
	methods: {
		//알럿 모달
		showModalPopup(msg) {
			this.$modal.show(AlertModal, { msg }, getPopupOpt('AlertModal', '280px', 'auto', false));
		},
		//컨펌 모달
		showConfirmModalPopup(msg) {
			this.$modal.show(confirmModal, { update: this.update, msg }, getPopupOpt('confirmModal', '280px', 'auto', false));
		},
		async reload() {
			await this.$store.dispatch('company/COMPANY_LIST', { pageNo: this.pageNo, pageSize: this.pageSize });
			this.totalPage = this.getCompanyList.totalPage;
			this.totalCount = this.getCompanyList.totalCount;
			this.getCompanyList.items.forEach(ele => {
				ele.date = ele.regDate.substring(0, 10);
				ele.time = ele.regDate.substring(11, 19);
			});
			this.list = this.getCompanyList.items;
		},
		async update() {
			await this.$store.dispatch('company/COMPANY_DEL', this.deleteList);
			this.reload();
		},
		del() {
			if (this.deleteList.length > 0) {
				this.showConfirmModalPopup('선택한 항목을 삭제하시겠습니까?');
			} else {
				this.showModalPopup('삭제할 항목을 선택해주세요.');
			}
		},
		ckStatus(id) {
			let diff = this.deleteList.includes(id);
			if (diff === false) {
				this.allCheckStatus = false;
				this.allCk = false;
			}
		},
		allCheck() {
			this.allCk = !this.allCk;
			const chList = [];
			if (this.allCk) {
				this.list.forEach(ele => {
					chList.push(ele.companyUserNo);
				});
				this.deleteList = chList;
			} else {
				this.deleteList = [];
			}
		},
		modify(id) {
			this.$router.push(`/company/modify/${id}`);
		},
	},
};
</script>

<style>
.page-group {
	width: 90%;
}
.page-group button {
	margin-top: 22px;
}
button {
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
</style>
