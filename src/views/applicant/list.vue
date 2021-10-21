<template>
	<div>
		<div class="main_container">
			<div class="sub_container">
				<div class="head_title">
					<div class="company_managing">지원자 관리</div>
					<div class="company_modify">지원자 정보를 등록/수정 관리합니다.</div>
				</div>

				<div class="search_container">
					<table class="search_table_container">
						<thead>
							<tr class="search_table_menu">
								<th>기간</th>
								<td><input type="date" />~<input type="date" /></td>
							</tr>
							<tr>
								<th>조건 검색</th>
								<td class="search_bar">
									<select class="search_filter" name="" id="">
										<option>기업명</option>
										<option>공고명</option>
										<option>이름</option>
										<option>연락처</option>
										<option>이메일</option>
									</select>
									<input type="text" class="search_input" />
									<button class="search_btn">검색</button>
								</td>
							</tr>
						</thead>
					</table>
				</div>

				<div class="head_option">
					<div class="company_net">총 지원자수 : <span>N</span></div>
					<select class="company_option">
						<option value="30">30개씩 보기</option>
						<option value="50">50개씩 보기</option>
						<option value="100">100개씩 보기</option>
					</select>
				</div>

				<table class="table_container">
					<thead>
						<tr>
							<th><input type="checkbox" name="selectall" onclick="selectAll(this)" /></th>
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
						<tr>
							<td><input type="checkbox" name="checkbox" onclick="checkSelectAll()" /></td>
							<td>companyj</td>
							<td>컴퍼니제이 마케팅 팀장급 모집</td>
							<td>김기타</td>
							<td>010-0000-0000</td>
							<td>sellme@gmail.com</td>
							<td>2021-09-24 20:59:00</td>
							<td>제출</td>
							<td><a href="#">수정</a></td>
						</tr>
						<tr>
							<td><input type="checkbox" name="checkbox" onclick="checkSelectAll()" /></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td>관심</td>
							<td><a href="#">수정</a></td>
						</tr>
						<tr>
							<td><input type="checkbox" name="checkbox" onclick="checkSelectAll()" /></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td>관심</td>
							<td><a href="#">수정</a></td>
						</tr>
						<tr>
							<td><input type="checkbox" name="checkbox" onclick="checkSelectAll()" /></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td>관심</td>
							<td><a href="#">수정</a></td>
						</tr>
						<tr>
							<td><input type="checkbox" name="checkbox" onclick="checkSelectAll()" /></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td>관심</td>
							<td><a href="#">수정</a></td>
						</tr>
						<tr>
							<td><input type="checkbox" name="checkbox" onclick="checkSelectAll()" /></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td>관심</td>
							<td><a href="#">수정</a></td>
						</tr>
						<tr>
							<td><input type="checkbox" name="checkbox" onclick="checkSelectAll()" /></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td>관심</td>
							<td><a href="#">수정</a></td>
						</tr>
						<tr>
							<td><input type="checkbox" name="checkbox" onclick="checkSelectAll()" /></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td>관심</td>
							<td><a href="#">수정</a></td>
						</tr>
					</tbody>
					<!-- <tbody>
					<script>
						for (let x=1; x <11; x++){
							document.write('<tr>');	
							document.write('<td>');
							document.write (('<input type="checkbox" name="checkbox" onclick="checkSelectAll()">'));
							document.write ('</td>');		
								for (let y=1; y<9; y++){
									document.write('<td>');
									document.write ('</td>');
								}						
							document.write ('</tr>');
							}							
						</script>
				</tbody> -->
				</table>

				<div class="bottom_container">
					<button type="button" id="delete_btn" onClick="document.getElementById('modal_container').style.display='block'">선택 삭제</button>
					<div class="pagination">
						<div class="page_prev"><img src="@/assets/img/icon_pg_arrowL.svg" /></div>
						<div class="page_1">1</div>
						<div class="page_2">2</div>
						<div class="page_3">3</div>
						<div class="page_4">4</div>
						<div class="page_5">5</div>
						<div class="page_next"><img src="@/assets/img/icon_pg_arrowR.svg" /></div>
					</div>
					<button type="button" style="margin-right: 20px">엑셀 다운</button>
					<button type="button">신규 등록</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
