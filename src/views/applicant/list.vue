<template>
	<div>
		<div class="main_container">
			<div class="sub_container">
				<div class="head_title">
					<div class="company_managing">지원자 관리</div>
					<div class="company_modify">지원자 정보를 등록/수정 관리합니다.</div>
				</div>
				{{ applyUserName }}
				<div class="search_container">
					<table class="search_table_container">
						<thead>
							<tr class="search_table_menu">
								<th>기간</th>
								<td>
									<div class="d-flex align-center date-range" style="padding-left: 10px">
										<DatePicker :propdate="startDate" @updateDate="startDateProp"></DatePicker>
										<span style="padding: 0 5px">~</span>
										<DatePicker :propdate="endDate" @updateDate="endDateProp"></DatePicker>
									</div>
								</td>
							</tr>
							<tr>
								<th>조건 검색</th>
								<td class="search_bar">
									<select class="search_filter" v-model="searchType">
										<option value="선택">선택</option>
										<option value="기업명">기업명</option>
										<option value="공고명">공고명</option>
										<option value="이름">이름</option>
										<option value="연락처">연락처</option>
										<option value="이메일">이메일</option>
									</select>
									<input type="text" class="search_input" v-model="searchText" />
									<button class="search_btn btn" @click="search">검색</button>
								</td>
							</tr>
						</thead>
					</table>
				</div>

				<div class="head_option">
					<div class="company_net">
						총 지원자수 : <span>{{ totalCount }}</span>
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
							<th>기업명</th>
							<th>공고명</th>
							<th>이름</th>
							<th>연락처</th>
							<th>이메일</th>
							<th>제출일</th>
							<th>상태</th>
							<th>기능</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item, index) in list" :key="index">
							<td><input type="checkbox" :value="item.applyUserNo" v-model="deleteList" @change="ckStatus(item.applyUserNo)" /></td>
							<td>{{ item.companyName }}</td>
							<td>{{ item.postSubject }}</td>
							<td>{{ item.applyUserName }}</td>
							<td>{{ item.applyPhoneNo }}</td>
							<td>{{ item.applyEmail }}</td>
							<td>{{ item.regDate }} {{ item.regTime }}</td>
							<td v-if="item.isAgree === true">제출</td>
							<td v-else>미제출</td>
							<td><a @click="modify(item.applyUserNo)">수정</a></td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td colspan="8" v-if="list.length === 0">리스트가 없습니다.</td>
						</tr>
					</tfoot>
				</table>
				<div class="d-flex justify-space-between page-group">
					<button type="button" @click="del" class="btn">선택 삭제</button>
					<div class="pagination">
						<v-pagination v-model="pageNo" :length="totalPage" :total-visible="7"></v-pagination>
					</div>
					<button type="button" class="btn" style="margin-right: 20px" @click="downloadExcel">엑셀 다운</button>
					<button type="button" @click="$router.push('/advertisemen/reg')" class="btn">신규 등록</button>
				</div>
				<table class="table_container" id="excel">
					<thead>
						<tr>
							<th>기업명</th>
							<th>공고명</th>
							<th>이름</th>
							<th>연락처</th>
							<th>이메일</th>
							<th>제출일</th>
							<th>상태</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item, index) in listExcel" :key="index">
							<td>{{ item.companyName }}</td>
							<td>{{ item.postSubject }}</td>
							<td>{{ item.applyUserName }}</td>
							<td>{{ item.applyPhoneNo }}</td>
							<td>{{ item.applyEmail }}</td>
							<td>{{ item.regDate }} {{ item.regTime }}</td>
							<td v-if="item.isAgree === true">제출</td>
							<td v-else>미제출</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
import AlertModal from '@/components/modal/Alert';
import confirmModal from '@/components/modal/Confirm';
import { getPopupOpt } from '@/utils/modal';
import { mapGetters } from 'vuex';
import DatePicker from '../../components/form/DatePicker.vue';
import XLSX from 'sheetjs-style';
export default {
	components: { DatePicker },
	computed: {
		...mapGetters('applicant', ['getApplicantList']),
	},
	data() {
		return {
			pageNo: 1,
			pageSize: 30,
			applyEmail: '',
			applyPhoneNo: '',
			applierCompanyName: '',
			applierPostName: '',
			startDate: '',
			endDate: '',
			applyUserName: '',
			totalPage: null,
			totalCount: null,
			select: 30,
			allCk: false,
			allCheckStatus: false,
			list: [],
			deleteList: [],
			listExcel: [],
			searchType: '선택',
			searchText: '',
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
	async mounted() {
		this.reload();
		//excel용 전체 데이터
		await this.$store.dispatch('applicant/APPLICANT_LIST', {});
		this.getApplicantList.result.forEach(ele => {
			ele.regTime = ele.regDate.substring(11, 19);
			ele.regDate = ele.regDate.substring(0, 10);
		});
		this.listExcel = this.getApplicantList.result;
	},
	methods: {
		async reload() {
			await this.$store.dispatch('applicant/APPLICANT_LIST', {
				pageNo: this.pageNo,
				pageSize: this.pageSize,
				applyEmail: this.applyEmail,
				applyPhoneNo: this.applyPhoneNo,
				applierCompanyName: this.applierCompanyName,
				applierPostName: this.applierPostName,
				startDate: this.startDate,
				endDate: this.endDate,
				applyUserName: this.applyUserName,
			});
			this.totalPage = this.getApplicantList.totalPage;
			this.totalCount = this.getApplicantList.totalCount;
			this.getApplicantList.result.forEach(ele => {
				ele.regTime = ele.regDate.substring(11, 19);
				ele.regDate = ele.regDate.substring(0, 10);
			});
			this.list = this.getApplicantList.result;
			console.log(this.list);
		},
		startDateProp(date) {
			this.startDate = date;
		},
		endDateProp(date) {
			this.endDate = date;
		},
		search() {
			if (this.searchType === '기업명') {
				this.applierCompanyName = this.searchText;
			}
			if (this.searchType === '공고명') {
				this.applierPostName = this.searchText;
			}
			if (this.searchType === '이름') {
				this.applyUserName = this.searchText;
			}
			if (this.searchType === '연락처') {
				this.applyPhoneNo = this.searchText;
			}
			if (this.searchType === '이메일') {
				this.applyEmail = this.searchText;
			}
			this.reload();
			this.clear();
		},
		clear() {
			this.searchType = '선택';
			this.startDate = '';
			this.endDate = '';
			this.applyEmail = '';
			this.applyPhoneNo = '';
			this.applierCompanyName = '';
			this.applierPostName = '';
			this.applyUserName = '';
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
					chList.push(ele.applyUserNo);
				});
				this.deleteList = chList;
			} else {
				this.deleteList = [];
			}
		},
		modify(id) {
			this.$router.push(`/advertisemen/modify/${id}`);
		},
		downloadExcel() {
			if (this.listExcel.length > 0) {
				var excelData = XLSX.utils.table_to_sheet(document.getElementById('excel'));
				excelData.A1.s = {
					font: {
						sz: 12,
						bold: true,
					},
					alignment: {
						horizontal: 'center',
					},
					fill: {
						fgColor: {
							rgb: 'cccccc',
						},
					},
				};
				excelData.B1.s = {
					font: {
						sz: 12,
						bold: true,
					},
					alignment: {
						horizontal: 'center',
					},
					fill: {
						fgColor: {
							rgb: 'cccccc',
						},
					},
				};
				excelData.C1.s = {
					font: {
						sz: 12,
						bold: true,
					},
					alignment: {
						horizontal: 'center',
					},
					fill: {
						fgColor: {
							rgb: 'cccccc',
						},
					},
				};
				excelData.D1.s = {
					font: {
						sz: 12,
						bold: true,
					},
					alignment: {
						horizontal: 'center',
					},
					fill: {
						fgColor: {
							rgb: 'cccccc',
						},
					},
				};
				excelData.E1.s = {
					font: {
						sz: 12,
						bold: true,
					},
					alignment: {
						horizontal: 'center',
					},
					fill: {
						fgColor: {
							rgb: 'cccccc',
						},
					},
				};
				excelData.F1.s = {
					font: {
						sz: 12,
						bold: true,
					},
					alignment: {
						horizontal: 'center',
					},
					fill: {
						fgColor: {
							rgb: 'cccccc',
						},
					},
				};
				excelData.G1.s = {
					font: {
						sz: 12,
						bold: true,
					},
					alignment: {
						horizontal: 'center',
					},
					fill: {
						fgColor: {
							rgb: 'cccccc',
						},
					},
				};
				var workBook = XLSX.utils.book_new();
				XLSX.utils.book_append_sheet(workBook, excelData, '지원 현황');
				XLSX.writeFile(workBook, '지원자 리스트.xlsx');
			} else {
				alert('지원자 데이터가 없습니다.');
			}
		},
	},
};
</script>

<style scoped>
#excel {
	display: none;
}
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
