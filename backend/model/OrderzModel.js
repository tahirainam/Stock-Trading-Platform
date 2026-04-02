const {model} = require("mongoose");
const {OrderzSchema} = require("../schemas/OrderzSchema");

const OrderzModel = model("order", OrderzSchema);

module.exports = {OrderzModel};