type SearchBoxElement = {
  img: string[];
  title: string;
  brand: string;
};

export default function SearchBoxElement({ brand, img, title }: SearchBoxElement) {
  return (
    <div className='search-box-element'>
      <div className='search-box-element__img'>
        <img src={img[0]} />
      </div>
      <div className='search-box-element__text'>
        <p>{title}</p>
        <p>{brand}</p>
      </div>
    </div>
  );
}
