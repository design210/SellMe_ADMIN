<template>
	<div>
		<div class="main_container">
			<div class="sub_container">
				<div class="head_title">
					<div class="company_managing">공고 관리</div>
					<div class="company_modify">공고 정보를 등록/수정 관리합니다.</div>
				</div>

				<div class="head_option">
					<div class="company_net">총 공고 수 : <span>N</span></div>
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
							<th>상태</th>
							<th>기업명</th>
							<th>공고명</th>
							<th>텍스트 자소서</th>
							<th>지원자 열람 가능일</th>
							<th>지원자</th>
							<th>등록일</th>
							<th>기능</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><input type="checkbox" name="checkbox" onclick="checkSelectAll()" /></td>
							<td>진행 중</td>
							<td>컴퍼니제이</td>
							<td>퍼포먼스 마케터 (팀장급)</td>
							<td>Y</td>
							<td>2021-09-24 20:59:00</td>
							<td>1명 [보기]</td>
							<td>2021-10-18 11:16:00</td>
							<td><a href="#">수정</a></td>
						</tr>
						<tr>
							<td><input type="checkbox" name="checkbox" onclick="checkSelectAll()" /></td>
							<td>마감</td>
							<td>-</td>
							<td>-</td>
							<td>N</td>
							<td>2021-09-24 20:59:00</td>
							<td>-명 [보기]</td>
							<td>2021-10-18 11:16:00</td>
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
							<td></td>
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
							<td></td>
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
							<td></td>
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
							<td></td>
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
							<td></td>
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
							<td></td>
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

<style></style>
