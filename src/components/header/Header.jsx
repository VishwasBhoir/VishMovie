import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { DarkLightToggleBtn, Logo, GlobalSearch } from "./../../components";

const Header = ({ onSearch }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");

	const navigationItems = [
		{ id: 1, label: "Popular", to: "/popular" },
		{ id: 2, label: "Top Rated", to: "/top-rated" },
		{ id: 3, label: "Upcoming", to: "/upcoming" },
	];

	const handleSearchChange = e => {
		setSearchQuery(e.target.value);
		onSearch(e.target.value);
	};

	return (
		<div className="bg-gray-800 dark:bg-gray-900 text-white dark:text-gray-200 w-full">
			<div className="w-[90%] mx-auto py-4 flex justify-between">
				<Logo />
				<div className="flex items-center space-x-2 lg:space-x-4 w-[60%] justify-end lg:justify-between">
					<GlobalSearch value={searchQuery} onChange={handleSearchChange} />

					{/* Large Screen Navigation */}
					<div className="hidden lg:flex justify-center space-x-4 items-center font-medium ">
						<nav className="space-x-4">
							{navigationItems.map(item => (
								<NavLink
									className={({ isActive }) =>
										` ${
											isActive ? "text-white" : "text-slate-400"
										} hover:text-white`
									}
									key={item.id}
									to={item.to}
								>
									{item.label}
								</NavLink>
							))}
						</nav>
						<div className="relative group flex items-center space-x-2">
							<DarkLightToggleBtn />
						</div>
					</div>

					{/* Hamburger Menu (Small Screens Only) */}

					<div className="block lg:hidden space-x-3">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="text-white focus:outline-none"
						>
							{isOpen ? (
								<FaTimes className="w-6 h-6 text-black dark:text-gray-200" /> // Close icon
							) : (
								<FaBars className="w-6 h-6 text-black dark:text-gray-200" /> // Menu icon
							)}
						</button>
					</div>

					<div className="block lg:hidden items-center">
						<DarkLightToggleBtn />
					</div>

					{/* Small Screen Navigation */}
					<nav
						className={`fixed inset-0 w-full bg-white dark:bg-[#0e0e0e] dark:text-gray-200 bg-opacity-100 transform ${
							isOpen ? "translate-y-16 " : "-translate-y-full"
						} transition-transform duration-300 lg:hidden z-40`}
					>
						<ul className="flex flex-col justify-start items-start p-4 space-y-4 font-medium">
							{navigationItems.map(item => (
								<li key={item.id}>
									<NavLink
										onClick={() => setIsOpen(false)}
										to={item.to}
										className="block py-2 px-4 hover:text-white rounded"
									>
										{item.label}
									</NavLink>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};
export default Header;
