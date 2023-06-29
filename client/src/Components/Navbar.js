import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Navbar() {
	let location = useLocation();
	return (
		<header className=" body-font" id="nav">
			<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
					
					<span className="ml-3 name">Travelopedia</span>
				</a>
				<nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-100	flex flex-wrap items-center text-base justify-center">
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
