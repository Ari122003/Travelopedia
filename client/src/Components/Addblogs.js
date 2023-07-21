import React, { useContext, useState } from "react";
import Footer from "./Footer";
import { context } from "../Context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const FormData = require("form-data");

export default function Addblogs(props) {
	const { addblogs } = useContext(context);

	const [image, setimage] = useState();

	const fileupdload = (e) => {
		setimage(e.target.files[0]);
	};

	let navigate = useNavigate();

	const [loader, setloader] = useState(false);

	const [blog, setblog] = useState({
		Place: "",
		Location: "",
		Experience: "",
		Cost: new Number(),
		Place1: "",
		Place2: "",
		Place3: "",
		Place4: "",
		Token: localStorage.getItem("Token"),
	});

	const change = (e) => {
		setblog({
			...blog,
			[e.target.name]: e.target.value,
		});

		seterror(false);
	};

	const [error, seterror] = useState(false);

	const submit = async (e) => {
		e.preventDefault();
		setloader(true);

		if (blog.Experience.length > 5) {
			//    Image uploda

			const form = new FormData();
			form.append("file", image);

			await axios.post("http://localhost:8000/upload", form).then((res) => {
				// Data upload
				addblogs(blog, res.data.filename);
				setTimeout(() => {
					setloader(false);
				}, 1000);

				setTimeout(() => {
					navigate("/profile");
					props.alert("warning", "Successfully added");
				}, 1000);
			});
		} else {
			setTimeout(() => {
				setloader(false);
			}, 1000);

			setTimeout(() => {
				seterror(true);
				props.alert("warning", "Experince must contain atleast 5 characters");
			}, 1000);
		}
	};
	return (
		<>
			<h1 id="blog" className="text-center">
				Add Blogs
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
											required
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
											required
											name="Place4"
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

							<div className="flex justify-center">
								<div className={loader ? "" : "hidden"}>
									<div className="spinner"></div>
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
