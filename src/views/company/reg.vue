<template>
	<div>
		<div class="main_container">
			<div class="sub_container">
				<div class="head_title">
					<div class="company_managing">기업 관리</div>
					<div class="company_modify">기업 정보를 등록/수정 관리합니다.</div>
				</div>

				<div class="head_option">
					<div class="company_info">기업 정보</div>
				</div>

				<!-- <form class="register_form"> -->
				<div class="search_container">
					<table class="search_table_container">
						<colgroup>
							<col width="120" />
							<col width="30%" />
							<col width="120" />
							<col width="30%" />
						</colgroup>
						<tr>
							<th>아이디</th>
							<td class="idCheck">
								<div class="d-flex">
									<div>
										<input type="text" v-model="id" />
									</div>
									<div style="margin-left: 5px; margin-top: 3px">
										<button type="button" @click="idCheck" v-if="idcheck === false" class="btn">중복 체크</button>
										<button type="button" v-else class="btn">체크 완료</button>
									</div>
								</div>
							</td>
							<th>비밀번호</th>
							<td class="">
								<input type="password" v-model="password" />
								<!-- <input type="password" id="password">		
									<button type="button" id="changePwdBtn" onclick="">수정</button> -->
							</td>
						</tr>
						<tr>
							<th>기업명</th>
							<td class="">
								<input type="text" v-model="companyName" />
							</td>
							<th>기업 로고</th>
							<td class="filebox">
								<div class="d-flex">
									<label for="noFile" style="margin-left: 0">파일 선택</label>
									<v-file-input class="file-input" id="noFile" accept="image/*" @change="selectFile" placeholder="선택된 파일 없음"></v-file-input>
								</div>
							</td>
						</tr>
						<tr>
							<th>채용 연락처</th>
							<td class="">
								<input type="tel" v-model="departPhoneNo" />
							</td>
							<th>채용 이메일</th>
							<td class="">
								<input type="email" v-model="departEmail" />
							</td>
						</tr>
						<tr>
							<th>담당자 이름</th>
							<td class="">
								<input type="text" v-model="managerName" />
							</td>
							<th>담당자 연락처</th>
							<td class="">
								<input type="tel" v-model="managerPhoneNo" />
							</td>
						</tr>
						<tr>
							<th>담당자 이메일</th>
							<td class="">
								<input type="email" v-model="managerEmail" />
							</td>
							<th>계정 생성일</th>
							<td><span></span></td>
						</tr>
						<tr>
							<th>관리자 메모</th>
							<td class="" colspan="3">
								<textarea rows="10" cols="80" class="admin_memo" v-model="memo" style="width: 100%"></textarea>
							</td>
						</tr>
					</table>
				</div>
				<!-- </form> -->

				<button style="margin: 50px 0" @click="validate" class="btn">확인</button>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import AlertModal from '@/components/modal/Alert';
import { getPopupOpt } from '@/utils/modal';
import axios from 'axios';
export default {
	computed: {
		...mapGetters('login', ['getIdCheck']),
		...mapGetters('common', ['getFileInfo']),
	},
	data() {
		return {
			companyName: '',
			id: '',
			password: '',
			companyLogo: '',
			departPhoneNo: '',
			departEmail: '',
			managerName: '',
			managerPhoneNo: '',
			managerEmail: '',
			memo: '',
			level: 1,
			fileUrl: '',
			idcheck: false,
		};
	},
	methods: {
		async idCheck() {
			if (this.id !== '') {
				await this.$store.dispatch('login/ID_CHECK', this.id);
				console.log(this.getIdCheck);
				if (this.getIdCheck.msg === '중복된 아이디가 있습니다') {
					this.showModalPopup('중복된 아이디가 있습니다.<br/>다른 아이디를 설정해주세요.');
					this.id = '';
					this.idcheck = false;
				} else {
					this.showModalPopup('사용 가능한 아이디입니다.');
					this.idcheck = true;
				}
			} else {
				this.showModalPopup('아이디를 입력해주세요.');
			}
		},
		validate() {
			if (this.id == '') {
				this.showModalPopup('아이디를 입력해주세요.');
				return false;
			}
			if (this.idcheck === false) {
				this.showModalPopup('아이디 중복체크를 진행해주세요.');
				return false;
			}
			if (this.id == '') {
				this.showModalPopup('비밀번호를 입력해주세요.');
				return false;
			}
			this.reg();
		},
		//저장
		async reg() {
			await this.$store.dispatch('company/COMPANY_REG', {
				companyName: this.companyName,
				id: this.id,
				password: this.password,
				memo: this.memo,
				companyLogo: this.fileUrl,
				departPhoneNo: this.departPhoneNo,
				departEmail: this.departEmail,
				managerName: this.managerName,
				managerPhoneNo: this.managerPhoneNo,
				managerEmail: this.managerEmail,
				level: this.level,
			});
			alert('가입이 완료 되었습니다.');
			this.$router.push('/company/list');
		},
		//알럿 모달
		showModalPopup(msg) {
			this.$modal.show(AlertModal, { msg }, getPopupOpt('AlertModal', '280px', 'auto', false));
		},
		//파일 업로드
		selectFile(file) {
			this.upload(file);
		},
		async upload(file) {
			await this.$store.dispatch('common/FILE_UPLOAD', {
				filePath: file.name,
				contentType: file.type,
				fileSize: file.size,
			});
			console.log(this.getFileInfo);
			//const url = this.getFileInfo.s3Url;
			const url = 'https://s3.ap-northeast-2.amazonaws.com/sellme.medias/' + this.getFileInfo.fileName;

			await axios
				.put(url, file)
				.then(response => {
					this.fileUrl = response.config.url;
				})
				.catch(error => console.log(error));
		},
	},
};
</script>

<style lang="scss">
.file-input {
	height: 30px;
	margin-top: 0 !important;
	padding-top: 0 !important;
	& .v-input__prepend-outer {
		margin: 0 0 0 5px !important;
		width: 0 !important;
		height: 0 !important;
	}
	& .v-input__slot {
		&:before {
			border: 0 !important;
		}
		&:after {
			border: 0 !important;
		}
	}
	& .v-file-input__text {
		font-size: 12px;
	}
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
