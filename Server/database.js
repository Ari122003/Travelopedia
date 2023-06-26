const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const url = "mongodb://127.0.0.1:27017/Travelopedia";

const connect = async () => {
	await mongoose.connect(url).then(() => {
		console.log("Successfully connected");
	});
};


module.exports= connect