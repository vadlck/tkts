import serverRequest from './serverRequest';

export default {
	authorize(login, password) {
		const token = this.genToken();

		this.setCookie('site', token);

		return {
			login,
			token
		}
	},
	async unauthorize() {
		document.cookie = 'site=;Max-Age=0';
	},
	getToken () {
		return !!~document.cookie.indexOf('site');
	},
	getCurrentUser: async () => {
		let token = !!~document.cookie.indexOf('site');
		
		if(!token)
			return;
		
		const user = await serverRequest.fakeGet('/getCurrentUser?token=', {
			login:'TestUser',
			token: 'fake'
		});

		return user;
	},
	genToken: (login, password) => 'fake_cookie',
	setCookie(name, value, minutes = 60) {
		const currentDate = new Date();
		currentDate.setTime(currentDate.getTime() + (minutes * 60 * 1000));
		const expires = `expires=${currentDate.toUTCString()}`;
		document.cookie = `${name}=${value};${expires}`;
	}
}