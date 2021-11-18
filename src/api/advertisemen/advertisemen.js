import { createInstanceWithAuth } from '../index';
function getAdvertisemenList(data) {
	let param = {
		pageNo: data.pageNo,
		pageSize: data.pageSize,
	};

	return createInstanceWithAuth('/post', {}, param, 'application/json; charset=utf-8').get();
}
function advertisemenReg(data) {
	let paramData = {
		startDate: data.startDate,
		endDate: data.endDate,
		companyUserNo: data.companyUserNo,
		subject: data.subject,
		contents: data.contents,
		text_question_1: data.text_question_1,
		text_question_2: data.text_question_2,
		text_question_3: data.text_question_3,
		text_question_4: data.text_question_4,
		text_question_5: data.text_question_5,
		isEnd: data.isEnd,
		isTextOn: data.isTextOn,
	};
	return createInstanceWithAuth('/post', paramData, {}, 'application/json; charset=utf-8').post();
}
function advertisemenDel(data) {
	let paramData = {
		postNoList: data,
	};
	return createInstanceWithAuth('/post/list', paramData, {}, 'application/json; charset=utf-8').put();
}
function getAdvertisemenDetail(id) {
	return createInstanceWithAuth(`/post/${id}`, {}, {}, 'application/json; charset=utf-8').get();
}
function advertisemenModify(data) {
	let paramData = {
		postNo: data.postNo,
		startDate: data.startDate,
		endDate: data.endDate,
		isDel: data.isDel,
		isEnd: data.isEnd,
		isTextOn: data.isTextOn,
		subject: data.subject,
		contents: data.contents,
		companyName: data.companyName,
		text_question_1: data.text_question_1,
		text_question_2: data.text_question_2,
		text_question_3: data.text_question_3,
		text_question_4: data.text_question_4,
		text_question_5: data.text_question_5,
	};
	return createInstanceWithAuth(`/post/${data.postNo}`, paramData, {}, 'application/json; charset=utf-8').put();
}
export { advertisemenModify, getAdvertisemenList, advertisemenDel, advertisemenReg, getAdvertisemenDetail };
