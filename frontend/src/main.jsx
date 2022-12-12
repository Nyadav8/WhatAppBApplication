import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./Routes";
import { CookiesProvider } from "react-cookie";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<CookiesProvider>
			<Routes />
			<ToastContainer theme="colored" position="bottom-center" autoClose={5000} hideProgressBar={true} pauseOnFocusLoss pauseOnHover />
		</CookiesProvider>
	</React.StrictMode>
);
