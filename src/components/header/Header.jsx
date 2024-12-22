import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
	DarkLightToggleBtn,
	Logo,
	GlobalSearch,
	SearchMovie,
} from "./../../components";

const Header = () => {
	const [isSearchPopupOpen, setIsSearchPopupOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");

	const navigationItems = [
		{ id: 1, label: "Popular", to: "/popular" },
		{ id: 2, label: "Top Rated", to: "/top-rated" },
		{ id: 3, label: "Upcoming", to: "/upcoming" },
	];

	useEffect(() => {
		// Disable scrolling when popup is open
		if (isSearchPopupOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		// Cleanup on unmount or when popup closes
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isSearchPopupOpen]);

	return (
		<div className=" text-white bg-gray-800 dark:bg-gray-900 dark:text-gray-200 w-full fixed z-50 top-0">
			<div className="  mx-auto py-4 w-[90%]">
				<div className="flex justify-between ">
					<Logo />
					<div className="flex items-center space-x-2 lg:space-x-4  justify-end lg:justify-between">
						<div onClick={() => setIsSearchPopupOpen(true)}>
							<GlobalSearch/>
						</div>
						<DarkLightToggleBtn />
						{/* Large Screen Navigation */}
					</div>
				</div>
				{/* Large Screen Navigation New*/}
			</div>
			<div className=" bg-[#191a1d]">
				<div className="space-x-4 items-center font-medium py-4  w-[90%] mx-auto ">
					<nav className="space-x-2">
						{navigationItems.map(item => (
							<NavLink
								className={({ isActive }) =>
									`border-2 px-3 py-1 rounded-full  ${
										isActive
											? "text-gray-900 bg-slate-400 border-slate-400"
											: "text-slate-400 border-slate-400"
									} hover:text-white hover:border-white duration-300 text-xs lg:text-lg`
								}
								key={item.id}
								to={item.to}
							>
								{item.label}
							</NavLink>
						))}
					</nav>
				</div>
			</div>
			{isSearchPopupOpen && (
				<SearchMovie
					isOpen={isSearchPopupOpen}
					onClose={() => setIsSearchPopupOpen(false)}
				/>
			)}
		</div>
	);
};
export default Header;
