import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from './apiAuth';
import { useNavigate } from 'react-router-dom';

type User = {
  email: string;
  password: string;
};

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    mutate: login,
    isPending,
    error
  } = useMutation({
    mutationFn: ({ email, password }: User) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user.user);
      navigate('/', { replace: true });
    }
  });

  return { login, isPending, error };
}
