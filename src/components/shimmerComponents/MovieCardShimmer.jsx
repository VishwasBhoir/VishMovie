const MovieCardShimmer = () => {
	return (
		<div className=" relative rounded-lg h-[320px] w-[100%] bg-gray-300 dark:bg-gray-800 border-2 border-gray-700">
			<div className=" h-full w-full absolute bottom-0 bg-gradient-to-b from-white/30  to-white/100 dark:from-black/30 dark:to-black/100 flex dark:text-white rounded-lg">
				<div className="movie-details w-full bg-gradient-to-b from-black/0 to-black/100 absolute bottom-0 rounded-lg">
					<div className="w-[90%] mx-auto py-2">
						<div className="movie-title"></div>
						<div className="movie-rating"></div>
						<div className="movie-release-date"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieCardShimmer;
