import { Link } from 'react-router-dom';

export default function NavbarTop() {
  return (
    <div className='top'>
      <Link to='/signin' className='link'>
        Sign in
      </Link>
    </div>
  );
}
