import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { Home, TopRated, Upcoming, MovieDetails } from "./components/index.js";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: "top-rated",
				element: <TopRated />,
			},
			{
				path: "popular",
				element: <Home />,
			},
			{
				path: "upcoming",
				element: <Upcoming />,
			},
			{
				path: "movie/:id",
				element: <MovieDetails />,
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</StrictMode>
);
