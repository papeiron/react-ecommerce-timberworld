import React, { useEffect, useState } from 'react';
import { MdOutlineRemoveShoppingCart } from 'react-icons/md';
import {
  removeFromCart,
  type CartItem,
  removeFromCartOne,
  addToCartOne,
  updateQuantityInCart
} from '../redux/slice/cartSlice';
import { useAppDispatch } from '../redux/hooks';

type CartItemsProps = CartItem;

export default function CartItem({ id, img, productName, price, quantity }: CartItemsProps) {
  const [inputQuantity, setInputQuantity] = useState(quantity);
  const dispatch = useAppDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart({ id }));
  };

  const handleIncreaseQuantity = () => {
    setInputQuantity((prevQuantity) => prevQuantity + 1);
    dispatch(addToCartOne({ id: id }));
  };

  const handleDescreaseQuantity = () => {
    setInputQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
    dispatch(removeFromCartOne({ id: id }));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number(event.target.value);
    dispatch(updateQuantityInCart({ id: id, quantity: newQuantity }));
  };

  useEffect(() => {
    setInputQuantity(quantity);
  }, [quantity]);

  return (
    <div>
      <div className='cart-item'>
        <div className='left'>
          <img src={img[0]} alt='' />
        </div>
        <div className='mid'>
          <p className='cart-item__product'>{productName}</p>
        </div>
        <div className='right'>
          <div className='cart-item__quantatity'>
            <span
              onClick={handleDescreaseQuantity}
              className='cursor-pointer rounded-l text-white bg-black py-1 px-3.5 duration-100 hover:opacity-70 hover:text-blue-50'
            >
              -
            </span>
            <input
              className='h-8 w-8 border bg-white text-center text-xs outline-none'
              type='number'
              min={1}
              value={inputQuantity}
              onChange={handleInputChange}
            />
            <span
              onClick={handleIncreaseQuantity}
              className='cursor-pointer rounded-r text-white bg-black py-1 px-3 duration-100 hover:opacity-70 hover:text-blue-50'
            >
              +
            </span>
          </div>
          <div className='cart-item__price'>
            <p className='price'>{price}$</p>
            <button onClick={handleRemoveFromCart}>
              <MdOutlineRemoveShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
