require('dotenv/config');
const axios = require('axios');
const mongoose = require('mongoose');
const {test, getFundingTime, updateFundingTime} = require('./Controller/fundingController');

mongoose.connect(process.env.MONGODB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=> {
        console.log('Connected to LOL MongoDb Server ...')
    }).catch((err) =>{
        console.log(`MongoDb Connection Failed: ${err}`);
    });

const getFunding = async () => {
    updateFundingTime();
}


setInterval(function(){
    getFunding();
}, 30000);
