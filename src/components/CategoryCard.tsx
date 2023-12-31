import React from 'react';
import { type CategoryImages } from '../redux/slice/categoryImagesSlice';

type CategoryCard = {
  image: CategoryImages;
};

export default function CategoryCard({ image }: CategoryCard) {
  return (
    <div className='card'>
      <img className='card__img' src={image[1]} />
      <p className='card__text'>{image[0]}</p>
    </div>
  );
}
