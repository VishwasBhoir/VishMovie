import React from "react";

const Footer = () => {
	return (
		<footer className="bg-gray-800 dark:bg-gray-900 text-white dark:text-gray-200 py-4">
			<div className="w-[90%] mx-auto text-center">
				<p>
					&copy; {new Date().getFullYear()} VishMovies. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
