<template>
	<div>
		<div class="main_container">
			<div class="sub_container">
				<div class="head_title">
					<div class="company_managing">공고 관리</div>
					<div class="company_modify">공고 정보를 등록/수정 관리합니다.</div>
				</div>

				<div class="head_option">
					<div class="company_net">
						총 공고 수 : <span>{{ totalCount }}</span>
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
							<th>상태</th>
							<th>기업명</th>
							<th>공고명</th>
							<th>텍스트 자소서</th>
							<th>지원자 열람 가능일</th>
							<th>지원자</th>
							<th>등록일</th>
							<th>기능</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item, index) in list" :key="index">
							<td><input type="checkbox" :value="item.postNo" v-model="deleteList" @change="ckStatus(item.postNo)" /></td>
							<td v-if="item.isEnd === false">진행 중</td>
							<td v-else>마감</td>
							<td>{{ item.companyName }}</td>
							<td>{{ item.subject }}</td>
							<td v-if="item.isTextOn === true">Y</td>
							<td v-else>N</td>
							<td>{{ item.useDate }} {{ item.useTime }}</td>
							<td>{{ item.applierCount }}명 <span v-if="item.applierCount > 0">[보기]</span></td>
							<td>{{ item.regDate }} {{ item.regTime }}</td>
							<td><a @click="modify(item.postNo)">수정</a></td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td colspan="9" v-if="list.length === 0">리스트가 없습니다.</td>
						</tr>
					</tfoot>
				</table>

				<div class="d-flex justify-space-between page-group">
					<button type="button" @click="del" class="btn">선택 삭제</button>
					<div class="pagination">
						<v-pagination v-model="pageNo" :length="totalPage" :total-visible="7"></v-pagination>
					</div>
					<button type="button" @click="$router.push('/advertisemen/reg')" class="btn">신규 등록</button>
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
		...mapGetters('advertisemen', ['getAdvertisemenList']),
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
			toDay: '',
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
		let today = new Date();
		let year = today.getFullYear(); // 년도
		let month = today.getMonth() + 1; // 월
		let date = today.getDate(); // 날짜
		this.toDay = year + '-' + month + '-' + date;
	},
	methods: {
		async reload() {
			await this.$store.dispatch('advertisemen/ADVERTISEMEN_LIST', { pageNo: this.pageNo, pageSize: this.pageSize });
			this.totalPage = this.getAdvertisemenList.totalPage;
			this.totalCount = this.getAdvertisemenList.totalCount;
			this.getAdvertisemenList.items.forEach(ele => {
				ele.regDate = ele.startDate.substring(0, 10);
				ele.regTime = ele.startDate.substring(11, 19);
				ele.useDate = ele.endDate.substring(0, 10);
				ele.useTime = ele.endDate.substring(11, 19);
			});
			this.list = this.getAdvertisemenList.items;
		},
		//알럿 모달
		showModalPopup(msg) {
			this.$modal.show(AlertModal, { msg }, getPopupOpt('AlertModal', '280px', 'auto', false));
		},
		//컨펌 모달
		showConfirmModalPopup(msg) {
			this.$modal.show(confirmModal, { update: this.update, msg }, getPopupOpt('confirmModal', '280px', 'auto', false));
		},
		async update() {
			await this.$store.dispatch('advertisemen/ADVERTISEMEN_DEL', this.deleteList);
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
					chList.push(ele.postNo);
				});
				this.deleteList = chList;
			} else {
				this.deleteList = [];
			}
		},
		modify(id) {
			this.$router.push(`/advertisemen/modify/${id}`);
		},
	},
};
</script>

<style scoped>
.page-group {
	width: 90%;
}
.page-group .btn {
	margin-top: 23px;
}
.pagination {
	margin-top: 20px;
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
</style>
