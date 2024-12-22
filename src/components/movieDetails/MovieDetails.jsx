import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchMovieDetails from "../../utils/useFetchMovieDetails";

const MovieDetails = () => {
	const { id } = useParams();

	const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`;

	const movie = useFetchMovieDetails(URL);

	if (!movie) {
		return <div>Loading...</div>;
	}

	return (
		<div className="movie-details-page bg-gray-900 text-white">
			{console.log("movie", movie)}
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
							<span className="font-bold">Genres:</span>{" "}
							{movie.genres.map(genre => genre.name).join(", ")}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieDetails;
