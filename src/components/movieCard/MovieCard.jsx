/* eslint-disable react/prop-types */
import { useState } from "react";

const MovieCard = props => {
	const { id, title, posterPath, rating, releaseDate, overview } = props;

	const [showOverview, setShowOverview] = useState(false);
	const imageUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;

	return (
		<div className="movie-card cursor-pointer">
			<img src={imageUrl} alt={title} className="movie-poster" />
			<div className="movie-details">
				<h3 className="movie-title">{title}</h3>
				<p className="movie-rating">Rating: {rating.toFixed(1)}</p>
				<p className="movie-release-date">Release Date: {releaseDate}</p>
				{showOverview && <p className="movie-overview">{overview}</p>}
				<button
					onClick={e => {
						e.stopPropagation();
						setShowOverview(!showOverview);
					}}
					className="read-more-btn"
				>
					{showOverview ? "Show Less" : "Read More"}
				</button>
			</div>
		</div>
	);
};

export default MovieCard;
