import React, { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import { context } from "../Context";

export default function Editblogs() {
	const { blog } = useContext(context);
	const [blogs, setblogs] = useState({
		Place: blog.Place,
		Location: blog.Location,
		Experience: blog.Experience,
		Cost: blog.Cost,
		Place1: blog.Place1,
		Place2: blog.Place2,
		Place3: blog.Place3,
		Place4: blog.Place4,
		Id: blog.Id,
	});

	const change = (e) => {
		setblogs({
			...blogs,
			[e.target.name]: e.target.value,
		});
	};

	const submit = async (e) => {
		e.preventDefault();

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
			.then((res) => {
				console.log(res);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<>
			<h1 id="blog" className="text-center">
				Edit Blogs
			</h1>
			<div className="container px-10 py-10">
				<form onSubmit={submit}>
					<section className="blog body-font">
						<div className="container px-5 py-24 mx-auto">
							<div className="flex items-center lg:w-3/5 mx-auto  pb-10  sm:flex-row flex-col">
								<div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
									<h2 className=" text-2xl title-font font-medium mb-5">
										Place
									</h2>
									<div className="input-container">
										<input
											className="input-field"
											type="text"
											name="Place"
											value={blogs.Place}
											onChange={change}
										/>
										<label htmlFor="input-field" className="input-label">
											Enter place
										</label>
										<span className="input-highlight"></span>
									</div>
								</div>
							</div>
							<div className="flex items-center lg:w-3/5 mx-auto  pb-10   sm:flex-row flex-col">
								<div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
									<h2 className=" text-2xl title-font font-medium mb-5">
										Experince
									</h2>
									<div className="input-container">
										<textarea
											className="input-field h-40"
											name="Experience"
											value={blogs.Experience}
											onChange={change}></textarea>
										<label htmlFor="input-field" className="input-label">
											Enter exeperience
										</label>
										<span className="input-highlight"></span>
									</div>
								</div>
							</div>
							<div className="flex items-center lg:w-3/5  pb-10  mx-auto sm:flex-row flex-col">
								<div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
									<h2 className=" text-2xl title-font font-medium mb-5">
										Location
									</h2>
									<div className="input-container">
										<input
											className="input-field"
											type="text"
											name="Location"
											value={blogs.Location}
											onChange={change}
										/>
										<label htmlFor="input-field" className="input-label">
											Enter location
										</label>
										<span className="input-highlight"></span>
									</div>
								</div>
							</div>
							<div className="flex items-center lg:w-3/5  pb-10  mx-auto sm:flex-row flex-col">
								<div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
									<h2 className=" text-2xl title-font font-medium mb-5">
										Cost
									</h2>
									<div className="input-container">
										<input
											className="input-field"
											type="number"
											name="Cost"
											value={blogs.Cost}
											onChange={change}
										/>
										<label htmlFor="input-field" className="input-label">
											Enter cost
										</label>
										<span className="input-highlight"></span>
									</div>
								</div>
							</div>

							<div className="flex justify-center pb-5">
								<h2 className=" text-2xl title-font font-medium ">Sites</h2>
							</div>

							<div className="flex items-center lg:w-3/5  pb-10  mx-auto sm:flex-row flex-col">
								<div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
									<h2 className=" text-lg title-font font-medium mb-5 mt-5">
										Site-1
									</h2>
									<div className="input-container">
										<input
											className="input-field"
											type="text"
											name="Place1"
											value={blogs.Place1}
											onChange={change}
										/>
										<label htmlFor="input-field" className="input-label">
											Enter site-1
										</label>
										<span className="input-highlight"></span>
									</div>
									<h2 className=" text-lg title-font font-medium mb-5 mt-5">
										Site-2
									</h2>
									<div className="input-container">
										<input
											className="input-field"
											type="text"
											name="Place2"
											value={blogs.Place2}
											onChange={change}
										/>
										<label htmlFor="input-field" className="input-label">
											Enter site-2
										</label>
										<span className="input-highlight"></span>
									</div>
									<h2 className=" text-lg title-font font-medium mb-5 mt-5">
										Site-3
									</h2>
									<div className="input-container">
										<input
											className="input-field"
											type="text"
											name="Place3"
											value={blogs.Place3}
											onChange={change}
										/>
										<label htmlFor="input-field" className="input-label">
											Enter site-3
										</label>
										<span className="input-highlight"></span>
									</div>
									<h2 className=" text-lg title-font font-medium mb-5 mt-5">
										Site-4
									</h2>
									<div className="input-container">
										<input
											className="input-field"
											type="text"
											name="Place4"
											value={blogs.Place4}
											onChange={change}
										/>
										<label htmlFor="input-field" className="input-label">
											Enter site-4
										</label>
										<span className="input-highlight"></span>
									</div>
								</div>
							</div>

							<div className="flex items-center lg:w-3/5  pb-10  mx-auto sm:flex-row flex-col">
								<div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
									<h2 className=" text-2xl title-font font-medium mb-5">
										Image
									</h2>
									<div className="input-container">
										<input className="input-field" type="file" />

										<span className="input-highlight"></span>
									</div>
								</div>
							</div>

							<button
								className="flex mx-auto mt-20 butt   text-lg"
								type="submit">
								<span
									className="box"
									style={{ backgroundColor: "#8ee4af", color: "#05386b" }}>
									Submit
								</span>
							</button>
						</div>
					</section>
				</form>
			</div>
			<Footer />
		</>
	);
}
