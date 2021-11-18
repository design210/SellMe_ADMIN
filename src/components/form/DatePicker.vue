<template>
	<v-menu v-model="visible" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
		<template v-slot:activator="{ on, attrs }">
			<v-text-field v-model="date" v-bind="attrs" v-on="on" class="date" @click="hangleDelete" autocomplete="no"></v-text-field>
		</template>
		<v-date-picker v-model="date" @input="visible = false" locale="ko" :picker-date.sync="pickerDate" autocomplete="no"></v-date-picker>
	</v-menu>
</template>

<script>
import $ from 'jquery';
export default {
	data() {
		return {
			date: '',
			visible: false,
			pickerDate: null,
		};
	},
	watch: {
		date(value) {
			this.$emit('updateDate', value);
		},
		pickerDate() {
			this.hangleDelete();
		},
		propdate(val) {
			this.date = val;
		},
		current(val) {
			if (val !== '') {
				this.date = val;
			}
		},
		clear(o, n) {
			if (o !== n) {
				this.date = '';
			}
		},
	},
	props: ['propdate', 'clear', 'current'],
	methods: {
		//'일' 제거
		hangleDelete() {
			let time = setTimeout(function () {
				$('.v-date-picker-table .v-btn__content').each(function () {
					let il = $(this)
						.text()
						.substr($(this).text().length - 1, 1);
					let change = $(this).text().slice(0, -1);
					if (il == '일') {
						$(this).text(change);
					}
				});
				clearInterval(time);
			}, 100);
		},
	},
};
</script>

<style>
.v-text-field {
	padding-top: 0;
	margin-top: 0;
}
</style>
