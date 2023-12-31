import { Link } from 'react-router-dom';
import Button from '../components/Button';
import CarouselComponent from '../components/CarouselComponent';
import { useAppSelector } from '../redux/hooks';
import Categories from '../components/Categories';
import Collections from '../components/Collections';
import ProposedProducts from '../components/ProposedProducts';

export default function Home() {
  const slideImages = useAppSelector((state) => state.sliderImages);

  return (
    <div className='home'>
      <div className='hero-slider'>
        <CarouselComponent type='hero' images={slideImages} />
        <div className='suggestion-content'>
          <h2 className='secondary-heading animate__animated animate__fadeInDown'>
            Elevate your space
          </h2>
          <Link to='/shop'>
            <Button
              classNames='btn-light-text animate__animated animate__fadeInUp'
              content='Start Shopping'
            />
          </Link>
        </div>
      </div>
      <Categories />
      <Collections />
      <div className='scontainer mt-72'>
        <ProposedProducts title='Top sellers' />
      </div>
    </div>
  );
}
