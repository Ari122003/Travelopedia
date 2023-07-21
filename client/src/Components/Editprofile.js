import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";
const FormData = require("form-data");

export default function Editprofile(props) {
	const [details, setdetails] = useState({
		Name: props.Name,
		Bio: props.Bio,
	});

	let navigate = useNavigate();

	const [image, setimage] = useState();

	const [error, seterror] = useState(false);

	const [loader, setloader] = useState(false);

	const change = (e) => {
		setdetails({
			...details,
			[e.target.name]: e.target.value,
		});

		seterror(false);
	};

	const fileupdload = (e) => {
		setimage(e.target.files[0]);
	};

	const submit = async (e) => {
		e.preventDefault();
		setloader(true);

		const form = new FormData();
		form.append("file", image);

		await axios
			.post("http://localhost:8000/upload", form)
			.then(async (res) => {
				await fetch("http://localhost:8000/api/user/updateuserdata", {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},

					body: JSON.stringify({
						Name: details.Name,
						Bio: details.Bio,
						Image: res.data.filename,
						id: localStorage.getItem("ID"),
					}),
				})
					.then((res) => {
						return res.json();
					})
					.then((res) => {
						if (res.errors) {
							setTimeout(() => {
								setloader(false);
							}, 1000);

							setTimeout(() => {
								props.showalert("warning", res.errors);
								seterror(true);
							}, 1000);
						} else {
							setTimeout(() => {
								setloader(false);
							}, 1000);

							setTimeout(() => {
								navigate("/profile");
								props.showalert("warning", "Successfully updated");
							}, 1000);
						}
					})
					.catch(() => {
						alert("Internal server error");
					});
			})
			.catch(() => {
				alert("Internal server error");
			});
	};

	useEffect(() => {
		props.showuser();
	});

	return (
		<>
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
										Name
									</h2>
									<div className="input-container">
										<input
											className="input-field"
											type="text"
											name="Name"
											required
											value={details.Name}
											onChange={change}
										/>
										<label htmlFor="input-field" className="input-label">
											Enter Name
										</label>
										<span className="input-highlight"></span>
									</div>
								</div>
							</div>
							<div className="flex items-center lg:w-3/5 mx-auto  pb-10   sm:flex-row flex-col">
								<div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
									<h2
										className={` text-2xl title-font font-medium mb-5 ${
											error ? "text-red-600" : ""
										}`}>
										Bio
									</h2>
									<div className="input-container">
										<textarea
											className={`${
												error ? "input-field2" : "input-field"
											} h-20`}
											value={details.Bio}
											name="Bio"
											required
											onChange={change}></textarea>
										<label
											htmlFor={`${error ? "input-field2" : "input-field"} `}
											className={`${
												error ? "input-label2" : "input-label"
											} h-20`}>
											Enter Bio
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
