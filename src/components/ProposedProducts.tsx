import ProductCard from './ProductCard';
import { withSmallerSize } from './withSmallerSize';
import { useFetchProductsQuery } from '../redux/api/productApiSlice';
import Loading from './Loading';

export default function ProposedProducts({ title }: { title: string }) {
  const { data, isLoading, isError, error } = useFetchProductsQuery();

  const proposedData = data?.filter((product) => product.id < 11);

  const SmallerProductCard = withSmallerSize(ProductCard);
  return (
    <div className='proposed-products'>
      <p className='proposed-products__title secondary-heading'>{title}</p>
      <div className='proposed-products__products'>
        {isLoading ? (
          <Loading />
        ) : (
          proposedData?.map((product) => <SmallerProductCard key={product.id} {...product} />)
        )}
      </div>
    </div>
  );
}
