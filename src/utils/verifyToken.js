import {jwtDecode} from 'jwt-decode';

const verifyToken = (token) => {
	const decoded = jwtDecode(token);
	return decoded;
};

export default verifyToken;
