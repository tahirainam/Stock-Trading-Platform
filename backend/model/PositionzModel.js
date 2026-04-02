const {model} = require("mongoose");
const {PositionzSchema} = require("../schemas/PositionzSchema");

const PositionzModel = model("position", PositionzSchema);

module.exports = {PositionzModel};