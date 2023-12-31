import { NavLink } from 'react-router-dom';
import lightLogo from '../assets/img/logo-light.png';
import { BsBag as CartIcon } from 'react-icons/bs';
import { IoMdSearch as Search } from 'react-icons/io';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { toggleCart } from '../redux/slice/cartSlice';
import SearchBox from './SearchBox';
import { ChangeEvent, useState } from 'react';

export default function NavbarBottom() {
  const [input, setInput] = useState('');
  const dispatch = useAppDispatch();
  const cartQuantity = useAppSelector((state) =>
    state.cart.items.reduce((sum, item) => {
      return sum + Number(item.quantity);
    }, 0)
  );

  const handleCart = () => {
    dispatch(toggleCart());
  };

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className='bottom'>
      <div className='start'>
        <NavLink className='logo' to='/'>
          <img src={lightLogo} />
        </NavLink>
      </div>
      <div className='mid'>
        <NavLink to='/shop'>Shop</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </div>
      <div className='end'>
        <div className='search'>
          <input
            onChange={(e) => handleSearchInput(e)}
            value={input}
            placeholder='Search'
            type='text'
          />
          <Search className='search-icon icon' />
          {input.length > 0 ? <SearchBox setInput={setInput} inputVal={input} /> : null}
        </div>
        <div className='end__icon'>
          <CartIcon onClick={handleCart} className='icon' />
          {cartQuantity > 0 ? <p className='cart-quantity'>{cartQuantity}</p> : null}
        </div>
      </div>
    </div>
  );
}
