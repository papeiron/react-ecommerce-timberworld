import { IoIosArrowForward as RightArrow } from 'react-icons/io';
import Loading from '../components/Loading';
import ProductCard from '../components/ProductCard';
import { priceChecker } from '../helper/priceChecker';
import { useFetchProductsQuery } from '../redux/api/productApiSlice';
import { useAppSelector } from '../redux/hooks';
import { useEffect, useState } from 'react';

type FilterValues = {
  selectedPrice: string | null;
  selectedCategory: string | null;
  selectedBrand: string | null;
};

export default function ProductList() {
  const { data, isLoading } = useFetchProductsQuery();
  const filteringValues = useAppSelector((store) => store.filters as FilterValues);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [visiblePaginationPages, setvisiblePaginationPages] = useState<(number | string)[]>([]);
  const MAX_VISIBLE_PAGES = 3;

  const filteredData =
    data?.filter((product) => {
      const categoryMatches = filteringValues.selectedCategory
        ? product.category === filteringValues.selectedCategory
        : true;

      const brandMatches = filteringValues.selectedBrand
        ? product.brand === filteringValues.selectedBrand
        : true;

      const priceMathes = filteringValues.selectedPrice
        ? priceChecker(product.price, filteringValues)
        : true;

      return categoryMatches && brandMatches && priceMathes;
    }) || [];

  let totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handlePaginationIncrease = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (totalPages <= MAX_VISIBLE_PAGES) {
      setvisiblePaginationPages(Array.from({ length: totalPages }, (_, i) => i + 1));
    } else {
      const startPage = Math.max(1, currentPage - 1);
      const endPage = Math.min(totalPages, currentPage + 1);

      const pages = [];
      if (startPage > 1) {
        pages.push(1);
        pages.push('...');
      }
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      if (endPage < totalPages) {
        pages.push('...');
        pages.push(totalPages);
      }

      setvisiblePaginationPages(pages);
    }
  }, [currentPage, totalPages]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayItems = filteredData?.slice(startIndex, endIndex);

  return (
    <section className='product-list '>
      {isLoading ? (
        <Loading />
      ) : (
        <div className='products'>
          {displayItems?.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      )}
      <div className='pagination'>
        <div className='pagination'>
          {visiblePaginationPages.map((page, index) => (
            <span
              key={index}
              onClick={() => typeof page === 'number' && handlePageChange(page)}
              className={`${page === currentPage ? 'active' : ''}`}
            >
              {page}
            </span>
          ))}
        </div>
        {totalPages > 1 ? (
          <span onClick={handlePaginationIncrease}>
            <RightArrow />
          </span>
        ) : null}
      </div>
    </section>
  );
}
