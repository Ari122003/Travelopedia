import React, { useState } from "react";
import Footer from "./Footer";

export default function Addblogs() {
	return (
		<>
			<h1 id="blog" className="text-center">
				Add Blogs
			</h1>
			<div className="container px-10 py-10">
				<form>
					<section className="blog body-font">
						<div className="container px-5 py-24 mx-auto">
							<div className="flex items-center lg:w-3/5 mx-auto  pb-10  sm:flex-row flex-col">
								<div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
									<h2 className=" text-2xl title-font font-medium mb-5">
										Place
									</h2>
									<div className="input-container">
										<input className="input-field" type="text" />
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
										<textarea className="input-field h-40"></textarea>
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
										<input className="input-field" type="text" />
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
										<input className="input-field" type="text" />
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
										<input className="input-field" type="text" />
										<label htmlFor="input-field" className="input-label">
											Enter site-1
										</label>
										<span className="input-highlight"></span>
									</div>
									<h2 className=" text-lg title-font font-medium mb-5 mt-5">
										Site-2
									</h2>
									<div className="input-container">
										<input className="input-field" type="text" />
										<label htmlFor="input-field" className="input-label">
											Enter site-2
										</label>
										<span className="input-highlight"></span>
									</div>
									<h2 className=" text-lg title-font font-medium mb-5 mt-5">
										Site-3
									</h2>
									<div className="input-container">
										<input className="input-field" type="text" />
										<label htmlFor="input-field" className="input-label">
											Enter site-3
										</label>
										<span className="input-highlight"></span>
									</div>
									<h2 className=" text-lg title-font font-medium mb-5 mt-5">
										Site-4
									</h2>
									<div className="input-container">
										<input className="input-field" type="text" />
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

							<button className="flex mx-auto mt-20 butt   text-lg">
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
