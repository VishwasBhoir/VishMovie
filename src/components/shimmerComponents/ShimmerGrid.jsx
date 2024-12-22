import MovieCardShimmer from "./MovieCardShimmer";

const ShimmerGrid = () => {
	// declare arr with length of 10 with no data
	const arr = new Array(20).fill(null);

	return (
		<div className="movies-section">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7 mb-16 lg:mb-24 mx-auto">
				{arr.map((_, index) => (
					<MovieCardShimmer key={index} />
				))}
			</div>
		</div>
	);
};
export default ShimmerGrid;
