import { useGetStoreQuery } from '@/store/services/getStoreApi';
const useCheckStoreExist = (id: string) => {
	const { data, isLoading } = useGetStoreQuery({ storeId: id }, { skip: !id });

	const isExist = data?.message !== 'Store not found';

	return { isExist, isLoading };
};

export default useCheckStoreExist;
