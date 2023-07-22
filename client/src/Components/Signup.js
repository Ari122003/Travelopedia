import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import auth from "./Firebase";
import Footer from "./Footer";

export default function Signup(props) {
	const [details, setdetails] = useState({
		Name: "",
		Email: "",
		Password: "",
		cpassword: "",
	});

	let navigate = useNavigate();

	const [loader, setloader] = useState(false);

	const [error, seterror] = useState(false);
	const [error1, seterror1] = useState(false);

	const change = (e) => {
		setdetails({
			...details,
			[e.target.name]: e.target.value,
		});

		seterror(false);
		seterror1(false);
	};

	const submit = async (e) => {
		e.preventDefault();
		if (!error1) {
			setloader(true);

			await createUserWithEmailAndPassword(
				auth,
				details.Email,
				details.Password
			)
				.then((response) => {
					setloader(false);
					localStorage.setItem("Token", response.user.uid);
					navigate("/");
					props.alert("warning", "Successfully registered");
				})
				.catch(() => {
					props.alert("warning", "User already exists");
					setloader(false);
					seterror(true);
				});

			await fetch("http://localhost:8000/api/user/adduser", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					Token: localStorage.getItem("Token"),
					Name: details.Name,
				}),
			});
		}
	};

	const handelerror = () => {
		seterror(false);
		seterror1(false);

		if (details.Password != details.cpassword) {
			seterror1(true);
		} else {
			seterror1(false);
		}
	};

	return (
		<>
			<div className="container py-20">
				<form onSubmit={submit}>
					<div className="card mx-auto">
						<a className="singup">Sign Up</a>
						<div className="inputBox1">
							<input
								type="text"
								required="required"
								name="Name"
								onChange={change}
							/>
							<span>Username</span>
						</div>

						<div className="inputBox1">
							<input
								type="email"
								required="required"
								name="Email"
								onChange={change}
							/>
							<span className="user">Email</span>
						</div>

						<div className={error1 ? "inputBox2" : "inputBox1"}>
							<input
								type="password"
								required="required"
								name="Password"
								onChange={change}
							/>
							<span>Password</span>
						</div>
						<div className={error1 ? "inputBox2" : "inputBox1"}>
							<input
								type="password"
								required="required"
								name="cpassword"
								onChange={change}
							/>
							<span>Confirm Password</span>
						</div>

						<div className={loader ? "" : "hidden"}>
							<div className="spinner  "></div>
						</div>

						<p
							className={
								error ? `text-lg text-white bg-red-700 px-2 py-2` : "hidden"
							}>
							User already exists
							<i
								className="fa-solid fa-circle-exclamation ml-1 fa-xl"
								style={{ color: "white" }}></i>
						</p>
						<p
							className={
								error1 ? `text-lg text-white bg-red-700 px-2 py-2` : "hidden"
							}>
							Password does not match
							<i
								className="fa-solid fa-circle-exclamation ml-1 fa-xl"
								style={{ color: "white" }}></i>
						</p>

						<button className="enter" onClick={handelerror}>
							Register
						</button>
					</div>
				</form>
			</div>
			<Footer />
		</>
	);
}
