<template>
	<div>
		<div class="main_container">
			<div class="sub_container">
				<div class="head_title">
					<div class="company_managing">공고 관리</div>
					<div class="company_modify">공고 정보를 등록/수정 관리합니다.</div>
				</div>
				<div class="head_option">
					<div class="company_info" style="margin-bottom: 0">공고 정보 설정</div>
				</div>

				<div class="search_container">
					<table class="search_table_container">
						<tr>
							<th>기업명</th>
							<td class="idCheck">
								<input type="text" v-model="companyName" readonly />
								<button type="button" @click="showCompanyModalPopup" style="margin-left: 5px" class="btn">검색</button>
							</td>
							<th>상태</th>
							<td class="radios"><input v-model="end" type="radio" value="N" /> 진행 중 <input v-model="end" type="radio" value="Y" /> 마감</td>
						</tr>
						<tr>
							<th>모집 분야 (공고명)</th>
							<td colspan="3">
								<input type="text" v-model="subject" />
								<span id="input_ex">EX) 2021 하반기 각 부문 공개 채용, 리빙 MD (가전/가구/주방,생활용품) 상시 채용</span>
							</td>
						</tr>
						<tr>
							<th>지원자 열람 가능일</th>
							<td colspan="3">
								<div class="d-flex align-center">
									<time-picker @date="dateSetProp" class="date-time"></time-picker>
									<span style="margin-left: 10px">까지</span>
								</div>
							</td>
						</tr>
					</table>
				</div>

				<div class="head_option" style="margin-bottom: 0">
					<div class="company_info">영상 자기소개 설정</div>
					<table class="search_table_container">
						<tr>
							<th>영상 자기소개 항목</th>
							<td class="" colspan="3">
								<textarea
									rows="3"
									cols="80"
									placeholder="회사에 지원하는 이유와 본인의 경험을 이어서 말해주세요."
									class="admin_memo"
									style="width: 100%"
									v-model="contents"
								></textarea>
							</td>
						</tr>
					</table>
				</div>

				<div class="head_option">
					<div class="company_info">텍스트 자기소개 설정</div>
					<table class="search_table_container">
						<tr>
							<th>텍스트 자기소개 사용 여부</th>
							<td><input type="radio" v-model="text" value="Y" /> 사용 <input type="radio" v-model="text" value="N" /> 미사용</td>
						</tr>
						<tr>
							<th rowspan="5">자기소개 항목 설정</th>
							<td class="" colspan="3">
								<div class="items">항목1</div>
								<textarea rows="2" cols="80" class="admin_memo" v-model="text_question_1"></textarea>
							</td>
						</tr>
						<tr>
							<td class="" colspan="3">
								<div class="items">항목2</div>
								<textarea rows="2" cols="80" class="admin_memo" v-model="text_question_2"></textarea>
							</td>
						</tr>
						<tr>
							<td class="" colspan="3">
								<div class="items">항목3</div>
								<textarea rows="2" cols="80" class="admin_memo" v-model="text_question_3"></textarea>
							</td>
						</tr>
						<tr>
							<td class="" colspan="3">
								<div class="items">항목4</div>
								<textarea rows="2" cols="80" class="admin_memo" v-model="text_question_4"></textarea>
							</td>
						</tr>
						<tr>
							<td class="" colspan="3">
								<div class="items">항목5</div>
								<textarea rows="2" cols="80" class="admin_memo" v-model="text_question_5"></textarea>
							</td>
						</tr>
					</table>
				</div>
				<div class="d-flex">
					<button style="margin: 50px 5px 0 0" @click="$router.push('/advertisemen/list')" class="btn-gray">목록</button>
					<button style="margin: 50px 0" @click="validate" class="btn">확인</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CompanySearchModal from '@/components/modal/CompanySearch';
import { getPopupOpt } from '@/utils/modal';
import TimePicker from '@/components/form/TimePicker.vue';
import AlertModal from '@/components/modal/Alert';
export default {
	data() {
		return {
			startDate: '',
			endDate: '',
			companyName: '',
			companyUserNo: '',
			isEnd: false,
			isTextOn: true,
			end: 'N',
			text: 'Y',
			subject: '',
			contents: '',
			text_question_1: '',
			text_question_2: '',
			text_question_3: '',
			text_question_4: '',
			text_question_5: '',
		};
	},
	watch: {
		end(n) {
			if (n === 'Y') {
				this.isEnd = true;
			} else {
				this.isEnd = false;
			}
		},
		text(n) {
			if (n === 'Y') {
				this.isTextOn = true;
			} else {
				this.isTextOn = false;
			}
		},
	},
	components: {
		TimePicker,
	},
	methods: {
		//회사 찾기 모달
		showCompanyModalPopup(msg) {
			this.$modal.show(CompanySearchModal, { update: this.companySelect, msg }, getPopupOpt('CompanySearchModal', '400px', 'auto', false));
		},
		//알럿 모달
		showModalPopup(msg, link) {
			this.$modal.show(AlertModal, { msg, link }, getPopupOpt('AlertModal', '280px', 'auto', false));
		},
		dateSetProp(date) {
			this.endDate = date;
		},
		companySelect(data) {
			this.companyName = data.companyName;
			this.companyUserNo = data.companyUserNo;
		},
		validate() {
			this.getCurrentTime();
			if (this.companyName == '') {
				this.showModalPopup('기업명을 입력해주세요.');
				return false;
			}
			if (this.subject == '') {
				this.showModalPopup('모집분야를 입력해주세요.');
				return false;
			}
			if (this.endDate == '') {
				this.showModalPopup('지원자 열람 가능일을 입력해주세요.');
				return false;
			}
			if (this.contents == '') {
				this.showModalPopup('영상 자기소개 항목을 입력해주세요.');
				return false;
			}
			this.$store.dispatch('advertisemen/ADVERTISEMEN_REG', {
				startDate: this.startDate,
				endDate: this.endDate,
				companyUserNo: this.companyUserNo,
				isEnd: this.isEnd,
				subject: this.subject,
				contents: this.contents,
				isTextOn: this.isTextOn,
				text_question_1: this.text_question_1,
				text_question_2: this.text_question_2,
				text_question_3: this.text_question_3,
				text_question_4: this.text_question_4,
				text_question_5: this.text_question_5,
			});
			this.showModalPopup('등록이 완료 되었습니다.', '/advertisemen/list');
		},
		getCurrentTime() {
			var now = new Date();
			var year = now.getFullYear();
			var month = now.getMonth() - 1;
			if (month < 10) {
				month = '0' + month;
			}
			var date = now.getDate();
			if (date < 10) {
				date = '0' + date;
			}
			var hours = now.getHours();
			if (hours < 10) {
				hours = '0' + hours;
			}
			var minutes = now.getMinutes();
			if (minutes < 10) {
				minutes = '0' + minutes;
			}
			this.startDate = year + '-' + month + '-' + date + ' ' + hours + ':' + minutes;
		},
	},
};
</script>

<style scoped>
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
