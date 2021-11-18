<template>
	<div class="wrap">
		<v-snackbar v-model="snackbar" :multi-line="multiLine" absolute top right style="z-index: 1000; padding-top: 60px" :color="colors" dark>
			{{ text }}
			<template v-slot:action="{ attrs }">
				<v-btn color="white" text v-bind="attrs" @click="close"> 닫기 </v-btn>
			</template>
		</v-snackbar>
	</div>
</template>

<script>
export default {
	props: {
		open: Boolean,
		txt: String,
		color: String,
		modalClose: Boolean,
	},
	data() {
		return {
			multiLine: true,
			snackbar: false,
			text: '',
			colors: '',
		};
	},
	watch: {
		open(data) {
			this.snackbar = data;
		},
		txt(data) {
			this.text = data;
		},
		color(data) {
			this.colors = data;
		},
	},
	methods: {
		close() {
			this.snackbar = false;
			this.$emit('reset', { close: this.modalClose });
		},
	},
};
</script>
