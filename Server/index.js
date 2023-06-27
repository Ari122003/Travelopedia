require("dotenv").config();
const express = require("express");

const connect = require("./database");
let cors = require("cors");

const app = express();
connect();

const port = process.env.PORT;
app.use(express.json());
app.use(cors());
app.use("/api/blogs",require("./Blog"))

app.get("/", (req, res) => {
	res.send("<h1>App is live<h1>");
});

app.listen(port, () => {
	console.log(`App is running on http://localhost:${port}`);
});
