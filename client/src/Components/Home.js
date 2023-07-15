import React, { useContext, useEffect, useState } from "react";
import Blogs from "./Blogs";
import Footer from "./Footer";
import { context } from "../Context";


export default function Home() {
	const { blogs, showblogs } = useContext(context);

	useEffect(() => {
		showblogs();
	}, []);

	return (
		<>
			<div className="container">
				<h1 id="blog" className="text-center">
					Blogs
				</h1>
				{blogs.map((item) => {
					return <Blogs key={item._id} blogs={item} />;
				})}
			</div>
			<Footer />
		</>
	);
}
