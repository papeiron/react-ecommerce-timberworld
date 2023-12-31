import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { toggleCart } from '../redux/slice/cartSlice';
import Button from './Button';
import CartItem from './CartItem';
import { IoMdClose as CloseIcon } from 'react-icons/io';

type CartProps = {
  className?: string;
};

export default function Cart({ className }: CartProps) {
  const dispatch = useAppDispatch();
  const addedProductsToCart = useAppSelector((state) => state.cart.items);
  const totalPrice = useAppSelector((state) =>
    state.cart.items.reduce((acc, item) => {
      let total = Number(item.price) * item.quantity;
      return acc + total;
    }, 0)
  );

  const handleCloseCart = () => {
    dispatch(toggleCart());
  };

  return (
    <div className='cart-section'>
      <div className={`cart ${className}`}>
        <CloseIcon onClick={handleCloseCart} className='closeIcon' />
        <h2 className='cart__title'>Cart</h2>
        {addedProductsToCart.map((product, index) => (
          <CartItem key={index} {...product} />
        ))}
        <div className='cart__checkout'>
          <span className='cart__total-price'>
            Total<p>{totalPrice}$ USD</p>
          </span>
          <Link onClick={handleCloseCart} to='/signin'>
            <Button classNames='btn-dark' content='Check out' />
          </Link>
        </div>
      </div>
    </div>
  );
}
