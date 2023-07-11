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
			<form
				className="form mx-5 my-10"
				onSubmit={submit}
				action="/upload"
				method="POST"
				encType="multipart/form-data">
				<div className=" mx-5 ">
					<div className="flex content-center">
						<h2 className="text-4xl font-semibold leading-7 mx-auto title pt-10 ">
							Edit Profile
						</h2>
					</div>
					<div className="border-b border-white pb-12 ">
						<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
							<div className="sm:col-span-4">
								<label
									htmlFor="username"
									className="block text-2xl font-medium leading-6 pb-5 title">
									Username
								</label>
								<div className="mt-2">
									<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
										<input
											type="text"
											name="Name"
											id="username"
											onChange={change}
											value={details.Name}
											className="block flex-1 border-0 bg-transparent py-1.5 pl-1 title placeholder:text-white focus:ring-0 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
							</div>

							<div className="col-span-full">
								<label
									htmlFor="about"
									className="block text-2xl font-medium pb-5 leading-6 title">
									Bio
								</label>
								<div className="mt-2">
									<textarea
										id="about"
										name="Bio"
										onChange={change}
										value={details.Bio}
										rows="3"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
								</div>
							</div>

							<div className="col-span-full">
								<label
									htmlFor="photo"
									className="block text-2xl font-medium leading-6 pb-5 title">
									Uploda picture
								</label>
								<div className="mt-2 flex items-center gap-x-3">
									<svg
										className="h-12 w-12 text-gray-300"
										viewBox="0 0 24 24"
										fill="currentColor"
										aria-hidden="true">
										<path
											fillRule="evenodd"
											d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
											clipRule="evenodd"
										/>
									</svg>
									<button
										type="button"
										className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
										<input type="file" name="profile" onChange={fileupdload} />
									</button>
								</div>
							</div>
						</div>
					</div>

					<div className="mt-6 flex items-center justify-end gap-x-6 pb-10">
						<button
							type="submit"
							className="rounded-md butt  px-3 py-2 text-sm font-semibold title shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
							Save
						</button>
					</div>
				</div>
			</form>
			<Footer />
		</>
	);
}
