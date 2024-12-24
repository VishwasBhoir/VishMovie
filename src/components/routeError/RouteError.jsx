import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
	const error = useRouteError(); // React Router provides error details
	console.error(error);

	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gray-100">
			<h1 className="text-4xl font-bold text-red-500">Oops!</h1>
			<p className="text-lg text-gray-500 mt-4">Something went wrong.</p>
			<p className="text-lg text-gray-500 mt-4">
				<span className="text-xl text-gray-700">Please, Refresh...</span> or try
				after some time.
			</p>
			{error && (
				<p className="text-sm mt-2">{error.statusText || error.message}</p>
			)}
			<a
				href="/"
				className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
			>
				Go Back to Home
			</a>
		</div>
	);
};

export default ErrorPage;
