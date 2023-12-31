const express = require("express");
const router = express.Router();
const Blogs = require("./Blog_schema");
const { body, validationResult } = require("express-validator");

// Endponit for fetching all blogs

router.get("/fetchblogs", async (req, res) => {
	try {
		const blogs = await Blogs.find();
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
					errors: "Experince must contain 5 character",
				});
			}

			const { Token, Place, Cost, Location, Experience, Sites, Image } =
				req.body;

			const newblog = new Blogs({
				Token,
				Place,
				Cost,
				Location,
				Experience,
				Sites,
				Image,
			});

			const savedblogs = await newblog.save();

			res.json(savedblogs);
		} catch (error) {
			console.log(error);
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

			const { Place, Cost, Location, Experience, Sites, Image } = req.body;

			const newblog = { Place, Cost, Location, Experience, Sites, Image };

			const blog = await Blogs.findByIdAndUpdate(
				req.body.Id,
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
