const {model} = require("mongoose");
const {HoldingzSchema} = require("../schemas/HoldingzSchema");

const HoldingzModel = model("holding", HoldingzSchema);

module.exports = {HoldingzModel};