import { useParams } from "react-router-dom";
import useFetchMovieDetails from "../../utils/useFetchMovieDetails";
import useFetchCast from "../../utils/useFetchCast";
import { Cast } from "./../../components";

const MovieDetails = () => {
	const { id } = useParams();

	const movie = useFetchMovieDetails(id);
	const cast = useFetchCast(id);

	if (!movie) {
		return <div>Loading...</div>;
	}

	return (
		<div className="movie-details-page bg-white dark:bg-[#191a1d] text-slate-800 dark:text-white mt-28 px-7 py-4">
			<div className="container mx-auto py-8">
				<div className="flex flex-col lg:flex-row">
					<img
						src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
						alt={movie.title}
						className="w-full lg:w-1/3 rounded-lg shadow-lg"
					/>
					<div className="lg:ml-8 mt-4 lg:mt-0">
						<h1 className="text-4xl font-bold">{movie.title}</h1>
						<p className="text-gray-400 mt-2">{movie.release_date}</p>
						<p className="mt-4">{movie.overview}</p>
						<p className="mt-4">
							<span className="font-bold">Rating:</span> {movie.vote_average}
						</p>
						<p className="mt-4">
							<span className="font-bold">Running Time:</span>{" "}
							{Math.floor(movie.runtime / 60) +
								"h " +
								(movie.runtime % 60) +
								"m"}
						</p>
						<p className="mt-4">
							<span className="font-bold">Genres:</span>{" "}
							{movie.genres.map(genre => genre.name).join(", ")}
						</p>
					</div>
				</div>
			</div>
			<Cast cast={cast} />
		</div>
	);
};

export default MovieDetails;
