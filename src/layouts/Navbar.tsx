import Cart from '../components/Cart';
import NavbarBottom from '../components/NavbarBottom';
import NavbarTop from '../components/NavbarTop';
import { useAppSelector } from '../redux/hooks';

export default function Navbar() {
  const cardIsOpen = useAppSelector((state) => state.cart.isOpen);

  return (
    <nav id='nav'>
      <NavbarTop />
      <NavbarBottom />
      {cardIsOpen ? <Cart className={'cart-animation-enter'} /> : null}
    </nav>
  );
}
