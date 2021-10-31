<template>
	<div class="v-application">
		<v-dialog ref="dialog" v-model="dateModal" :return-value.sync="date" persistent width="290px">
			<template v-slot:activator="{ on }">
				<v-text-field v-model="date" readonly v-on="on" @click="hangleDelete"></v-text-field>
			</template>
			<v-date-picker v-model="date" scrollable locale="ko" :picker-date.sync="pickerDate">
				<v-spacer></v-spacer>
				<v-btn color="primary" @click="dateModal = false">취소</v-btn>
				<v-btn color="primary" @click="timeModal = true">확인</v-btn>
			</v-date-picker>
		</v-dialog>

		<v-dialog ref="dialog2" v-model="timeModal" :return-value.sync="time" persistent width="290px">
			<v-time-picker v-if="timeModal" v-model="time" format="24hr">
				<v-spacer></v-spacer>
				<v-btn color="primary" @click="timeModal = false">취소</v-btn>
				<v-btn color="primary" @click="set()">확인</v-btn>
			</v-time-picker>
		</v-dialog>
	</div>
</template>

<script>
import $ from 'jquery';
export default {
	props: ['current'],
	name: 'DateTimePicker',
	data: () => ({
		date: '',
		dateModal: false,
		time: '',
		timeModal: false,
		pickerDate: null,
	}),
	watch: {
		date(date) {
			this.$emit('date', date);
		},
		pickerDate() {
			this.hangleDelete();
		},
		current(val) {
			if (val !== '') {
				this.date = val;
			}
		},
	},
	methods: {
		set() {
			this.date = this.date + ' ' + this.time;
			this.$refs.dialog.save(this.date);
			this.$refs.dialog2.save(this.time);
		},
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
