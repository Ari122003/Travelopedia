const mongoose = require("mongoose");
const { Schema } = mongoose;

const Userschema = new Schema({
	Token: {
		type: String,
		required: true,
	},
	Name: {
		type: String,
		required: true,
	},
	Bio: {
		type: String,
		required: true,
	},
	
});

module.exports = mongoose.model("Users", Userschema);