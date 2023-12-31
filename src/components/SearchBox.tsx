import SearchBoxElement from './SearchBoxElement';
import { useFetchProductsQuery } from '../redux/api/productApiSlice';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Loading from './Loading';

type SearchBox = {
  inputVal: string;
  setInput: (inputVal: string) => void;
};

export default function SearchBox({ setInput, inputVal }: SearchBox) {
  const { data, isLoading } = useFetchProductsQuery();
  const [isOpen, setIsOpen] = useState(true);

  const handleLinkClick = () => {
    setIsOpen(false);
    setInput('');
  };

  const filteredData = data?.filter((product) => {
    const productNameLowerCase = product.productName.toLowerCase();
    const productBrandLowerCase = product.brand.toLowerCase();

    return (
      productNameLowerCase.includes(inputVal) ||
      product.productName.includes(inputVal) ||
      product.brand.includes(inputVal) ||
      productBrandLowerCase.includes(inputVal)
    );
  });

  if (!isOpen) return null;

  return (
    <div className='search-box'>
      {isLoading ? (
        <Loading />
      ) : (
        filteredData?.map((product, index) => (
          <Link to={`shop/${product.id}`} key={index} onClick={handleLinkClick}>
            <SearchBoxElement brand={product.brand} img={product.img} title={product.productName} />
          </Link>
        ))
      )}
    </div>
  );
}
