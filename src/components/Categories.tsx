import { Link } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';
import CategoryCard from './CategoryCard';

export default function Categories() {
  const categoryImages = useAppSelector((state) => state.categoryImages);

  return (
    <div className='categories scontainer'>
      {categoryImages.map((image, index) => (
        <Link to={'/shop'} state={{ category: image[0] }} key={index}>
          <CategoryCard image={image} />
        </Link>
      ))}
    </div>
  );
}
