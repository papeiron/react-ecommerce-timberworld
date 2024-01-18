import { useState } from 'react';
import { type Product } from '../redux/api/productApiSlice';
import { Link } from 'react-router-dom';

type ProductProps = Product;

export default function Product({ productName, brand, price, img, id }: ProductProps) {
  const [currentImg, setCurrentImg] = useState<string>(img[0]);
  const handleMouseOver = () => {
    setCurrentImg(img[1]);
  };
  const handleMouseLeave = () => {
    setCurrentImg(img[0]);
  };

  return (
    <Link onMouseLeave={handleMouseLeave} onMouseOver={handleMouseOver} to={`/shop/${id}`}>
      <div className='product-card'>
        <div className='product-card__img'>
          <img src={currentImg} />
        </div>
        <div className='product-card__article'>
          <p className='product-card__article__brand'>{brand}</p>
          <p className='product-card__article__title'>{productName}</p>
          <p className='product-card__article__price'>${price}</p>
        </div>
      </div>
    </Link>
  );
}
