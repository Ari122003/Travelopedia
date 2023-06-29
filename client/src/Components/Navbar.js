import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Navbar() {
	let location = useLocation();
	return (
		<header class=" body-font" id="nav">
			<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
						viewBox="0 0 24 24">
						<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
					</svg>
					<span class="ml-3 name">Travelopedia</span>
				</a>
				<nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
					<Link
						className={`${
							location.pathname === "/" ? "font-extrabold underline" : ""
						} mr-5`}
						to="/"
						id="navlink">
						Home
					</Link>
					<Link
						className={`${
							location.pathname === "/about" ? "font-extrabold underline" : ""
						} mr-5`}
						to="/about"
						id="navlink">
						About
					</Link>
					<Link
						className={`${
							location.pathname === "/profile" ? "font-extrabold underline" : ""
						} mr-5`}
						to="/profile"
						id="navlink">
						Account
					</Link>
					<Link
						className={`${
							location.pathname === "/login" ? "font-extrabold underline" : ""
						} mr-5`}
						to="/login"
						id="navlink">
						Login
					</Link>
					<Link
						className={`${
							location.pathname === "/signup" ? "font-extrabold underline" : ""
						}mr-5`}
						to="/signup"
						id="navlink">
						Signup
					</Link>
				</nav>
			</div>
		</header>
	);
}
