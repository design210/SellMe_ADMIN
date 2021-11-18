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
							<th width="170">기업</th>
							<td class="idCheck">
								{{ companyName }}
							</td>
						</tr>
						<tr>
							<th>공고</th>
							<td>
								{{ postSubject }}
							</td>
						</tr>
					</table>
				</div>

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
					<button style="margin: 50px 0" @click="validate" class="btn">수정</button>
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
export default {
	mixins: [loading],
	computed: {
		...mapGetters('applicant', ['getApplicantDetail']),
		...mapGetters('common', ['getVideoInfo']),
	},
	data() {
		return {
			companyName: '',
			postSubject: '',
			applyUserName: '',
			regDate: '',
			applyPhoneNo: '',
			applyEmail: '',
			schoolName: '',
			isGraduate: '',
			major: '',
			subMajor: '',
			subMajorType: '',
			isNew: '',
			career: '',
			introduction: '',
			answer_1: '',
			answer_2: '',
			answer_3: '',
			answer_4: '',
			answer_5: '',
			videoUrl: '',
			postNo: '',
			applyUserNo: '',
		};
	},
	async mounted() {
		const id = this.$route.params.id;
		await this.$store.dispatch('applicant/APPLICANT_DETAIL', id);
		console.log(this.getApplicantDetail);
		this.companyName = this.getApplicantDetail.companyName;
		this.postSubject = this.getApplicantDetail.postSubject;
		this.postNo = this.getApplicantDetail.postNo;
		const user = this.getApplicantDetail.applyUser;
		this.applyUserNo = user.applyUserNo;
		this.applyUserName = user.applyUserName;
		this.regDate = user.regDate.substr(0, 10);
		this.applyPhoneNo = user.applyPhoneNo;
		this.applyEmail = user.applyEmail;
		const resume = user.resume;
		this.schoolName = resume.schoolName;
		this.isGraduate = resume.isGraduate;
		this.major = resume.major;
		this.subMajor = resume.subMajor;
		this.subMajorType = resume.subMajorType;
		this.isNew = resume.isNew;
		this.career = resume.career;
		this.introduction = resume.introduction;
		this.answer_1 = resume.answer_1;
		this.answer_2 = resume.answer_2;
		this.answer_3 = resume.answer_3;
		this.answer_4 = resume.answer_4;
		this.answer_5 = resume.answer_5;
		this.videoUrl = resume.videoUrl;
	},
	methods: {
		validate() {
			this.modify();
		},
		//저장
		async modify() {
			await this.$store.dispatch('applicant/APPLICANT_MODIFY', {
				applyUserNo: this.applyUserNo,
				applyUserName: this.applyUserName,
				applyPhoneNo: this.applyPhoneNo,
				applyEmail: this.applyEmail,
				isAgree: true,
				postNo: this.postNo,
				resume: {
					schoolName: this.schoolName,
					career: this.career,
					introduction: this.introduction,
					isGraduate: this.isGraduate,
					major: this.major,
					subMajor: this.subMajor,
					subMajorType: this.subMajorType,
					isNew: this.isNew,
					videoUrl: this.videoUrl,
					answer_1: this.answer_1,
					answer_2: this.answer_2,
					answer_3: this.answer_3,
					answer_4: this.answer_4,
					answer_5: this.answer_5,
				},
			});
			this.showModalPopup('수정이 완료 되었습니다.', '/applicant/list');
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
