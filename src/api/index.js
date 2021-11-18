import axios from 'axios';
import { setInterceprors } from '@/api/common/interceptors';
export const baseURL = 'http://3.38.88.178:3000';
//헤더 인터셉터
function createInstanceWithAuth(url, paramData, parmas, type) {
	const instance = axios.create({
		baseURL: `${baseURL}${url}`,
		params: parmas,
		validateStatus: function (status) {
			// 상태 코드가 402 이상일 경우 거부. 나머지(402보다 작은)는 허용.
			return status < 500;
		},
	});
	return setInterceprors(instance, paramData, type);
}
export { createInstanceWithAuth };
