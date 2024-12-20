import { useState, useEffect } from "react";

const useFetchMovieDetails = URL => {
	const [movie, setMovie] = useState(null);

	useEffect(() => {
		const fetchMovie = async () => {
			try {
				const response = await fetch(URL);
				const data = await response.json();
				setMovie(data);
			} catch (error) {
				console.error("Error fetching movie details:", error);
			}
		};

		fetchMovie();
	}, [URL]);

	return movie;
};

export default useFetchMovieDetails;
