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
						<tr>
							<th>아이디</th>
							<td class="idCheck">
								<input type="text" id="companyId" />
								<button type="button" id="idCheckBtn" onClick="idCheck()">중복 체크</button>
							</td>
							<th>비밀번호</th>
							<td class="">
								<input type="password_empty" />
								<!-- <input type="password" id="password">		
									<button type="button" id="changePwdBtn" onclick="">수정</button> -->
							</td>
						</tr>
						<tr>
							<th>기업명</th>
							<td class="">
								<input type="text" />
							</td>
							<th>기업 로고</th>
							<td class="filebox">
								<input type="text" id="fileImg" value="LOGO" />
								<label for="noFile">파일 선택</label>
								<input type="file" id="noFile" />
							</td>
						</tr>
						<tr>
							<th>채용 연락처</th>
							<td class="">
								<input type="tel" />
							</td>
							<th>채용 이메일</th>
							<td class="">
								<input type="email" />
							</td>
						</tr>
						<tr>
							<th>담당자 이름</th>
							<td class="">
								<input type="text" />
							</td>
							<th>담당자 연락처</th>
							<td class="">
								<input type="tel" />
							</td>
						</tr>
						<tr>
							<th>담당자 이메일</th>
							<td class="">
								<input type="email" />
							</td>
							<th>계정 생성일</th>
							<td><span></span></td>
						</tr>
						<tr>
							<th>관리자 메모</th>
							<td class="" colspan="3">
								<textarea rows="10" cols="80" class="admin_memo"></textarea>
							</td>
						</tr>
					</table>
				</div>
				<!-- </form> -->

				<button style="margin: 50px 0">확인</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style>
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
