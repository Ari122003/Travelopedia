import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import auth from "./Firebase";

export default function Signup() {
	const [details, setdetails] = useState({
		Name: "",
		Email: "",
		Password: "",
		cpassword: "",
	});
	let navigate = useNavigate();
	const change = (e) => {
		setdetails({
			...details,
			[e.target.name]: e.target.value,
		});
	};

	const submit = async (e) => {
		e.preventDefault();
		await createUserWithEmailAndPassword(auth, details.Email, details.Password)
			.then((response) => {
				localStorage.setItem("Token", response.user.uid);
				navigate("/");
			})
			.catch((error) => {
				console.log(error);
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
	};

	return (
		<div className="container py-10">
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

					<div className="inputBox1">
						<input
							type="password"
							required="required"
							name="Password"
							onChange={change}
						/>
						<span>Password</span>
					</div>
					<div className="inputBox1">
						<input
							type="password"
							required="required"
							name="cpassword"
							onChange={change}
						/>
						<span>Confirm Password</span>
					</div>

					<button className="enter">Register</button>
				</div>
			</form>
		</div>
	);
}
