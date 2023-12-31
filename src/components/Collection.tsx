import Button from './Button';
import { type Collections } from '../redux/slice/collectionSlice';
import { Link } from 'react-router-dom';

type CollectionProps = {
  collection: Collections;
};

export default function Collection({ collection }: CollectionProps) {
  return (
    <div className='collection'>
      <div className='left '>
        <Link to={'/shop'}>
          <div className='collection__img'>
            <img src={collection.img[0]} alt='' />
          </div>
        </Link>
      </div>
      <div className='right '>
        <Link to={'/shop'}>
          <div className='collection__img'>
            <img src={collection.img[1]} alt='' />
          </div>
        </Link>
      </div>
      <div className='mid'>
        <h2 className='collection__title secondary-heading'>{collection.title}</h2>
        <p className='collection__text'>{collection.text}</p>

        <Link to={'/shop'}>
          <Button classNames='btn' content='Explore' />
        </Link>
      </div>
    </div>
  );
}
