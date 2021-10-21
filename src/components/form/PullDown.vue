<template>
	<div class="v-application">
		<v-select v-model="select" :items="items" attach>
			<template v-slot:prepend-item>
				<v-list-item>
					<v-list-item-content>
						<v-text-field v-model="search" placeholder="검색" @input="searchAction"></v-text-field>
					</v-list-item-content>
				</v-list-item>
			</template>
		</v-select>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	data() {
		return {
			select: '',
			codelist: [],
			items: [],
			itemsCopy: [],
			search: '',
		};
	},
	computed: {
		...mapGetters('systemCode', ['getCode']),
	},
	props: ['code', 'data', 'clear'],
	async mounted() {
		await this.$store.dispatch('systemCode/GET_CODE', this.code);
		const kind = this.getCode.channeltuneApiResult.sysCodeList;
		const nameList = [];
		const codeList = [];
		kind.forEach(ele => {
			nameList.push(ele.sysCodeName);
			codeList.push({
				sysCodeName: ele.sysCodeName,
				sysCodeSid: ele.sysCodeSid,
				sysCodeVal: ele.sysCodeVal,
			});
		});
		this.codelist = codeList;
		this.items = nameList;
		this.itemsCopy = [...this.items];
	},
	methods: {
		//검색 옵션
		searchAction() {
			if (!this.search) {
				this.items = this.itemsCopy;
			}
			this.items = this.itemsCopy.filter(items => {
				return items.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
			});
		},
	},
	watch: {
		//초기화
		clear(o, n) {
			if (o !== n) {
				this.select = '';
			}
		},
		//리스트 선택시 상세에 선택값 표기
		data(val) {
			if (val == null) {
				this.select = '';
			} else {
				this.select = val;
			}
		},
		//셀렉트 선택시 시스템 코드 데이터 emit
		select(val) {
			if (val !== '' || val !== undefined) {
				let code = this.codelist.filter(function (arr) {
					return arr.sysCodeName == val;
				});
				if (code[0] !== undefined) {
					this.$emit('selected', code[0]);
				}
			}
		},
	},
};
</script>

<style></style>
