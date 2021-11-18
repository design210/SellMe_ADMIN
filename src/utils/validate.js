function CheckPassword(pw) {
	if (!/^[a-zA-Z0-9]{8,50}$/.test(pw)) {
		return false;
	}
	return true;
}
function verifyEmail(emailVal) {
	var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
	if (emailVal.match(regExp) != null) {
		return true;
	} else {
		return false;
	}
}

export { CheckPassword, verifyEmail };
