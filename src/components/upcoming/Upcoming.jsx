import { useState, useEffect } from "react";
import MovieCard from "../movieCard/MovieCard";
import Pagination from "./../../components/pagination/Pagination";
import useFetchMovies from "../../utils/useFetchMovies";
import { Link } from "react-router-dom";

const Upcoming = () => {
	const [currentPage, setCurrentPage] = useState(1);

	const URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${currentPage}`;

	const [totalPages, moviesData] = useFetchMovies(URL);

	const handlePageChange = page => {
		setCurrentPage(page);
	};

	return (
		<div className="movies-section">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7 mb-24 lg:mb-32">
				{moviesData &&
					moviesData.map(movie => (
						<Link to={`/movie/${movie.id}`} key={movie.id}>
							<MovieCard
								id={movie.id}
								title={movie.title}
								posterPath={movie.poster_path}
								rating={movie.vote_average}
								releaseDate={movie.release_date}
								overview={movie.overview}
							/>
						</Link>
					))}
			</div>
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={handlePageChange}
			/>
		</div>
	);
};

export default Upcoming;
