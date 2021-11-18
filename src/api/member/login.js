import axios from 'axios';
import { baseURL } from '../index';
import { createInstanceWithAuth } from '../index';
//로그인 체크
async function loginUser(userData) {
	try {
		const response = await axios.post(`${baseURL}/company/login`, userData, {
			validateStatus: function (status) {
				// 상태 코드가 402 이상일 경우 거부. 나머지(402보다 작은)는 허용.
				return status < 500;
			},
		});
		return response;
	} catch (error) {
		console.log('error :', error);
	}
}

function idCheck(id) {
	let paramData = {
		id: id,
	};
	return createInstanceWithAuth('/company/exist', paramData, {}, 'application/json; charset=utf-8').post();
}
export { loginUser, idCheck };
