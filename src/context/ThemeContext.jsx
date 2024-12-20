// ThemeContext.jsx
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	// const [darkMode, setDarkMode] = useState(false);

	const toggleTheme = () => setDarkMode(!darkMode);

	const [darkMode, setDarkMode] = useState(() => {
		const savedMode = localStorage.getItem("darkMode");
		return savedMode ? JSON.parse(savedMode) : false;
	});

	return (
		<ThemeContext.Provider value={{ darkMode, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => useContext(ThemeContext);
