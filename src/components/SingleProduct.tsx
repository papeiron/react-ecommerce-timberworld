import Carousel from './CarouselComponent';
import { type Product as SingleProductProps } from '../redux/api/productApiSlice';
import ProposedProducts from './ProposedProducts';
import { useAppDispatch } from '../redux/hooks';
import { addToCart } from '../redux/slice/cartSlice';

export default function SingleProduct(props: SingleProductProps) {
  const { id, productName, brand, price, img, description, size, texture, weight } = props;
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({ id, productName, price, img, quantity: 1 }));
  };

  return (
    <div className='scontainer'>
      <div className='single-product animate__animated  animate__fadeIns'>
        <div className='single-product__top'>
          <div className='single-product__images'>
            <Carousel type='product' images={img} />
          </div>
          <div className='single-product__details'>
            <p className='single-product__name heading'>{productName}</p>
            <p className='single-product__brand'>{brand}</p>
            <p className='single-product__description'>{description}</p>
            <p className='single-product__price'>{price}$</p>
            <div className='single-product__buttons'>
              <button onClick={handleAddToCart} className='btn'>
                Add to Cart
              </button>
              <button className='btn'>Buy now</button>
            </div>
          </div>
        </div>
        <div className='single-product__bottom'>
          <div className='single-product__extra'>
            <span>
              Texture: <p>{texture}</p>
            </span>
            <span>
              Size: <p>{size}</p>
            </span>
            <span>
              Weight: <p>{weight}</p>
            </span>
          </div>
        </div>
      </div>
      <ProposedProducts title='Suggested' />
    </div>
  );
}
