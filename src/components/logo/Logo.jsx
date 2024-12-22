import { Link } from "react-router-dom";
import { ToolTip } from "./../../components";

const Logo = () => {
	return (
		<div className="relative group justify-center items-center flex space-x-1">
			<Link to="/">
				<h1 className="text-slate-700 dark:text-slate-300 font-medium text-md">VishMovies</h1>
			</Link>
			<ToolTip title="home" />
		</div>
	);
};
export default Logo;
