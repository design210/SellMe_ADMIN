import { createInstanceWithAuth } from '../index';
function getApplicantList(data) {
	let param = {
		pageNo: data.pageNo,
		pageSize: data.pageSize,
		applyEmail: data.applyEmail,
		applyPhoneNo: data.applyPhoneNo,
		applyUserName: data.applyUserName,
		applierCompanyName: data.applierCompanyName,
		applierPostName: data.applierPostName,
		startDate: data.startDate,
		endDate: data.endDate,
	};
	return createInstanceWithAuth('/apply', {}, param, 'application/json; charset=utf-8').get();
}
function applicantReg(data) {
	let paramData = {
		applyUserName: data.applyUserName,
		applyPhoneNo: data.applyPhoneNo,
		applyEmail: data.applyEmail,
		isAgree: data.isAgree,
		postNo: data.postNo,
		resume: {
			schoolName: data.resume.schoolName,
			career: data.resume.career,
			introduction: data.resume.introduction,
			isGraduate: data.resume.isGraduate,
			major: data.resume.major,
			subMajor: data.resume.subMajor,
			subMajorType: data.resume.subMajorType,
			isNew: data.resume.isNew,
			videoUrl: data.resume.videoUrl,
			answer_1: data.resume.answer_1,
			answer_2: data.resume.answer_2,
			answer_3: data.resume.answer_3,
			answer_4: data.resume.answer_4,
			answer_5: data.resume.answer_5,
		},
	};
	return createInstanceWithAuth('/apply', paramData, {}, 'application/json; charset=utf-8').post();
}
function applicantDel(data) {
	let paramData = {
		applyUserNoList: data,
	};
	return createInstanceWithAuth('/apply/list/delete', paramData, {}, 'application/json; charset=utf-8').put();
}
function getApplicantDetail(id) {
	return createInstanceWithAuth(`/apply/${id}/post`, {}, {}, 'application/json; charset=utf-8').get();
}
function applicantModify(data) {
	let paramData = {
		applyUserName: data.applyUserName,
		applyPhoneNo: data.applyPhoneNo,
		applyEmail: data.applyEmail,
		isAgree: data.isAgree,
		postNo: data.postNo,
		resume: {
			schoolName: data.resume.schoolName,
			career: data.resume.career,
			introduction: data.resume.introduction,
			isGraduate: data.resume.isGraduate,
			major: data.resume.major,
			subMajor: data.resume.subMajor,
			subMajorType: data.resume.subMajorType,
			isNew: data.resume.isNew,
			videoUrl: data.resume.videoUrl,
			answer_1: data.resume.answer_1,
			answer_2: data.resume.answer_2,
			answer_3: data.resume.answer_3,
			answer_4: data.resume.answer_4,
			answer_5: data.resume.answer_5,
		},
	};
	return createInstanceWithAuth(`/apply/${data.applyUserNo}`, paramData, {}, 'application/json; charset=utf-8').put();
}

function getApplicantfind(id) {
	return createInstanceWithAuth(`/post/${id}/company`, {}, {}, 'application/json; charset=utf-8').get();
}
export { applicantReg, getApplicantfind, getApplicantList, getApplicantDetail, applicantModify, applicantDel };
