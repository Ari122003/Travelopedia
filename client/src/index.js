import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import BlogContext from "./Contexts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<HashRouter basename="/">
		<BlogContext>
			<App/>
		</BlogContext>
	</HashRouter>
);
