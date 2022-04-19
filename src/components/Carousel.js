import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import { noPicture, img_300 } from '../config/config';

import { CarouselContainer, CarouselItem, CarouselImage, Name } from './styles/Carousel.styled';



const Carousel = ({ list }) => {

	const handleDragStart = (e) => e.preventDefault();

	const items = list.map(actor => (<>
		<CarouselItem key={actor.id} >
			<CarouselImage 
				src={actor.profile_path === null ? noPicture : `${img_300}${actor.profile_path}` }
				alt={actor.name || actor.original_name}
				onDragStart={handleDragStart}
			 /> 
			 <Name>{actor.name || actor.original_name}</Name>
		</CarouselItem>
	</>))

	const responsive = {
		0: { items: 3 },
		768: { items: 5 },
		1025: { items: 7 },
	}

	return (  
			
		<CarouselContainer>
			<p>Cast :</p>
			{ list &&
				<AliceCarousel 
					mouseTracking
		      		infinite
		    		disableDotsControls
		      		disableButtonsControls
		      		responsive={responsive}
		      		items={items}
		      		autoPlay
					autoPlayInterval={1500}
				 />
			}
		</CarouselContainer>		
		
	)
}

export default Carousel