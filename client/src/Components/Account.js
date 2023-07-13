import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { useLocation, Link } from "react-router-dom";


export default function Account() {
	let location = useLocation();
	const [details, setdetails] = useState({ Name: "", Bio: "", Image: "" });
	const showuser = async () => {
		await fetch("http://localhost:8000/api/user/fetchuser", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ Token: localStorage.getItem("Token") }),
		})
			.then((response) => {
				return response.json();
			})
			.then((result) => {
				let [user] = result;
				setdetails({ Name: user.Name, Bio: user.Bio, Image: user.Image });
				localStorage.setItem("ID", user._id);
			});
	};

	useEffect(() => {
		showuser();
		console.log(details)
	}, []);

	return (
		<>
			<h1 id="blog" className="text-center">
				Your Profile
			</h1>
			<div className="px-5 py-10 ">
				<section className=" blog body-font ">
					<div className="container px-5 py-16 mx-auto flex flex-wrap items-center">
						<div className="lg:w-1/2 w-full mb-5 lg:mb-0 rounded-lg overflow-hidden ">
							<img
								alt="feature"
								className="object-cover object-center img mx-auto"
								src={
									details.Image
										? `http://localhost:8000/${details.Image}`
										: "//dummyimage.com/400x400"
								}
							/>
						</div>
						<div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center mx-auto ">
							<div className="flex flex-col mb-10 lg:items-start ">
								<div className="flex-grow">
									<h2 className=" text-4xl title-font font-medium mb-3 ">
										NAME
									</h2>
									<p className="leading-relaxed text-lg">{details.Name}</p>
								</div>
							</div>
							<div className="flex flex-col mb-10 lg:items-start items-center ">
								<div className="flex-grow">
									<h2 className=" text-4xl title-font font-medium mb-3 ">
										Bio
									</h2>

									<p className="leading-relaxed text-lg">{details.Bio}</p>
								</div>
								<Link
									className={`${
										location.pathname === "/editpropfile"
											? "font-extrabold underline"
											: ""
									} mx-auto pt-24  `}
									to="/editprofile">
									<button className="butt" >
										<span className="box" style={{backgroundColor:"#8ee4af",color:"#05386b"}}>Edit Profile</span>
									</button>
								</Link>
							</div>
						</div>
					</div>
				</section>
			</div>
			<div className=" flex justify-center">
				<Link
					className={`${
						location.pathname === "/addblogs" ? "font-extrabold underline" : ""
					} mx-auto `}
					to="/addblogs">
					<button className="butt">
						<span className="box  ">ADD BLOGS</span>
					</button>
				</Link>
			</div>
			<h1 id="blog" className="text-center">
				Your Blogs
			</h1>
			<Footer />
		</>
	);
}
