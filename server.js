require('dotenv/config');
const axios = require('axios');
const mongoose = require('mongoose');
const {test, getFundingTime, updateFundingTime} = require('./Controller/fundingController');
const app = require('./app');

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

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server Running at ${PORT} ... An Hour (3600000)`);
});

setInterval(function(){
    getFunding();
}, 3600000);

