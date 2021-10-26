import { createInstanceWithAuth } from '../index';
function getAdvertisemenList(data) {
	let param = {
		pageNo: data.pageNo,
		pageSize: data.pageSize,
	};

	return createInstanceWithAuth('/post', {}, param, 'application/json; charset=utf-8').get();
}
// function companyReg(data) {
// 	let paramData = {
// 		companyName: data.companyName,
// 		id: data.id,
// 		password: data.password,
// 		memo: data.memo,
// 		companyLogo: data.companyLogo,
// 		departPhoneNo: data.departPhoneNo,
// 		departEmail: data.departEmail,
// 		managerName: data.managerName,
// 		managerPhoneNo: data.managerPhoneNo,
// 		managerEmail: data.managerEmail,
// 		level: data.level,
// 	};
// 	return createInstanceWithAuth('/company', paramData, {}, 'application/json; charset=utf-8').post();
// }
function advertisemenDel(data) {
	let paramData = {
		postNoList: data,
	};
	return createInstanceWithAuth('/post/list', paramData, {}, 'application/json; charset=utf-8').put();
}
// function getCompanyDetail(id) {
// 	return createInstanceWithAuth(`/company/${id}`, {}, {}, 'application/json; charset=utf-8').get();
// }
// function companyModify(data) {
// 	let paramData = {
// 		companyUserNo: data.companyUserNo,
// 		companyName: data.companyName,
// 		id: data.id,
// 		//password: data.password,
// 		memo: data.memo,
// 		companyLogo: data.companyLogo,
// 		departPhoneNo: data.departPhoneNo,
// 		departEmail: data.departEmail,
// 		managerName: data.managerName,
// 		managerPhoneNo: data.managerPhoneNo,
// 		managerEmail: data.managerEmail,
// 		level: data.level,
// 		isDel: data.idDel,
// 	};
// 	return createInstanceWithAuth(`/company/${data.companyUserNo}`, paramData, {}, 'application/json; charset=utf-8').put();
// }
export { getAdvertisemenList, advertisemenDel };
