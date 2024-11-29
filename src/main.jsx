import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddUser from "./components/addUser.jsx";
import Layout from "./components/Layout.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout></Layout>,
		children: [
			{
				path: "/",
				element: <App></App>,
				loader: () => fetch("http://localhost:5000/user"),
			},
			{
				path: "/addUser",
				element: <AddUser></AddUser>,
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
