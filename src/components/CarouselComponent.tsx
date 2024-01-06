import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from './shadcn/carousel';

import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

type CarouselProps = {
  images: string[];
  type: 'hero' | 'product';
};

export default function CarouselComponent({ images, type }: CarouselProps) {
  return (
    <Carousel className='carousel'>
      <CarouselContent className='content'>
        {images.map((image, index) => (
          <CarouselItem className='item' key={index}>
            {type == 'product' ? (
              <Zoom>
                <img src={image} />
              </Zoom>
            ) : (
              <img src={image} />
            )}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='carousel-btn carousel-prev' />
      <CarouselNext className='carousel-btn carousel-next' />
    </Carousel>
  );
}
