import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "./Firebase";

export default function Login() {
	const [details, setdetails] = useState({
		Email: "",
		Password: "",
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
		await signInWithEmailAndPassword(auth, details.Email, details.Password)
			.then((response) => {
				navigate("/");
				localStorage.setItem("Token", response.user.uid);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="container py-10">
			<form onSubmit={submit}>
				<div className="card mx-auto">
					<a className="singup">Log In</a>

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

					<button className="enter">Log in</button>
					<Link className="pb-10" id="navlink" to="/signup">
						Don't have an account? Signup
					</Link>
				</div>
			</form>
		</div>
	);
}
