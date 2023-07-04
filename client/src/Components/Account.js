import React, { useEffect, useState } from "react";
import Footer from "./Footer";

export default function Account() {
	const [details, setdetails] = useState({ Name: "", Bio: "" });
	const showuser = async () => {
		await fetch("http://localhost:8000/api/user/fetchuser", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ Token: "xyz123" }),
		})
			.then((response) => {
				return response.json();
			})
			.then((result) => {
				let [user] = result;
				setdetails({ Name: user.Name, Bio: user.Bio });
			});
	};

	useEffect(() => {
		showuser();
	}, []);

	return (
		<>
			<h1 id="blog" className="text-center">
				Your Profile
			</h1>
			<div className="px-5 py-10 ">
				<section className=" blog body-font ">
					<div className="container px-5 py-16 mx-auto flex flex-wrap">
						<div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
							<img
								alt="feature"
								className="object-cover object-center img"
								src="https://dummyimage.com/300x300"
							/>
						</div>
						<div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center ">
							<div className="flex flex-col mb-10 lg:items-start items-center">
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

									<p className="leading-relaxed text-lg">
										{details.Bio}
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<h1 id="blog" className="text-center">
				Your Blogs
			</h1>
			<Footer />
		</>
	);
}
