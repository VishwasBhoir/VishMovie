const GlobalSearch = () => {
	return (
		<div className="flex items-center space-x-2">
			<input
				className="rounded-md h-6 lg:h-9 w-36 lg:w-56 py-1 items-center text-gray-800 text-center text-sm lg:text-sm"
				placeholder="Search Movie Name"
			/>
			{/* <button className="bg-gray-200 text-sm px-2 py-2 rounded-md  text-gray-800">
							Search
						</button> */}
		</div>
	);
};
export default GlobalSearch;
