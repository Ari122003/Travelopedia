import React from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "./Firebase";

export default function Navbar(props) {
	let location = useLocation();

	let navigate = useNavigate();

	const logout = async () => {
		navigate("/login");
		props.showalert("warning", "You are loged out");
		localStorage.removeItem("Token");
		localStorage.removeItem("ID");

		await signOut(auth)
			.then(() => {})
			.catch(() => {});
	};
	return (
		<>
			<header className=" sticky top-0 body-font z-10 " id="nav">
				<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
					<div className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
						<img src="logo.png" alt="logo" className="h-10 w-10 " />

						<span className="ml-3 name">Travelopedia</span>
					</div>
					<nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-100	flex flex-wrap items-center text-base justify-center">
						<Link
							className={`${
								location.pathname === "/" ? "font-extrabold underline" : ""
							} ml-5`}
							to="/"
							id="navlink">
							Home
						</Link>
						<Link
							className={`${
								location.pathname === "/about" ? "font-extrabold underline" : ""
							} ml-5`}
							to="/about"
							id="navlink">
							About
						</Link>
						<Link
							className={`${
								location.pathname === "/profile"
									? "font-extrabold underline"
									: ""
							} ml-5 ${localStorage.getItem("Token") ? "" : "hidden"}`}
							to="/profile"
							id="navlink">
							Account
						</Link>
						<Link
							className={`${
								location.pathname === "/login" ? "font-extrabold underline" : ""
							} ml-5 ${localStorage.getItem("Token") ? "hidden" : ""}`}
							to="/login"
							id="navlink">
							Login
						</Link>
						<Link
							className={`${
								location.pathname === "/signup"
									? "font-extrabold underline"
									: ""
							} ml-5 ${localStorage.getItem("Token") ? "hidden" : ""}`}
							to="/signup"
							id="navlink">
							Signup
						</Link>
						<button
							id="navlink"
							className={`ml-5 ${
								localStorage.getItem("Token") ? "" : "hidden"
							}`}
							onClick={logout}>
							Log out
						</button>
					</nav>
				</div>
				<hr></hr>
			</header>
		</>
	);
}
