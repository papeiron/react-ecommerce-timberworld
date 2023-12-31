import { useParams } from 'react-router-dom';
import SingleProduct from '../components/SingleProduct';
import { useFetchProductQuery } from '../redux/api/productApiSlice';
import Loading from '../components/Loading';

export default function ProductPage() {
  const { id } = useParams();
  const { data, isLoading, isError } = useFetchProductQuery(Number(id));

  if (isLoading) {
    return <Loading />;
  }

  if (isError || !data) {
    return <div>Error occurred or product not found.</div>;
  }

  return (
    <div className='product-page mt-36'>
      {isLoading ? <Loading /> : <SingleProduct {...data} />}
    </div>
  );
}
