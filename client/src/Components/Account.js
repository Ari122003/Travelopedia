import React from "react";
import Footer from "./Footer";

export default function Account() {
	return (
		<>
			<h1 id="blog" className="text-center">
				Your Profile
			</h1>
			<div className="px-5 py-10 ">
				<section class=" blog body-font ">
					<div class="container px-5 py-16 mx-auto flex flex-wrap">
						<div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
							<img
								alt="feature"
								class="object-cover object-center img"
								src="https://dummyimage.com/300x300"
							/>
						</div>
						<div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center ">
							<div class="flex flex-col mb-10 lg:items-start items-center">
								<div class="flex-grow">
									<h2 class=" text-4xl title-font font-medium mb-3 ">NAME</h2>
									<p class="leading-relaxed text-lg">Aritra Adhikary</p>
								</div>
							</div>
							<div class="flex flex-col mb-10 lg:items-start items-center ">
								<div class="flex-grow">
									<h2 class=" text-4xl title-font font-medium mb-3 ">Bio</h2>

									<p className="leading-relaxed text-lg">
										Lorem, ipsum dolor sit amet consectetur
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
