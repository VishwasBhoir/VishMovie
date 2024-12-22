import userImg from "./../../assets/userImg.jpg";

const CastCard = props => {
	const { card } = props;

	console.log("card...", card);
	return (
		<div className="mx-3">
			<img
				src={`https://image.tmdb.org/t/p/w500${card.profile_path}`}
				alt={card.name}
				style={{
					backgroundImage: `url(${userImg})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
        }}
        className="h-32 md:h-72 lg:h-[380px] xl:h-[430px] rounded-md"
			/>
			<h1 className="mt-2 xl:text-xl">{card.name}</h1>
			<h2 className="text-sm xl:text-md text-slate-500">{card.character}</h2>
		</div>
	);
};
export default CastCard;
