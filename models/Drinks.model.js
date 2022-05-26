const mongoose = require("mongoose");

const drinksSchema = mongoose.Schema({
drinkName: String,
price: Number,
drinkAvailable: Number,
caffeine: Boolean,
capacity: Number,
description: String,
});

const Drinks = mongoose.model("Drinks", drinksSchema);

module.exports = Drinks;