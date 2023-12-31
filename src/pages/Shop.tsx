import { useEffect } from 'react';
import ProductList from '../layouts/ProductList';
import Sidebar from '../layouts/Sidebar';
import { useAppDispatch } from '../redux/hooks';
import { resetFilters, setCategory } from '../redux/slice/filterSlice';
import { useLocation } from 'react-router-dom';

export default function Shop() {
  const dispatch = useAppDispatch();
  let { state } = useLocation();
  const category = state?.category || false;
  if (category) {
    useEffect(() => {
      dispatch(setCategory(state.category));
    }, []);
  } else {
    useEffect(() => {
      dispatch(resetFilters());
    }, []);
  }

  return (
    <div className='scontainer'>
      <div className='shop animate__animated  animate__fadeIn'>
        <Sidebar />
        <ProductList />
      </div>
    </div>
  );
}
