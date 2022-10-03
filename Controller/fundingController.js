const _ = require('lodash') 
const axios = require('axios');
require('dotenv').config();
const {FundingTime} = require('../Models/fundingTime');
const { TezosToolkit } = require("@taquito/taquito");
const { InMemorySigner } = require("@taquito/signer");

module.exports.updateFundingTime = async () => {
    // let previous_funding_time;
    // let upcoming_funding_time;
    // let funding_period;
    // let current_time = Date.parse(new Date().toUTCString())
    // await axios.get("https://api.ghostnet.tzkt.io/v1/contracts/KT1WbA2H87o2RT9sTT4UaEgUAUgq6ZQhynbP/storage").then(function (storage) {
    //     previous_funding_time = Date.parse(storage.data.previous_funding_time)
    //     upcoming_funding_time = Date.parse(storage.data.upcoming_funding_time)
    //     funding_period = parseInt(storage.data.funding_period)
    // });
    
    // if (current_time >= upcoming_funding_time) {
        const rpcURL = process.env.RPCURL;
        const Tezos = new TezosToolkit(rpcURL);
        Tezos.setProvider({
            signer: new InMemorySigner(process.env.PVTKEY),
        });
        await Tezos.contract
		.at(process.env.CONTRACT) 
		.then((contract) => {
			contract.methods.addCount().send();
		}).then(()=>{
            console.log("Txn Sent")
        })
		.catch((error) => {window.alert("Error");});

    // }
   
}

module.exports.getFundingTime = async () => {
    console.log("getFundingTime Working")
}

module.exports.test = async () => {
    console.log("test Working")
}
