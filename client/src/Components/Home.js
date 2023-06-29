import React, { useContext, useEffect } from "react";
import Blogs from "./Blogs";
import Footer from "./Footer";
import { context } from "../Contexts";

export default function Home() {
	const { blogs, getblogs } = useContext(context);

	useEffect(() => {
		getblogs();
	}, []);

	return (
		<div className="container">
			<h1 id="blog" className="text-center">
				Blogs
			</h1>
			{blogs.map((item) => {
				return <Blogs key={item._id} blogs={item} />;
			})}
			<Footer />
		</div>
	);
}
