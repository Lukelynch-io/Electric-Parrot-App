import fetch from 'node-fetch';


const baseCLIRequest = {
    jsonrpc: "1.0",
    id: "curltext",
    method: "getbalance",
    params: []
};

async function sendRequest() {
    
    const response = await fetch('http://localhost:18443', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${btoa('lnd:lightning')}`
        },
        body: JSON.stringify(baseCLIRequest)
    });
    const data = await response.json();
    console.log(data);
}

sendRequest();
