import { useMutation } from '@tanstack/react-query';
import { register as registerApi } from './apiAuth';
import toast from 'react-hot-toast';

export function useRegister() {
  const { mutate: register, isPending } = useMutation({
    mutationFn: registerApi,
    onSuccess: () => {
      toast.success('Your account has been created successfully! Please verify your email.');
    }
  });

  return { register, isPending };
}
