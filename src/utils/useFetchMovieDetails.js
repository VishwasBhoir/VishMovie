import { useState, useEffect } from "react";

const useFetchMovieDetails = id => {
	const [movie, setMovie] = useState(null);

	const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`;

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
