const ToolTip = ({ title }) => {
	return (
		<div className="absolute top-1/2 w-max transform translate-y-3 mt-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 bg-gray-500 text-slate-50 text-sm px-3 py-1 rounded shadow-lg transition-all duration-300 hidden lg:block">
			{title}
		</div>
	);
};
export default ToolTip;
