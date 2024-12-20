const Settings = ({ show, onClose, children }) => {
	if (!show) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
			<div className="bg-white rounded-lg p-4 shadow-lg relative">
				<button
					className="absolute top-2 right-2 text-red-500 font-bold"
					onClick={onClose}
				>
					×
				</button>
				{children}
			</div>
		</div>
	);
};

export default Settings;
