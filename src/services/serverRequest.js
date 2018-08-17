import axios from 'axios';

class ServerRequest {
	constructor() {
		this.serverURL = 'http://localhost:8080';
	}

	async get(path) {
		let response = await axios.get(path);
		return response.data;
	}

	async fakeGet(path, result) {
		return new Promise(resolve => {
			setTimeout(_ => resolve(result || true), 200);
		});
	}
}

export default new ServerRequest();