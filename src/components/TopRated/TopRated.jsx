import { useEffect } from "react";
import { MovieCard, ShimmerGrid } from "./../../components";
import Pagination from "./../../components/pagination/Pagination";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies, setPage } from "./../../store/movieDataSlice";

const TopRated = () => {
	const dispatch = useDispatch();
	const { data, currentPage, totalPages } = useSelector(
		state => state.MovieData.top_rated
	);

	const status = useSelector(state => state.MovieData.status);

	useEffect(() => {
		dispatch(fetchMovies({ category: "top_rated", page: currentPage }));
	}, [dispatch, currentPage]);

	const handlePageChange = page => {
		dispatch(setPage({ category: "top_rated", page }));
	};

	if (status === "loading") return <ShimmerGrid />;
	if (status === "failed")
		return (
			<div className="flex justify-center h-screen">
				<p className="font-semibold text-10 text-center mt-32">
					Error loading movies
				</p>
			</div>
		);

	return (
		<>
			{console.log("data", data)}
			<div className="movies-section">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7 mb-16 lg:mb-24">
					{data &&
						data.map(movie => (
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
		</>
	);
};

export default TopRated;
