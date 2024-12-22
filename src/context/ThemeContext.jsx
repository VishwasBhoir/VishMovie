import  { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(() => {
		// Check for user's preference or default to light
		return localStorage.getItem("theme") || "light";
	});

	useEffect(() => {
		// Update the `data-theme` attribute on the `html` element
		document.documentElement.setAttribute("data-theme", theme);
		// Save the theme in localStorage
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
