import React from "react";
import Footer from "./Footer";

export default function About() {
	return (
		<>
			<h1 id="blog" className="text-center">
				About
			</h1>
			<div className="container px-10 py-10">
				<section class="body-font" id="nav">
					<div class="container px-5 py-24 mx-auto flex flex-col">
						<div class="lg:w-4/6 mx-auto">
							<div class="rounded-lg h-64 overflow-hidden">
								<img
									alt="content"
									class="object-cover object-center h-full w-full"
									src="cover.jpg"
								/>
							</div>
							<div class="flex flex-col sm:flex-row mt-10">
								<div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
									<div class="w-20 h-20 rounded-full inline-flex items-center  text-white">
										<img src="me.jpg" alt="me" />
									</div>
									<div class="flex flex-col items-center text-center justify-center">
										<h2 class="font-medium title-font mt-4 text-white text-lg">
											Aritra Adhikary
										</h2>
										<div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
										<p class="text-base text-white">
											Electronics & Communication Engineer
											<br />
											MERN Developer
										</p>
									</div>
								</div>
								<div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
									<p class="leading-relaxed text-white text-lg mb-4">
										This is your travel wikipedia. You can read travel blogs
										written by others and you can also write your own blogs.
										Come and join us by siging up.....
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</>
	);
}
