import React, { useContext, useEffect } from "react";
import { useState } from "react";

export default function Blogs(props) {
	const { Place, Location, Cost, Experience, Sites, Date, Token } = props.blogs;

	const [user, setuser] = useState({});

	const showuser = async () => {
		await fetch("http://localhost:8000/api/user/fetchuser", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ Token: Token }),
		})
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				const [user] = res;
				setuser(user);
			});
	};

	useEffect(() => {
		showuser();
	}, []);

	return (
		<div className="container px-5 py-10 ">
			<section className=" blog body-font">
				<div className="container px-5 py-24 mx-auto flex flex-col">
					<div className="lg:w-4/6 mx-auto">
						<div className="rounded-lg h-64 overflow-hidden">
							<img
								alt="content"
								className="object-cover object-center h-full w-full"
								src="https://dummyimage.com/1200x500"
							/>
						</div>
						<div className="flex flex-col sm:flex-row mt-10">
							<div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
								<div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
									<img src={`http://localhost:8000/${user.Image}`}></img>
								</div>
								<div className="flex flex-col items-center text-center justify-center">
									<h2 className="font-medium title-font mt-4  text-lg">
										{user.Name}
									</h2>
									<div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
									<p className="text-base ">{Date.slice(0, 10)}</p>
								</div>
							</div>
							<div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
								<div className="p-4 ">
									<div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
										<div className="flex items-center mb-3">
											<h2 className=" text-lg title-font font-medium">PLACE</h2>
										</div>
										<div className="flex-grow">
											<p className="leading-relaxed text-base">{Place}</p>
										</div>
									</div>
								</div>
								<div className="p-4 ">
									<div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
										<div className="flex items-center mb-3">
											<h2 className=" text-lg title-font font-medium">
												LOCATION
											</h2>
										</div>
										<div className="flex-grow">
											<p className="leading-relaxed text-base">{Location}</p>
										</div>
									</div>
								</div>
								<div className="p-4 ">
									<div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
										<div className="flex items-center mb-3">
											<h2 className=" text-lg title-font font-medium">
												EXPERIENCE
											</h2>
										</div>
										<div className="flex-grow">
											<p className="leading-relaxed text-base">{Experience}</p>
										</div>
									</div>
								</div>
								<div className="p-4 ">
									<div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
										<div className="flex items-center mb-3">
											<h2 className=" text-lg title-font font-medium">COST</h2>
										</div>
										<div className="flex-grow">
											<p className="leading-relaxed text-base">{Cost}</p>
										</div>
									</div>
								</div>
								<div className="p-4 ">
									<div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
										<div className="flex items-center mb-3">
											<h2 className=" text-lg title-font font-medium">SITES</h2>
										</div>
										<div className="flex-grow">
											<p className="leading-relaxed text-base">
												{Sites.Place1}
											</p>
											<p className="leading-relaxed text-base">
												{Sites.Place2}
											</p>
											<p className="leading-relaxed text-base">
												{Sites.Place3}
											</p>
											<p className="leading-relaxed text-base">
												{Sites.Place4}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
