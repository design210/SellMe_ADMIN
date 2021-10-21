<template>
	<div class="modal-wrap">
		<div class="body">
			<slot name="body"></slot>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		close() {
			this.$emit('close');
		},
	},
};
</script>

<style lang="scss" scoped>
.modal-wrap {
	padding: 30px;
}
.body {
	padding: 20px 0 0 0;
}
</style>
