import React, { useState } from "react";
export const context = React.createContext();

const BlogContext = (props) => {
	const allblogs = [];

	const [blogs, setblogs] = useState(allblogs);
	const [blog, setblog] = useState({
		Place: "",
		Location: "",
		Experience: "",
		Cost: new Number(),
		Place1: "",
		Place2: "",
		Place3: "",
		Place4: "",
		Id: "",
	});

	// Fetch all notes

	const showblogs = async () => {
		await fetch("http://localhost:8000/api/blogs/fetchblogs", {
			method: "GET",
		})
			.then((response) => {
				return response.json();
			})
			.then((result) => {
				setblogs(result);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	// Show blogs on Editblogs

	const sender = (blog) => {
		setblog({
			Place: blog.Place,
			Location: blog.Location,
			Experience: blog.Experience,
			Cost: blog.Cost,
			Place1: blog.Sites.Place1,
			Place2: blog.Sites.Place2,
			Place3: blog.Sites.Place3,
			Place4: blog.Sites.Place4,
			Id: blog._id,
		});
	};

	// Adding new blogs

	const addblogs = async (blog) => {
		await fetch("http://localhost:8000/api/blogs/addblogs", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},

			body: JSON.stringify({
				Place: blog.Place,
				Cost: blog.Cost,
				Location: blog.Location,
				Experience: blog.Experience,
				Token: blog.Token,
				Sites: {
					Place1: blog.Place1,
					Place2: blog.Place2,
					Place3: blog.Place3,
					Place4: blog.Place4,
				},
			}),
		})
			.then((res) => {
				return res.json();
			})
			.then(() => {})
			.catch((error) => {
				console.log(error);
			});
	};

	// Editing blogs

	const editblogs = async (blogs,Image) => {
		await fetch("http://localhost:8000/api/blogs/editblogs", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},

			body: JSON.stringify({
				Place: blogs.Place,
				Location: blogs.Location,
				Experience: blogs.Experience,
				Cost: blogs.Cost,
				Id: blogs.Id,
				Image:Image,
				Sites: {
					Place1: blogs.Place1,
					Place2: blogs.Place2,
					Place3: blogs.Place3,
					Place4: blogs.Place4,
				},
			}),
		})
			.then((res) => {
				return res.json();
			})
			.then(() => {})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<context.Provider
			value={{ blogs, showblogs, addblogs, blog, sender, editblogs }}>
			{props.children}
		</context.Provider>
	);
};

export default BlogContext;
