import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setBrand, setCategory, setPrice } from '../redux/slice/filterSlice';

type SidebarItemProp = {
  text: string;
} & {
  id?: string;
  title?: string;
};

export default function SidebarItem({ text, id, title }: SidebarItemProp) {
  const dispatch = useAppDispatch();
  const currentCategory = useAppSelector((state) => state.filters.selectedCategory);
  const currentBrand = useAppSelector((state) => state.filters.selectedBrand);
  const currentPrice = useAppSelector((state) => state.filters.selectedPrice);

  const handleFilter = () => {
    if (title == 'Category') {
      dispatch(setCategory(currentCategory == text ? null : text));
    } else if (title == 'Shop by price') {
      dispatch(setPrice(currentPrice == text ? null : text));
    } else if (title == 'Brands') {
      dispatch(setBrand(currentBrand == text ? null : text));
    }
  };

  return id == 'text' ? (
    <a onClick={() => handleFilter()} className='sidebar-section__item'>
      {text}
    </a>
  ) : (
    <a onClick={() => handleFilter()} className='sidebar-section__item'>
      <input id='' type='checkbox' value={text} />
      <p>{text}</p>
    </a>
  );
}
