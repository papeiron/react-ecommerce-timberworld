import { useAppSelector } from '../redux/hooks';
import Collection from './Collection';

export default function Collections() {
  const collections = useAppSelector((state) => state.collections);

  return (
    <div className='collections scontainer'>
      {collections.map((collection, index) => (
        <Collection key={index} collection={collection} />
      ))}
    </div>
  );
}
