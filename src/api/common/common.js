import { createInstanceWithAuth } from '../index';
function fileUpload(data) {
	let paramData = {
		filePath: data.filePath,
		contentType: data.contentType,
		fileSize: data.fileSize,
	};
	return createInstanceWithAuth('/auth/signedUrl', paramData, {}, 'application/json; charset=utf-8').post();
}
function companySearch(name) {
	let param = {
		name: '',
	};
	return createInstanceWithAuth('/company/search', {}, param, 'application/json; charset=utf-8').get();
}
export { fileUpload, companySearch };
