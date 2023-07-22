import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Account from "./Components/Account.js";
import Login from "./Components/Login.js";
import Signup from "./Components/Signup.js";
import About from "./Components/About.js";
import Editprofile from "./Components/Editprofile";
import React, { useState } from "react";
import Addblogs from "./Components/Addblogs";
import Editblogs from "./Components/Editblogs";
import Alerts from "./Components/Alerts";

function App() {
	const [details, setdetails] = useState({
		Name: "",
		Bio: "",
	});

	const showuser = async () => {
		await fetch("http://localhost:8000/api/user/fetchuser", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ Token: localStorage.getItem("Token") }),
		})
			.then((response) => {
				return response.json();
			})
			.then((result) => {
				let [user] = result;
				setdetails({ Name: user.Name, Bio: user.Bio });
			});
	};

	const [alert, setalert] = useState({
		type: "",
		message: "",
		trigger: false,
	});

	const showalert = (type, message) => {
		setalert({ type: type, message: message, trigger: true });

		setTimeout(() => {
			setalert({ type: type, message: message, trigger: false });
		}, 3000);
	};

	return (
		<>
			<Navbar showalert={showalert} />
			<Alerts
				type={alert.type}
				message={alert.message}
				trigger={alert.trigger}
			/>

			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/profile" element={<Account alert={showalert} />} />
				<Route exact path="/login" element={<Login showalert={showalert} />} />
				<Route exact path="/signup" element={<Signup alert={showalert} />} />
				<Route exact path="/about" element={<About />} />
				<Route
					exact
					path="/addblogs"
					element={<Addblogs alert={showalert} />}
				/>

				<Route
					exact
					path="/editblogs"
					element={<Editblogs alert={showalert} />}
				/>

				<Route
					exact
					path="/editprofile"
					element={
						<Editprofile
							Name={details.Name}
							Bio={details.Bio}
							showuser={showuser}
							showalert={showalert}
						/>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
