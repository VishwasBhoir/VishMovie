import { useEffect, useState } from "react";

const useFetchMovies = URL => {
	const [moviesData, setMoviesData] = useState(null);
	const [totalPages, setTotalPages] = useState(1);

	// const URL = `https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${currentPage}`;

	useEffect(() => {
		const fetchMovies = async () => {
			try {
				const response = await fetch(URL);
				const data = await response.json();
				setMoviesData(data.results);
				setTotalPages(data.total_pages);
			} catch (error) {
				console.error("Error fetching movies:", error);
			}
		};

		fetchMovies();
	}, [URL, totalPages]);

	return [totalPages, moviesData];
};

export default useFetchMovies;
