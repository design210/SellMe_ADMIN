<template>
	<div>
		<v-file-input accept="image/*" label="File input" @change="selectFile" placeholder="파일첨부"></v-file-input>
		{{ src }}
		<img :src="src" />
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	data() {
		return {
			src: '',
		};
	},
	computed: {
		...mapGetters('common', ['getFileInfo']),
	},
	methods: {
		selectFile(data) {
			this.upload(data);
		},
		async upload(data) {
			await this.$store.dispatch('common/FILE_UPLOAD', {
				filePath: data.name,
				contentType: data.type,
				fileSize: data.size,
			});
			//this.src = 'https://s3.ap-northeast-2.amazonaws.com/sellme.medias/mvpMedias/images/' + this.getFileInfo.fileName;
		},
	},
};
</script>

<style></style>
