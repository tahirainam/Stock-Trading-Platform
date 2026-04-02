const {Schema} = require("mongoose");

const HoldingzSchema = new Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
});

module.exports = {HoldingzSchema};        