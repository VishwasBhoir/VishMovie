const GlobalSearch = () => {
	return (
		<div className="flex items-center space-x-2">
			<input
				className="rounded-md h-6 lg:h-9 w-44 lg:w-60 px-3  text-gray-800 text-[13px] lg:text-sm"
				placeholder="Search Movie..."
			/>
			{/* <button className="bg-gray-200 text-sm px-2 py-2 rounded-md  text-gray-800">
							Search
						</button> */}
		</div>
	);
};
export default GlobalSearch;
