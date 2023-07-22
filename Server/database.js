const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const url =
	"mongodb+srv://Aritra:Aritra%402003@travelopedia-database.jcf4k8m.mongodb.net/";

const connect = async () => {
	await mongoose.connect(url).then(() => {
		console.log("Successfully connected");
	});
};

module.exports = connect;
