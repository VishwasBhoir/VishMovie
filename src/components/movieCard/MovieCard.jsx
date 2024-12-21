/* eslint-disable react/prop-types */
import { useState } from "react";

const MovieCard = props => {
	const { id, title, posterPath, rating, releaseDate, overview } = props;

	const [showOverview, setShowOverview] = useState(false);
	const imageUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;

	return (
		<div
			className="cursor-pointer hover:scale-105 duration-300 relative rounded-lg"
			//background image style for card
			style={{
				backgroundImage: `url(${imageUrl})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				height: "max(20rem)",
				width: "100%",
			}}
			onMouseOver={() => setShowOverview(true)}
			onMouseLeave={() => setShowOverview(false)}
		>
			{" "}
			{showOverview && (
				<div className=" h-full w-full absolute bottom-0 bg-gradient-to-b from-black/30 to-black/100 flex dark:text-white rounded-lg">
					{/* <img src={imageUrl} alt={title} className="movie-poster" /> */}

					<div className="movie-details w-full bg-gradient-to-b from-black/0 to-black/100 absolute bottom-0 rounded-lg">
						<div className="w-[90%] mx-auto py-2">
							<h3 className="movie-title">{title}</h3>
							<p className="movie-rating">Rating: {rating.toFixed(1)}</p>
							<p className="movie-release-date">Release Date: {releaseDate}</p>
							{/* {showOverview && <p className="movie-overview">{overview}</p>} */}
						</div>
					</div>
				</div>
			)}
			<div className=" h-full w-full absolute bottom-0 bg-gradient-to-b from-black/30 to-black/100 block lg:hidden dark:text-white rounded-lg">
				{/* <img src={imageUrl} alt={title} className="movie-poster" /> */}

				<div className="movie-details w-full bg-gradient-to-b from-black/0 to-black/100 absolute bottom-0 rounded-lg">
					<div className="w-[90%] mx-auto py-2">
						<h3 className="movie-title">{title}</h3>
						<p className="movie-rating">Rating: {rating.toFixed(1)}</p>
						<p className="movie-release-date">Release Date: {releaseDate}</p>
						{/* {showOverview && <p className="movie-overview">{overview}</p>} */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
