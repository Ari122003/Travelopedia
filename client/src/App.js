import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Account from "./Components/Account.js";
import Login from "./Components/Login.js";
import Signup from "./Components/Signup.js";
import About from "./Components/About.js";

function App() {
	return (
		<>
			<Navbar />

			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/profile" element={<Account />} />
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/signup" element={<Signup />} />
				<Route exact path="/about" element={<About />} />
			</Routes>
		</>
	);
}

export default App;
