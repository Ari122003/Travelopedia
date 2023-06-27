const mongoose = require("mongoose");
const { Schema } = mongoose;

const Blogsschema = new Schema({
	Token: {
		type: String,
		required: true,
	},
	Place: {
		type: String,
		required: true,
	},
	Cost: {
		type: Number,
		required: true,
	},
	Location: {
		type: String,
	},
	Experience: {
		type: String,
		required: true,
	},
	Sites: {
		Place1: { type: String },
		Place2: { type: String },
		Place3: { type: String },
		Place4: { type: String },
	},
	Date: {
		type: Date,
		default: Date.now,
	},

	id: {
		type: Number,
	},
});

module.exports = mongoose.model("Blogs", Blogsschema);
