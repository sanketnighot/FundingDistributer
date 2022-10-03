const _ = require('lodash') 
const axios = require('axios');
require('dotenv').config();
const {FundingTime} = require('../Models/fundingTime');
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import {ColorMode } from "@airgap/beacon-sdk";

const preferredNetwork = process.env.RPC;
const options = {
name: "Game Geeks: The Lords of the Space", 
preferredNetwork: preferredNetwork,
};
const rpcURL = process.env.RPCURL;
const Tezos = new TezosToolkit(rpcURL);
const wallet = new BeaconWallet(options);

Tezos.setProvider({
	signer: new InMemorySigner(process.env.PVTKEY),
});


module.exports.updateFundingTime = async () => {
    await axios.get("https://api.ghostnet.tzkt.io/v1/contracts/KT1WbA2H87o2RT9sTT4UaEgUAUgq6ZQhynbP/storage").then(function (storage) {
        console.log(Date.parse(storage.data.previous_funding_time));
        console.log(Date.parse(storage.data.upcoming_funding_time));
        console.log(parseInt(storage.data.funding_period));
    });
}

module.exports.getFundingTime = async () => {
    console.log("getFundingTime Working")
}

module.exports.test = async () => {
    console.log("test Working")
}
