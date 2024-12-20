import MovieCard from "../movieCard/MovieCard";

const Popular = () => {
  return (
		<div className="movies-section">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-7 gap-y-24 mb-24 lg:mb-32">
				<MovieCard />
				<MovieCard />
				<MovieCard />
				<MovieCard />
				<MovieCard />
				<MovieCard />
			</div>
		</div>
	);
}
export default Popular