import { data } from 'jquery';
import { createInstanceWithAuth } from '../index';
function companyReg(data) {
	let paramData = {
		companyName: data.companyName,
		id: data.id,
		password: data.password,
		memo: data.memo,
		companyLogo: data.companyLogo,
		departPhoneNo: data.departPhoneNo,
		departEmail: data.departEmail,
		managerName: data.managerName,
		managerPhoneNo: data.managerPhoneNo,
		managerEmail: data.managerEmail,
		level: data.level,
	};
	return createInstanceWithAuth('/company', paramData, {}, 'application/json; charset=utf-8').post();
}
function getCompanyList(data) {
	let param = {
		pageNo: data.pageNo,
		pageSize: data.pageSize,
	};
	return createInstanceWithAuth('/company', {}, param, 'application/json; charset=utf-8').get();
}
function companyDel(data) {
	let paramData = {
		companyUserNoList: data,
	};
	return createInstanceWithAuth('/company/list', paramData, {}, 'application/json; charset=utf-8').put();
}
export { companyReg, getCompanyList, companyDel };
