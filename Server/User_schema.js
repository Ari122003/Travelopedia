const mongoose = require("mongoose");
const { Schema } = mongoose;

const Userschema = new Schema({
	Token: {
		type: String,
	},
	Name: {
		type: String,
	},
	Bio: {
		type: String,
	},

	Image: {
		type: String,
	},
});

module.exports = mongoose.model("Users", Userschema);
