import Form from '../components/Form';
import logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';

export default function SignIn() {
  return (
    <div className='login-container animate__animated  animate__fadeIn'>
      <div className='w-[100px] mt-5'>
        <Link to='/'>
          <img src={logo} />
        </Link>
      </div>
      <Form formType='signin'></Form>
    </div>
  );
}
