import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Navbar() {
	let location = useLocation();
	return (
		<nav className="navbar navbar-expand-lg  " id="nav">
			<div className="container-fluid">
				<div className="tw-flex  tw-font-medium tw-items-center  tw-justify-center tw-text-white">
					<img src="logo.jpg" id="logo" />

					<ul>
						<li className="navbar-brand tw-ml-3 ">
							<h2 className="name">Travelopedia</h2>
						</li>
					</ul>
				</div>
				<button
					className="navbar-toggler tw-bg-slate-500"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item ">
							<Link
								className={`nav-link ${
									location.pathname === "/" ? "tw-font-extrabold" : ""
								}`}
								aria-current="page"
								to="/"
								id="navlink">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className={`nav-link ${
									location.pathname === "/about" ? "tw-font-extrabold" : ""
								} `}
								to="/about"
								id="navlink">
								About
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className={`nav-link ${
									location.pathname === "/login" ? "tw-font-extrabold" : ""
								}  `}
								to="/login"
								id="navlink">
								Login
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className={`nav-link ${
									location.pathname === "/signup" ? "tw-font-extrabold" : ""
								}  `}
								to="/signup"
								id="navlink">
								Signup
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className={`nav-link ${
									location.pathname === "/profile" ? "tw-font-extrabold" : ""
								}  `}
								to="/profile"
								id="navlink">
								Your profile
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
