import { useEffect } from 'react';
import ProductList from '../layouts/ProductList';
import Sidebar from '../layouts/Sidebar';
import { useAppDispatch } from '../redux/hooks';
import { resetFilters, setCategory } from '../redux/slice/filterSlice';
import { useLocation } from 'react-router-dom';

export default function Shop() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const category = location.state?.category;

  useEffect(() => {
    if (category) {
      dispatch(setCategory(category));
    } else {
      dispatch(resetFilters());
    }
  }, [dispatch, category]);

  return (
    <div className='scontainer'>
      <div className='shop animate__animated  animate__fadeIn'>
        <Sidebar />
        <ProductList />
      </div>
    </div>
  );
}
