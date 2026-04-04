const {Schema} = require("mongoose");

const OrderzSchema = new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String,
});

module.exports = {OrderzSchema};        