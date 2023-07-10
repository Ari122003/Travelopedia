require("dotenv").config();
const express = require("express");
const connect = require("./database");
let cors = require("cors");
const multer = require("multer");
const path = require("path");
const Users = require("./User_schema");

const app = express();
connect();

const port = process.env.PORT;
app.use(express.json());
app.use(cors());
app.use(express.static("Uploads"))

app.use("/api/blogs", require("./Blog"));
app.use("/api/user", require("./Users"));

const storage = multer.diskStorage({
	destination: (req, file, func) => {
		func(
			null,
			"C:/Users/Hp/OneDrive/Desktop/Program files/Web Development/React JS/Travelopedia/Server/Uploads"
		);
	},
	filename: (req, file, func) => {
		func(
			null,
			file.fieldname + "_" + Date.now() + path.extname(file.originalname)
		);
	},
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), async (req, res) => {
	res.json(req.file);
	
});

app.get("/getdp", async (req, res) => {
	Users.find()
		.then((user) => {
			res.json(user);
		})
		.catch((error) => {
			console.log(error);
		});
});

app.get("/", (req, res) => {
	res.send("<h1>App is live<h1>");
});

app.listen(port, () => {
	console.log(`App is running on http://localhost:${port}`);
});
