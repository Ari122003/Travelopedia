import React, { useState } from "react";
export const context = React.createContext();

const BlogContext = (props) => {
	const allblogs = [];

	const [blogs, setblogs] = useState(allblogs);

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
			});
	};



// Adding new blogs

const addblogs = async () => {
    await fetch("http://localhost:8000/api/blogs/addblogs", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({
            Place: place,
            Location: location,
            Experince: experince,
            Cost: cost,
            Sites: sites,
            Token: localStorage.getItem("Token"),
        }),
    });
};




	return (
		<context.Provider value={{ blogs, showblogs }}>
			{props.children}
		</context.Provider>
	);
};

export default BlogContext;
