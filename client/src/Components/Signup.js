import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "./Firebase";

export default function Signup() {
	const [details, setdetails] = useState({
		Name: "",
		Bio: "",
		Email: "",
		Password: "",
		cpassword: "",
	});

	const change = (e) => {
		setdetails({
			...details,
			[e.target.name]: e.target.value,
		});

		console.log(details);
	};

	const submit = (e) => {
		e.preventDefault();
		createUserWithEmailAndPassword(auth, details.Email, details.Password)
			.then((response) => {
				localStorage.setItem("Token",response._tokenResponse.idToken)
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="container py-10">
			<form onSubmit={submit}>
				<div className="card mx-auto">
					<a className="singup">Sign Up</a>
					<div className="inputBox">
						<input
							type="text"
							required="required"
							name="Name"
							onChange={change}
						/>
						<span>Username</span>
					</div>
					<div className="inputBox">
						<input
							type="text"
							required="required"
							name="Bio"
							onChange={change}
						/>
						<span>Bio</span>
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

					<div className="inputBox">
						<input
							type="password"
							required="required"
							name="Password"
							onChange={change}
						/>
						<span>Password</span>
					</div>
					<div className="inputBox">
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
