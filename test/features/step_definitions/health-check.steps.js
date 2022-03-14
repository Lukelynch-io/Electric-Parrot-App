const { Given, Then } = require("@cucumber/cucumber");
const ep = require('electric-parrot');

Given(/^I make a health check to (bitcoin (|core)) on (mainnet|testnet|regtest)$/, async function (service, network) {
    let response = await ep.core;
    console.log(response.json);
})

Then(/^I should receive response code (\d+)$/, function (code) {
    console.log("Hello, World!")
})