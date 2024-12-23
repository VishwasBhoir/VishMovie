import { useState, useEffect } from "react";

const useFetchCast = id => {
	const [cast, setCast] = useState(null);

	const URL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`;

	useEffect(() => {
		const fetchCast = async () => {
			try {
				const response = await fetch(URL);
				const data = await response.json();
				setCast(data);
			} catch (error) {
				console.error("Error fetching movie details:", error);
			}
		};

		fetchCast();
	}, [id, URL]);

	return cast;
};

export default useFetchCast;
