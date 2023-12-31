import { FilterState } from '../redux/slice/filterSlice';

export const priceChecker = (price: string, values: FilterState): boolean | undefined => {
  if (typeof values.selectedPrice === 'string') {
    if (values.selectedPrice.includes('Over')) {
      let newValue = values.selectedPrice.match(/\d+/g);
      let priceN = Number(price);

      return priceN >= Number(newValue);
    } else {
      let newValueStr = values.selectedPrice.split('-').map((e) => e.replace('$', ''));
      let firstN = Number(newValueStr[0]);
      let secondN = Number(newValueStr[1]);
      let priceN = Number(price);
      return firstN <= priceN && priceN <= secondN;
    }
  }
};
