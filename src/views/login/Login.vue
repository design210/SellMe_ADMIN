<template>
	<div>
		<main class="login">
			<div class="login_container">
				<div class="login_title">
					<!-- <h4>셀미 자기소개 영상 채용</h4>
					<h2>기업 관리자 로그인</h2> -->
					<h2>셀미 ADMIN</h2>
				</div>

				<form class="form_login">
					<div class="longin_id">
						<label for="idInput">아이디</label>
						<input type="text" name="adminId" id="idInput" placeholder="아이디를 입력해주세요." v-model="id" />
						<span class="errmess" v-if="idError">아이디를 입력해주세요.</span>
					</div>
					<div class="longin_password">
						<label for="passwordInput">비밀번호</label>
						<input type="password" id="passwordInput" placeholder="비밀번호를 입력해주세요." v-model="pw" />
						<span class="errmess" v-if="pwError">비밀번호를 입력해주세요.</span>
					</div>
					<div>
						<button type="button" id="loginBtn" @click="login">로그인</button>
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import AlertModal from '@/components/modal/Alert';
import { getPopupOpt } from '@/utils/modal';
export default {
	computed: {
		...mapGetters('login', ['getLoginInfo']),
	},
	data() {
		return {
			username: '',
			password: '',
			logMessage: '',
			id: '',
			pw: '',
			idError: false,
			pwError: false,
			companyName: '',
		};
	},
	methods: {
		login() {
			if (this.id == '') {
				this.idError = true;
				return false;
			}
			if (this.pw == '') {
				this.pwError = true;
				return false;
			}
			this.submitLogin();
		},
		//알럿 모달
		showModalPopup(msg) {
			this.$modal.show(AlertModal, { msg }, getPopupOpt('AlertModal', '280px', 'auto', false));
		},
		async submitLogin() {
			try {
				const userData = {
					id: this.id,
					password: this.pw,
				};
				await this.$store.dispatch('login/LOGIN', userData);
				if (this.getLoginInfo.msg === undefined) {
					if (this.getLoginInfo.token !== '') {
						this.$router.push('/main');
					} else {
						this.logMessage = this.getLoginInfo.message;
					}
				} else {
					this.showModalPopup('아이디/비밀번호가<br />일치하지 않습니다.');
				}
			} catch (error) {
				console.log('error:', error);
			} finally {
				this.initForm();
			}
		},
		initForm() {
			this.id = '';
			this.pw = '';
		},
	},
};
</script>
<style scoped>
/* login  */
.login_title {
	height: 80px;
	text-align: center;
	margin: auto;
	margin-top: 12%;
}
.login_title h4 {
	color: #646464;
	font-size: 20px;
	font-weight: 700;
}
.login_title h2 {
	color: #1d1c1c;
	font-size: 32px;
	font-weight: 700;
}
.form_login {
	width: 280px;
	font-size: 14px;
	font-weight: 600;
	margin: auto;
}
.form_login input {
	width: 280px;
	height: 50px;
	border: 1px solid #a9a9a9;
	border-radius: 4px;
	font-size: 15px;
	color: #707070;
	margin-top: 3%;
}
.longin_id {
	margin-bottom: 10%;
	margin-top: 10%;
}
.longin_password {
	margin-bottom: 10%;
}
#idInput {
	background-image: url(../../assets/img/icon_person.svg);
	background-repeat: no-repeat;
	background-position: 7%;
	text-indent: 15%;
}
#passwordInput {
	background-image: url(../../assets/img/icon_lock.svg);
	background-repeat: no-repeat;
	background-position: 7%;
	text-indent: 15%;
}
input::-webkit-input-placeholder {
	padding-left: 3%;
}

#loginBtn {
	background-color: #ff4839;
	border: 1px solid #ff4839;
	border-radius: 5px;
	color: #ffffff;
	font-size: 16px;
	font-weight: 700;
	width: 280px;
	height: 50px;
	margin-top: 3%;
	cursor: pointer;
}
</style>
