import { Link } from 'react-router-dom';
import Button from './Button';
import { useLogout } from '../services/useLogout';
import { useUser } from '../services/useUser';

export default function NavbarTop() {
  const { isAuth } = useUser();
  const { logout, isPending } = useLogout();

  return (
    <div className='top'>
      {isAuth ? (
        <a>
          <Button
            classNames='btn-dark logout'
            onClick={() => logout()}
            disabled={isPending}
            content='Sign out'
          />
        </a>
      ) : (
        <Link to='/signin' className='link '>
          <Button classNames='btn-dark login' content='Sign in' />
        </Link>
      )}
    </div>
  );
}
