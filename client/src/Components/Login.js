import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import Footer from "./Footer";
import auth from "./Firebase";

export default function Login(props) {
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

	const [error, seterror] = useState(false);

	const [loader, setloader] = useState(false);

	const submit = async (e) => {
		seterror(false);
		setloader(true);
		e.preventDefault();
		await signInWithEmailAndPassword(auth, details.Email, details.Password)
			.then((response) => {
				setloader(false);
				navigate("/");
				localStorage.setItem("Token", response.user.uid);
				props.showalert("warning", "Login Successfull");
			})
			.catch(() => {
				setloader(false);
				seterror(true);
			});
	};

	return (
		<>
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

						<div className="inputBox1">
							<input
								type="password"
								required="required"
								name="Password"
								onChange={change}
							/>
							<span>Password</span>
						</div>

						<button className="enter">Log in</button>
						<div className={loader ? "" : "hidden"}>
							<div className="spinner  "></div>
						</div>

						<p
							className={
								error ? `text-lg text-white bg-red-700 px-2 py-2` : "hidden"
							}>
							Invalid credentials
							<i
								className="fa-solid fa-circle-exclamation ml-1 fa-xl"
								style={{ color: "white" }}></i>
						</p>
						<Link className="pb-10 " id="navlink" to="/signup">
							Don't have an account? Signup
						</Link>
					</div>
				</form>
			</div>

			<Footer />
		</>
	);
}
