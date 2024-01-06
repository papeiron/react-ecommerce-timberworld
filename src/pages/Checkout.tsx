import Cart from '../components/Cart';
import Form from '../components/Form';
import { withCart } from '../components/withCart';

export default function Checkout() {
  const PaymentCart = withCart(Cart);
  return (
    <div className='checkout scontainer'>
      <div className='payment-section'>
        <Form formType='payment' />
        <PaymentCart />
      </div>
    </div>
  );
}
