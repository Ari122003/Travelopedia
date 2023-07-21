const express = require("express");
const router = express.Router();
const Users = require("./User_schema");
const { body, validationResult } = require("express-validator");

// End point for fetching user data

router.post("/fetchuser", async (req, res) => {
	try {
		const user = await Users.find({ Token: req.body.Token });
		res.json(user);
	} catch (error) {
		console.log(error.message);
		res.status(500).send("Internal server error");
	}
});

// Endpoint for adding new user

router.post(
	"/adduser",

	async (req, res) => {
		try {
			const { Token, Name } = req.body;

			const user = new Users({
				Token,
				Name,
			});

			const saveduser = await user.save();

			res.json(saveduser);
		} catch (error) {
			console.log(error.message);
			res.status(500).send("Internal server error");
		}
	}
);

// Endpoint for updating user details

router.put(
	"/updateuserdata",
	[body("Bio", "Minimum Bio length is 6").isLength({ min: 6 })],
	async (req, res) => {
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				res.status(400);
				return res.json({
					errors: "Bio should have atleast 6 caharacter",
				});
			}

			const { Name, Bio, Image } = req.body;

			const newuser = { Name, Bio, Image };

			const user = await Users.findByIdAndUpdate(
				req.body.id,
				{ $set: newuser },
				{ new: true }
			);

			res.json(user);
		} catch (error) {
			console.log(error.message);
			res.status(500).send("Internal server error");
		}
	}
);

module.exports = router;
