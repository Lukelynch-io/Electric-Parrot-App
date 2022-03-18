import fs from "fs";
import fetch from "node-fetch";

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
        this.auth = Buffer.from(`${rpcusername}:${rpcpassword}`).toString('base64');
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
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${this.auth}`
            },
            body: JSON.stringify(cliRequest)
        });

        if (response.ok) {
            return response.json();
        } else {
            throw new HTTPResponseError(response);
        }
    }
}

let btcRequests = new BtcCliRequestHandler('lnd', 'lightning', 'localhost', 18443);

console.log(await btcRequests.sendBtcCliCommand('loadwallet', ['testwallet']));
