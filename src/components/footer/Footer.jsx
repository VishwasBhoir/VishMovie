import React from "react";

const Footer = () => {
	return (
		<footer className="bg-[#d3d1ce] dark:bg-gray-800 text-slate-800 dark:text-[#d3d1ce] dark:text-gray-200 py-4">
			<div className="w-[90%] mx-auto text-center">
				<p>
					&copy; {new Date().getFullYear()} VishMovies. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
