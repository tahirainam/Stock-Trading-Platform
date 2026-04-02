const {Schema} = require("mongoose");

const HoldingzSchema = new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String,
});

module.exports = {OrderzSchema};        