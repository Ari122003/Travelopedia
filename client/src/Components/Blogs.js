import React from "react";

export default function Blogs() {
	return (
		<div className="container px-5 py-10">
			<section class="text-gray-400 bg-gray-900 body-font">
				<div class="container px-5 py-24 mx-auto flex flex-col">
					<div class="lg:w-4/6 mx-auto">
						<div class="rounded-lg h-64 overflow-hidden">
							<img
								alt="content"
								class="object-cover object-center h-full w-full"
								src="https://dummyimage.com/1200x500"
							/>
						</div>
						<div class="flex flex-col sm:flex-row mt-10">
							<div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
								<div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										class="w-10 h-10"
										viewBox="0 0 24 24">
										<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
										<circle cx="12" cy="7" r="4"></circle>
									</svg>
								</div>
								<div class="flex flex-col items-center text-center justify-center">
									<h2 class="font-medium title-font mt-4 text-white text-lg">
										Phoebe Caulfield
									</h2>
									<div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p class="text-base text-gray-400">2023-06-27</p>
								</div>
							</div>
							<div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
							

								<div class="p-4 ">
									<div class="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
										<div class="flex items-center mb-3">
											<h2 class="text-white text-lg title-font font-medium">
												PLACE
											</h2>
										</div>
										<div class="flex-grow">
											<p class="leading-relaxed text-base">
												Demo
											</p>
										</div>
									</div>
								</div>
								<div class="p-4 ">
									<div class="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
										<div class="flex items-center mb-3">
											<h2 class="text-white text-lg title-font font-medium">
												LOCATION
											</h2>
										</div>
										<div class="flex-grow">
											<p class="leading-relaxed text-base">
												Demo
											</p>
										</div>
									</div>
								</div>
								<div class="p-4 ">
									<div class="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
										<div class="flex items-center mb-3">
											<h2 class="text-white text-lg title-font font-medium">
												EXPERIENCE
											</h2>
										</div>
										<div class="flex-grow">
											<p class="leading-relaxed text-base">
												Demo
											</p>
										</div>
									</div>
								</div>
								<div class="p-4 ">
									<div class="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
										<div class="flex items-center mb-3">
											<h2 class="text-white text-lg title-font font-medium">
												COST
											</h2>
										</div>
										<div class="flex-grow">
											<p class="leading-relaxed text-base">
												Demo
											</p>
										</div>
									</div>
								</div>
								<div class="p-4 ">
									<div class="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
										<div class="flex items-center mb-3">
											<h2 class="text-white text-lg title-font font-medium">
												SITES
											</h2>
										</div>
										<div class="flex-grow">
											<p class="leading-relaxed text-base">
												Demo
											</p>
											<p class="leading-relaxed text-base">
												Demo
											</p>
											<p class="leading-relaxed text-base">
												Demo
											</p>
											<p class="leading-relaxed text-base">
												Demo
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
