import { useState, useEffect } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const DarkLightToggleBtn = () => {
	const [isDarkMode, setIsDarkMode] = useState(() => {
		const savedMode = localStorage.getItem("darkMode");
		return savedMode ? JSON.parse(savedMode) : false;
	});

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
		localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
	}, [isDarkMode]);

	return (
		<button
			onClick={() => setIsDarkMode(!isDarkMode)}
			className="text-white focus:outline-none"
		>
			{isDarkMode ? (
				<MdOutlineLightMode
					size={20}
					className="bg-gray-600 rounded-full h-7 w-7 p-0.5"
				/>
			) : (
				<MdOutlineDarkMode
					size={20}
					className="bg-gray-600 rounded-full h-7 w-7 p-0.5"
				/>
			)}
		</button>
	);
};

export default DarkLightToggleBtn;
