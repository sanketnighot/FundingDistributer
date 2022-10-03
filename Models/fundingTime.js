const {Schema, model} = require('mongoose');

module.exports.Funding = model("Funding", Schema({
    Funding: {
        type     : Object
    }

}, { timestamps : true }));