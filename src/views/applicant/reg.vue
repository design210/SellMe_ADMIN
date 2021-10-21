<template>
	<div>
		<div class="main_container">
			<div class="sub_container">
				<div class="head_title">
					<div class="company_managing">지원자 관리</div>
					<div class="company_modify">지원자 정보를 등록/수정 관리합니다.</div>
				</div>

				<!-- <form class="register_form"> -->
				<div class="head_option" style="margin-bottom: 0">
					<div class="company_info">공고 정보 설정</div>
					<table class="search_table_container">
						<tr>
							<th>기업 선택</th>
							<td class="idCheck">
								<input type="text" id="companyId" value="" readonly />
								<button type="button" id="companySearchBtn" onClick="companySearch()">검색</button>
							</td>
						</tr>
						<tr>
							<th>공고 선택</th>
							<td>
								<select>
									<option></option>
								</select>
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
								<input type="text" id="companyId" />
							</td>
							<th>제출일</th>
							<td class="">
								<input type="datetime-local" />
							</td>
						</tr>
						<tr>
							<th>지원자 연락처</th>
							<td class="">
								<input type="tel" />
							</td>
							<th>지원자 이메일</th>
							<td class="">
								<input type="email" />
							</td>
						</tr>
						<tr>
							<th>학교명</th>
							<td class="">
								<input type="text" />
							</td>
							<th>졸업 여부</th>
							<td class="">
								<select>
									<option>선택</option>
									<option>학사 졸업</option>
									<option>학사 재학 중</option>
									<option>석사 졸업</option>
									<option>석사 재학 중</option>
									<option>박사 졸업</option>
									<option>박사 재학 중</option>
								</select>
							</td>
						</tr>
						<tr>
							<th>전공 입력 (주전공)</th>
							<td class="">
								<input type="text" />
							</td>
							<th>전공 입력 (부/복수 전공)</th>
							<td class="">
								<input type="text" />
								<select>
									<option>선택</option>
									<option>복수 전공</option>
									<option>부전공</option>
								</select>
							</td>
						</tr>
						<tr>
							<th>경력 여부</th>
							<td class="">
								<input type="radio" name="careerCheck" id="radioMargin" value="신입" /> 신입
								<input type="radio" name="careerCheck" id="radioMargin" value="경력" /> 경력
							</td>
							<th>경력 기간</th>
							<td class="">
								<input type="text" />
								<span>개월</span>
							</td>
						</tr>
						<tr>
							<th>이력 내용 입력</th>
							<td class="" colspan="3">
								<textarea rows="3" cols="80" class="admin_memo"></textarea>
							</td>
						</tr>
					</table>
				</div>

				<div class="head_option" style="margin-bottom: 0">
					<div class="company_info">영상 자기소개 파일 등록</div>
					<table class="search_table_container">
						<tr>
							<th>파일 등록</th>
							<td class="filebox">
								<label for="noFile">파일 선택</label>
								<input type="file" id="noFile" />
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
								<textarea rows="2" cols="80" class="admin_memo"></textarea>
							</td>
						</tr>
						<tr>
							<td class="" colspan="3">
								<div class="items">항목2</div>
								<textarea rows="2" cols="80" class="admin_memo"></textarea>
							</td>
						</tr>
						<tr>
							<td class="" colspan="3">
								<div class="items">항목3</div>
								<textarea rows="2" cols="80" class="admin_memo"></textarea>
							</td>
						</tr>
						<tr>
							<td class="" colspan="3">
								<div class="items">항목4</div>
								<textarea rows="2" cols="80" class="admin_memo"></textarea>
							</td>
						</tr>
						<tr>
							<td class="" colspan="3">
								<div class="items">항목5</div>
								<textarea rows="2" cols="80" class="admin_memo"></textarea>
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
