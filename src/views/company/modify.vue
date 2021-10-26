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
									<div>{{ id }}</div>
								</div>
							</td>
							<th>비밀번호</th>
							<td>
								<input type="password" v-model="password" />
							</td>
						</tr>
						<tr>
							<th>기업명</th>
							<td>
								<input type="text" v-model="companyName" />
							</td>
							<th>기업 로고</th>
							<td class="filebox">
								<div class="d-flex">
									<img :src="fileUrl" class="logo" v-if="fileUrl !== ''" />
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
							<td>{{ date }} {{ time }}</td>
						</tr>
						<tr>
							<th>관리자 메모</th>
							<td class="" colspan="3">
								<textarea rows="10" cols="80" class="admin_memo" v-model="memo" style="width: 100%"></textarea>
							</td>
						</tr>
					</table>
				</div>
				<div class="d-flex">
					<button style="margin: 50px 5px 0 0" @click="$router.push('/company/list')" class="btn-gray">목록</button>
					<button style="margin: 50px 0" @click="validate" class="btn">수정</button>
				</div>
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
		...mapGetters('company', ['getCompanyDetail']),
		...mapGetters('common', ['getFileInfo']),
	},
	data() {
		return {
			companyUserNo: '',
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
			date: '',
			time: '',
			level: 1,
			fileUrl: '',
		};
	},
	async mounted() {
		const id = this.$route.params.id;
		await this.$store.dispatch('company/COMPANY_DETAIL', id);
		const data = this.getCompanyDetail;
		this.id = data.id;
		this.companyUserNo = data.companyUserNo;
		this.fileUrl = data.companyLogo;
		this.companyName = data.companyName;
		this.departPhoneNo = data.departPhoneNo;
		this.departEmail = data.departEmail;
		this.managerName = data.managerName;
		this.managerPhoneNo = data.managerPhoneNo;
		this.managerEmail = data.managerEmail;
		this.memo = data.memo;
		this.date = data.regDate.substring(0, 10);
		this.time = data.regDate.substring(11, 19);
	},
	methods: {
		validate() {
			this.modify();
		},
		//저장
		async modify() {
			await this.$store.dispatch('company/COMPANY_MODIFY', {
				companyUserNo: this.companyUserNo,
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
				isDel: false,
			});
			this.showModalPopup('수정이 완료 되었습니다.', '/company/list');
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
			await this.$store.dispatch('common/FILE_UPLOAD', {
				filePath: file.name,
				contentType: file.type,
				fileSize: file.size,
			});
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

<style lang="scss" scoped>
.logo {
	width: 80px;
	height: 30px;
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
.btn-gray {
	background-color: #fff;
	text-align: center;
	border: 1px solid #a3a3a3;
	border-radius: 3px;
	color: #272727 !important;
	font-size: 13px;
	width: 80px;
	height: 30px;
	margin-top: -6px;
	cursor: pointer;
}
</style>
