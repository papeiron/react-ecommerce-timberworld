import { useEffect } from 'react';
import { useUser } from '../services/useUser';
import { Outlet, useNavigate } from 'react-router-dom';

export default function ProtectedRoute() {
  const navigate = useNavigate();
  const { isLoading, isAuth } = useUser();

  useEffect(
    function () {
      if (!isAuth && !isLoading) navigate('/signin');
    },
    [isLoading, isAuth, navigate]
  );

  if (isAuth)
    return (
      <>
        <Outlet />
      </>
    );
}

// import { ReactNode, useEffect } from 'react';
// import { useUser } from '../services/useUser';
// import { useNavigate } from 'react-router-dom';

// type ProtectedRouteProps = {
//   children: ReactNode;
// };

// export default function ProtectedRoute({ children }: ProtectedRouteProps) {
//   const navigate = useNavigate();
//   const { isLoading, isAuth } = useUser();

//   useEffect(
//     function () {
//       if (!isAuth && !isLoading) navigate('/signin');
//     },
//     [isLoading, isAuth, navigate]
//   );

//   return children;
// }
