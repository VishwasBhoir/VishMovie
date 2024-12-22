import { useState, useEffect, useRef } from "react";
import { RiCloseLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { fetchSearchResults } from "../../store/movieDataSlice";
import MovieCard from "../movieCard/MovieCard";
import { Link } from "react-router-dom";

const SearchMovie = ({ isOpen, onClose }) => {
	const dispatch = useDispatch();

	const [searchQuery, setSearchQuery] = useState("");
	const searchResults = useSelector(state => state.MovieData.searchResults);
	const inputRef = useRef(null); // Create a ref for the input element

	// Debounce search input
	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			if (searchQuery) {
				dispatch(fetchSearchResults(searchQuery));
			}
		}, 500);

		return () => clearTimeout(delayDebounceFn);
	}, [searchQuery, dispatch]);

	useEffect(() => {
		if (isOpen && inputRef.current) {
			inputRef.current.focus();
		}
	}, [isOpen]);

	if (!isOpen) return null; // Do not render if popup is closed

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
			<div
				className="bg-white w-[95%] md:w-[70%] xl:w-[60%] rounded shadow-lg p-4 sm:p-10"
				style={{ height: "80vh" }}
			>
				<div className="flex items-center justify-between sticky top-0 z-10 bg-white mb-5">
					<input
						type="text"
						ref={inputRef}
						value={searchQuery}
						onChange={e => setSearchQuery(e.target.value)}
						placeholder="Search Movie..."
						className="w-4/5 md:w-3/5 p-2 border rounded text-gray-800 border-gray-300 focus:outline-gray-300"
					/>
					<button onClick={onClose} className="text-black font-extrabold">
						<RiCloseLine size={24} />
					</button>
				</div>
				<div
					className="overflow-y-auto p-4"
					style={{
						maxHeight: "calc(70vh - 64px)", // Adjust based on header height
					}}
				>
					<div className="grid grid-cols-2  lg:grid-cols-3 gap-7 mb-16 lg:mb-24">
						{searchResults
							? searchResults.map((movie, index) => (
									<Link
										to={`/movie/${movie.id}`}
										key={movie.id}
										onClick={onClose}
									>
										<MovieCard
											id={movie.id}
											title={movie.title}
											posterPath={movie.poster_path}
											rating={movie.vote_average}
											releaseDate={movie.release_date}
											overview={movie.overview}
										/>
									</Link>
							  ))
							: null}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchMovie;
