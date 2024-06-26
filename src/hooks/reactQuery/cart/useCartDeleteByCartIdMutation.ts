import cartApi from '@/apis/cart';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useCartDeleteByCartIdMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (cartId: number) => {
      return cartApi.deleteCartById(cartId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['getCartById'],
      });
    },
  });

  // 로딩 상태를 확인
  const isLoading = mutation.status === 'pending';

  // 'isLoading' 상태와 함께 'mutate' 함수도 함께 반환
  return { mutate: mutation.mutate, isLoading };
};

export default useCartDeleteByCartIdMutation;
