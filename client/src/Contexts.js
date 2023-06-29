import React, { useState } from "react";

export const context = React.createContext();

function BlogContext(props) {
	const Blogs = [];
	const [blogs, setblogs] = useState(Blogs);

	// Getting all blogs

	const getblogs = async () => {
		await fetch("http://localhost:8000/api/blogs/fetchblogs", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => {
				return response.json();
			})
			.then((result) => {
				setblogs(result);
			});
	};

	return (
		<context.Provider
			value={{
				blogs,
				getblogs,
			}}>
			{props.children}
		</context.Provider>
	);
}

export default BlogContext;
