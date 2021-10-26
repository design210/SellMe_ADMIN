<template>
	<div>
		<div class="main_container">
			<div class="sub_container">
				<div class="head_title">
					<div class="company_managing">공고 관리</div>
					<div class="company_modify">공고 정보를 등록/수정 관리합니다.</div>
				</div>

				<div class="head_option">
					<div class="company_info" style="margin-bottom: 0">공고 정보 설정</div>
				</div>

				<div class="search_container">
					<table class="search_table_container">
						<tr>
							<th>기업명</th>
							<td class="idCheck">
								<input type="text" id="companyId" />
								<button type="button" @click="showModalPopup" style="margin-left: 5px" class="btn">검색</button>
							</td>
							<th>상태</th>
							<td class="radios">
								<input type="radio" name="status" id="radioMargin" value="진행 중" checked /> 진행 중
								<input type="radio" name="status" id="radioMargin" value="마감" /> 마감
							</td>
						</tr>
						<tr>
							<th>모집 분야 (공고명)</th>
							<td colspan="3">
								<input type="text" />
								<span id="input_ex">EX) 2021 하반기 각 부문 공개 채용, 리빙 MD (가전/가구/주방,생활용품) 상시 채용</span>
							</td>
						</tr>
						<tr>
							<th>지원자 열람 가능일</th>
							<td colspan="3">
								<div class="d-flex align-center">
									<time-picker @date="dateSetProp" class="date-time"></time-picker>
									<span style="margin-left: 10px">까지</span>
								</div>
							</td>
						</tr>
					</table>
				</div>

				<div class="head_option" style="margin-bottom: 0">
					<div class="company_info">영상 자기소개 설정</div>
					<table class="search_table_container">
						<tr>
							<th>영상 자기소개 항목</th>
							<td class="" colspan="3">
								<textarea
									rows="3"
									cols="80"
									placeholder="회사에 지원하는 이유와 본인의 경험을 이어서 말해주세요."
									class="admin_memo"
									style="width: 100%"
								></textarea>
							</td>
						</tr>
					</table>
				</div>

				<div class="head_option">
					<div class="company_info">텍스트 자기소개 설정</div>
					<table class="search_table_container">
						<tr>
							<th>텍스트 자기소개 사용 여부</th>
							<td>
								<input type="radio" name="useCheck" id="radioMargin" value="사용" checked /> 사용
								<input type="radio" name="useCheck" id="radioMargin" value="미사용" /> 미사용
							</td>
						</tr>
						<tr>
							<th rowspan="5">자기소개 항목 설정</th>
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

				<button style="margin: 50px 0" class="btn">확인</button>
			</div>
		</div>
	</div>
</template>

<script>
import CompanySearchModal from '@/components/modal/CompanySearch';
import { getPopupOpt } from '@/utils/modal';
import TimePicker from '@/components/form/TimePicker.vue';
export default {
	data() {
		return {
			date: '',
		};
	},
	components: {
		TimePicker,
	},
	methods: {
		//알럿 모달
		showModalPopup(msg) {
			this.$modal.show(CompanySearchModal, { msg }, getPopupOpt('CompanySearchModal', '400px', 'auto', false));
		},
		dateSetProp(date) {
			this.date = date;
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
