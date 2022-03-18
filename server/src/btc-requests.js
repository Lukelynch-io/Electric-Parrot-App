// import fetch from "node-fetch";

class HTTPResponseError extends Error {
	constructor(response, ...args) {
		super(`HTTP Error Response: ${response.status} ${response.statusText}`, ...args);
		this.response = response;
	}
}

export default class BtcCliRequestHandler {

	/**
	 * 
	 * @param {String} rpcusername 
	 * @param {String} rpcpassword 
	 * @param {String} url 
	 * @param {number} port 
	 */
	constructor(rpcusername, rpcpassword, url, port) {
		this.rpcusername = rpcusername;
		this.rpcpassword = rpcpassword;
		this.auth = btoa(`${rpcusername}:${rpcpassword}`).toString('base64');
		console.log(this.auth);
		this.url = url;
		this.port = port;

	}

	/**
	 * 
	 * @param {String} method 
	 * @param {Array} params 
	 */
	async sendBtcCliCommand(method, params = []) {
		const cliRequest = {
			jsonrpc: "1.0",
			id: "curltext",
			method: method,
			params: params
		};

		const response = await fetch(`http://${this.url}:${this.port}`, {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Basic bG5kOmxpZ2h0bmluZw==`,
				'Access-Control-Allow-Origin': 'http://lvh.me:18443/',
				'Access-Control-Allow-Methods': 'POST'
			},
			body: JSON.stringify(cliRequest),
		});
		console.log(await response.headers);

		if (response.ok) {
			return response.json();
		} else {
			throw new HTTPResponseError(response);
		}
	}
}
