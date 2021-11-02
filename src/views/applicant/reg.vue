<template>
	<div>
		<div class="main_container">
			<div class="sub_container">
				<div class="head_title">
					<div class="company_managing">지원자 관리</div>
					<div class="company_modify">지원자 정보를 등록/수정 관리합니다.</div>
				</div>

				<div class="head_option" style="margin-bottom: 0">
					<div class="company_info">공고 정보 설정</div>
					<table class="search_table_container">
						<tr>
							<th>기업 선택</th>
							<td class="idCheck">
								<input type="text" v-model="companyName" readonly />
								<button type="button" @click="showCompanyModalPopup" style="margin-left: 5px" class="btn">검색</button>
							</td>
						</tr>
						<tr>
							<th>공고 선택</th>
							<td>
								<select v-model="postNo">
									<option v-for="(option, index) in options" :value="option.value" :key="index">
										{{ option.text }}
									</option>
								</select>
							</td>
						</tr>
					</table>
				</div>
				<!-- <div class="d-flex align-center date-range" style="width: 100px">
									<DatePicker :propdate="regDate" @updateDate="regDateProp"></DatePicker>
								</div> -->
				<div class="head_option" style="margin-bottom: 0">
					<div class="company_info">지원자 정보 설정</div>
					<table class="search_table_container">
						<tr>
							<th>지원자 이름</th>
							<td class="">
								<input type="text" id="companyId" v-model="applyUserName" />
							</td>
							<th>제출일</th>
							<td>{{ regDate }}</td>
						</tr>
						<tr>
							<th>지원자 연락처</th>
							<td class="">
								<input type="tel" v-model="applyPhoneNo" />
							</td>
							<th>지원자 이메일</th>
							<td class="">
								<input type="email" v-model="applyEmail" />
							</td>
						</tr>
						<tr>
							<th>학교명</th>
							<td class="">
								<input type="text" v-model="schoolName" />
							</td>
							<th>졸업 여부</th>
							<td class="">
								<select v-model="isGraduate">
									<option value="0">선택</option>
									<option value="1">학사 졸업</option>
									<option value="2">학사 재학 중</option>
									<option value="3">석사 졸업</option>
									<option value="4">석사 재학 중</option>
									<option value="5">박사 졸업</option>
									<option value="6">박사 재학 중</option>
								</select>
							</td>
						</tr>
						<tr>
							<th>전공 입력 (주전공)</th>
							<td class="">
								<input type="text" v-model="major" />
							</td>
							<th>전공 입력 (부/복수 전공)</th>
							<td class="">
								<input type="text" v-model="subMajor" />
								<select v-model="subMajorType">
									<option value="0">선택</option>
									<option value="1">복수 전공</option>
									<option value="2">부전공</option>
								</select>
							</td>
						</tr>
						<tr>
							<th>경력 여부</th>
							<td class="">
								<input type="radio" name="careerCheck" id="radioMargin" v-model="isNew" value="1" /> 신입
								<input type="radio" name="careerCheck" id="radioMargin" v-model="isNew" value="0" /> 경력
							</td>
							<th>경력 기간</th>
							<td class="">
								<input type="text" v-model="career" />
								<span>개월</span>
							</td>
						</tr>
						<tr>
							<th>이력 내용 입력</th>
							<td class="" colspan="3">
								<textarea rows="3" cols="80" class="admin_memo" v-model="introduction"></textarea>
							</td>
						</tr>
					</table>
				</div>

				<div class="head_option" style="margin-bottom: 0">
					<div class="company_info">영상 자기소개 파일 등록</div>
					<table class="search_table_container">
						<tr>
							<th width="150">파일 등록</th>
							<td class="filebox">
								<div v-if="videoUrl !== ''">{{ videoUrl }}</div>
								<div class="d-flex">
									<label for="noFile" style="margin-left: 0">파일 선택</label>
									<v-file-input class="file-input" id="noFile" accept="video/*" @change="selectFile" placeholder="선택된 파일 없음"></v-file-input>
								</div>
							</td>
						</tr>
					</table>
				</div>

				<div class="head_option">
					<div class="company_info">텍스트 자기소개 답변 설정</div>
					<table class="search_table_container">
						<tr>
							<th rowspan="5">자기소개 답변 등록</th>
							<td class="" colspan="3">
								<div class="items">항목1</div>
								<textarea rows="2" cols="80" class="admin_memo" v-model="answer_1"></textarea>
							</td>
						</tr>
						<tr>
							<td class="" colspan="3">
								<div class="items">항목2</div>
								<textarea rows="2" cols="80" class="admin_memo" v-model="answer_2"></textarea>
							</td>
						</tr>
						<tr>
							<td class="" colspan="3">
								<div class="items">항목3</div>
								<textarea rows="2" cols="80" class="admin_memo" v-model="answer_3"></textarea>
							</td>
						</tr>
						<tr>
							<td class="" colspan="3">
								<div class="items">항목4</div>
								<textarea rows="2" cols="80" class="admin_memo" v-model="answer_4"></textarea>
							</td>
						</tr>
						<tr>
							<td class="" colspan="3">
								<div class="items">항목5</div>
								<textarea rows="2" cols="80" class="admin_memo" v-model="answer_5"></textarea>
							</td>
						</tr>
					</table>
				</div>
				<div class="d-flex">
					<button style="margin: 50px 5px 0 0" @click="$router.push('/applicant/list')" class="btn-gray">목록</button>
					<button style="margin: 50px 0" @click="validate" class="btn">확인</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios';
import AlertModal from '@/components/modal/Alert';
import { getPopupOpt } from '@/utils/modal';
import loading from '@/mixins/loading';
import bus from '@/utils/bus';
import DatePicker from '@/components/form/DatePicker.vue';
import CompanySearchModal from '@/components/modal/CompanySearch';
export default {
	mixins: [loading],
	computed: {
		...mapGetters('applicant', ['getApplicantfind']),
	},
	components: {
		DatePicker,
	},
	data() {
		return {
			options: [],
			companyName: '',
			companyUserNo: '',
			postNo: '',
			applyUserName: '',
			regDate: '',
			applyPhoneNo: '',
			applyEmail: '',
			schoolName: '',
			isGraduate: '0',
			major: '',
			subMajor: '',
			subMajorType: '0',
			isNew: '1',
			career: '',
			introduction: '',
			videoUrl: '',
			answer_1: '',
			answer_2: '',
			answer_3: '',
			answer_4: '',
			answer_5: '',
		};
	},
	watch: {
		companyUserNo(id) {
			this.findAdvertisemen(id);
		},
	},
	methods: {
		regDateProp() {},
		validate() {
			this.reg();
		},
		async reg() {
			this.showModalPopup('저장이 완료 되었습니다.', '/applicant/list');
		},
		//회사 찾기 모달
		showCompanyModalPopup(msg) {
			this.$modal.show(CompanySearchModal, { update: this.companySelect, msg }, getPopupOpt('CompanySearchModal', '400px', 'auto', false));
		},
		companySelect(data) {
			this.companyName = data.companyName;
			this.companyUserNo = data.companyUserNo;
		},
		async findAdvertisemen(id) {
			await this.$store.dispatch('applicant/APPLICANT_FIND', id);
			const postList = this.getApplicantfind.items;
			const newList = [];
			postList.forEach(ele => {
				newList.push({ value: ele.postNo, text: ele.subject });
			});
			this.options = newList;
		},
		//알럿 모달
		showModalPopup(msg, link) {
			this.$modal.show(AlertModal, { msg, link }, getPopupOpt('AlertModal', '280px', 'auto', false));
		},
		//파일 업로드
		selectFile(file) {
			this.upload(file);
		},
		async upload(file) {
			bus.$emit('start:spinner');
			await this.$store.dispatch('common/VIDEO_UPLOAD', {
				filePath: file.name,
				contentType: file.type,
				fileSize: file.size,
			});
			const url = 'https://s3.ap-northeast-2.amazonaws.com/sellme.medias/' + this.getVideoInfo.fileName;

			await axios
				.put(url, file)
				.then(response => {
					this.videoUrl = response.config.url;
				})
				.catch(error => console.log(error));
			bus.$emit('end:spinner');
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
