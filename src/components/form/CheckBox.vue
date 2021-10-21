<template>
	<div class="v-application height">
		<div v-for="(item, index) in items" :key="index" class="check-group">
			<v-checkbox v-model="selected" class="mr10" :label="item.sysCodeName" :value="item.sysCodeSid"></v-checkbox>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	data() {
		return {
			selected: [],
			items: [],
			check1: '',
		};
	},
	computed: {
		...mapGetters('systemCode', ['getCode']),
	},
	props: ['code', 'data', 'clear'],
	async mounted() {
		await this.$store.dispatch('systemCode/GET_CODE', this.code);
		const check = this.getCode.channeltuneApiResult.sysCodeList;
		this.items = check;
	},
	watch: {
		//초기화
		clear(o, n) {
			if (o !== n) {
				this.select = '';
			}
		},
		//체크박스 값 받아오기
		data(val) {
			if (val !== null) {
				const arr = val.split('|');
				this.selected = arr;
			}
		},
		//체크박스 변경시
		selected(data) {
			let dataJoin = data.join('|');
			this.$emit('selected', dataJoin);
		},
	},
};
</script>

<style scoped>
.check-group {
	display: flex;
}
.height {
	height: 30px;
}
</style>
