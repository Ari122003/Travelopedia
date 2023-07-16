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

	const change = (e) => {
		setdetails({
			...details,
			[e.target.name]: e.target.value,
		});
	};

	const fileupdload = (e) => {
		setimage(e.target.files[0]);
	};

	const submit = async (e) => {
		e.preventDefault();
		const form = new FormData();
		form.append("file", image);

		await axios
			.post("http://localhost:8000/upload", form)
			.then((res) => {
				fetch("http://localhost:8000/api/user/updateuserdata", {
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
				});
			})
			.catch((error) => {
				console.log(error);
			});

		navigate("/profile");
	};

	useEffect(() => {
		props.showuser();
	});

	return (
		<>
			<div className="container px-10 py-10">
				<form onSubmit={submit}>
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
									<h2 className=" text-2xl title-font font-medium mb-5">Bio</h2>
									<div className="input-container">
										<textarea
											className="input-field h-20"
											value={details.Bio}
											name="Bio"
											onChange={change}></textarea>
										<label htmlFor="input-field" className="input-label">
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
