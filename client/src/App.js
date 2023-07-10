import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Account from "./Components/Account.js";
import Login from "./Components/Login.js";
import Signup from "./Components/Signup.js";
import About from "./Components/About.js";
import Editprofile from "./Components/Editprofile";
import React, { useEffect, useState } from "react";

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

	
	return (
		<>
			<Navbar />

			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/profile" element={<Account />} />
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/signup" element={<Signup />} />
				<Route exact path="/about" element={<About />} />
				<Route
					exact
					path="/editprofile"
					element={<Editprofile Name={details.Name} Bio={details.Bio} showuser={showuser}/>}
				/>
			</Routes>
		</>
	);
}

export default App;
