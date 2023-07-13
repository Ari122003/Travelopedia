const express = require("express");
const router = express.Router();
const Blogs = require("./Blog_schema");
const { body, validationResult } = require("express-validator");

// Endpoint for fetching blogs of an user

router.get("/yourblogs", async (req, res) => {
	try {
		const blogs = await Blogs.find({ Token: req.body.token });
		res.json(blogs);
	} catch (error) {
		console.log(error.message);
		res.status(500).send("Internal server error");
	}
});

// Endponit for fetching all blogs

router.get("/fetchblogs", async (req, res) => {
	try {
		const blogs = await Blogs.find({ id: 1 });
		res.json(blogs);
	} catch (error) {
		console.log(error.message);
		res.status(500).send("Internal server error");
	}
});

// Endpoint for adding blogs

router.post(
	"/addblogs",
	[body("Experience", "Minimum experience length is 5").isLength({ min: 5 })],
	async (req, res) => {
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({
					errors: "Enter valid Experience",
				});
			}

			const { Token, Place, Cost, Location, Experience, Sites } = req.body;

			const blogs = new Blogs({
				Token,
				Place,
				Cost,
				Location,
				Experience,
				Sites,
				id: 1,
			});

			const svaedblogs = await blogs.save();

			res.json(svaedblogs);
		} catch (error) {
			console.log(error.message);
			res.status(500).send("Internal server error");
		}
	}
);

// Endpoint for editing a blog

router.put(
	"/editblogs",
	[body("Experience", "Minimum experience length is 5").isLength({ min: 5 })],
	async (req, res) => {
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({
					errors: "Enter valid Experience",
				});
			}

			const { Place, Cost, Location, Experience, Sites } = req.body;

			const newblog = { Place, Cost, Location, Experience, Sites };

			const blog = await Blogs.findByIdAndUpdate(
				req.body._id,
				{ $set: newblog },
				{ new: true }
			);

			res.json(blog);
		} catch (error) {
			console.log(error.message);
			res.status(500).send("Internal server error");
		}
	}
);

// Endpoint for delete a blog

router.delete("/deleteblogs", async (req, res) => {
	try {
		await Blogs.findByIdAndDelete(req.body.id);
		res.json({ Success: "Deleted" });
	} catch (error) {
		console.log(error.message);
		res.status(500).send("Internal server error");
	}
});

module.exports = router;
