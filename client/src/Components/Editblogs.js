import React, { useContext, useState } from "react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { context } from "../Context";
import axios from "axios";
const FormData = require("form-data");

export default function Editblogs(props) {
	const [image, setimage] = useState();

	const { blog, editblogs } = useContext(context);

	const navigate = useNavigate();

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

	const [error, seterror] = useState(false);

	const change = (e) => {
		setblogs({
			...blogs,
			[e.target.name]: e.target.value,
		});

		seterror(false);
	};

	const fileupdload = (e) => {
		setimage(e.target.files[0]);
	};

	const submit = async (e) => {
		e.preventDefault();

		if (blogs.Experience.length > 5) {
			// Image upload

			const form = new FormData();
			form.append("file", image);

			await axios.post("http://localhost:8000/upload", form).then((res) => {
				// Data upload

				editblogs(blogs, res.data.filename);
			});

			navigate("/profile");
			props.alert("warning", "Successfully updated");
		} else {
			seterror(true);
			props.alert("warning", "Experince must contain 5 characters");
		}
	};

	return (
		<>
			<h1 id="blog" className="text-center">
				Edit Blogs
			</h1>
			<div className="container px-10 py-10">
				<form
					onSubmit={submit}
					action="/upload"
					method="POST"
					encType="multipart/form-data">
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
											required
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
									<h2
										className={` text-2xl title-font font-medium mb-5  ${
											error ? "text-red-600" : ""
										}`}>
										Experince
									</h2>
									<div className="input-container">
										<textarea
											className={`${
												error ? "input-field2" : "input-field"
											} h-40`}
											name="Experience"
											value={blogs.Experience}
											required
											onChange={change}></textarea>
										<label
											htmlFor={`${error ? "input-field2" : "input-field"} `}
											className={`${error ? "input-label2" : "input-label"} `}>
											Enter exeperience
										</label>
										<span
											className={`${
												error ? "input-highlight2" : "input-highlight"
											} `}></span>
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
											required
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
											required
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
											required
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
											required
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
											required
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
											required
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
										<input
											className="input-field"
											type="file"
											onChange={fileupdload}
										/>

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
