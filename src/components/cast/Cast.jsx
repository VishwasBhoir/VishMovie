import { CastCard } from "./../../components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Cast = prop => {
	const cast = prop?.cast?.cast;

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 5,
			slidesToSlide: 5, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 4,
			slidesToSlide: 4, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 4,
			slidesToSlide: 4, // optional, default to 1.
		},
	};

	return (
		<>
			<div className="mx-0 lg:mx-5 mb-5 lg:my-10">
				<h1 className="text-4xl font-bold">Cast:</h1>
			</div>
			<Carousel partialVisible={true} responsive={responsive}className="lg:mb-24">
				{cast.map((item, index) => (
					<CastCard key={index} card={item} />
				))}
			</Carousel>
		</>
	);
};

export default Cast;
