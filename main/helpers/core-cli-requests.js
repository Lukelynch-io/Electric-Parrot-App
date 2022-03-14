import fetch from 'node-fetch';
const credentials = Buffer.from('lnd:lightning'); //DO NOT USE THIS PASSWORD. YOU WILL BE HACKED!!!

console.log(credentials.toString('base64'));

const baseCLIRequest = {
    jsonrpc: "1.0",
    id: "curltext",
    method: "getbestblockhash",
    params: []
};

export async function sendRequest() {
    
    const response = await fetch('http://localhost:18443', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${credentials.toString('base64')}`
        },
        body: JSON.stringify(baseCLIRequest)
    });
    return response;
}