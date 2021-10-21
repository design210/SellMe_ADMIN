<template>
	<div>
		<div class="main_container">
			<div class="sub_container">
				<div class="head_title">
					<div class="company_managing">기업 관리</div>
					<div class="company_modify">기업 정보를 등록/수정 관리합니다.</div>
				</div>

				<div class="head_option">
					<div class="company_net">총 기업 수 : <span>N</span></div>
					<select class="company_option">
						<option>30개씩 보기</option>
						<option>50개씩 보기</option>
						<option>100개씩 보기</option>
					</select>
				</div>

				<table class="table_container">
					<thead>
						<tr>
							<th><input type="checkbox" name="selectall" onclick="selectAll(this)" /></th>
							<th>기업 아이디</th>
							<th>기업명</th>
							<th>연락처</th>
							<th>이메일</th>
							<th>등록일</th>
							<th>진행 중 공고</th>
							<th>기능</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><input type="checkbox" name="checkbox" onclick="checkSelectAll()" /></td>
							<td>companyj</td>
							<td>컴퍼니제이</td>
							<td>010-0000-0000</td>
							<td>sellme@gmail.com</td>
							<td>2021-09-24 20:59:00</td>
							<td>12</td>
							<td><a href="#">수정</a></td>
						</tr>
					</tbody>
				</table>

				<div class="bottom_container">
					<button type="button">선택 삭제</button>
					<div class="pagination">
						<div class="page_prev"><img src="@/assets/img/icon_pg_arrowL.svg" /></div>
						<div class="page_1">1</div>
						<div class="page_2">2</div>
						<div class="page_3">3</div>
						<div class="page_4">4</div>
						<div class="page_5">5</div>
						<div class="page_next"><img src="@/assets/img/icon_pg_arrowR.svg" /></div>
					</div>
					<button type="button">신규 등록</button>
				</div>
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
