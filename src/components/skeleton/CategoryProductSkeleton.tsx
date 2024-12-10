import { borderRadius } from '@/lib/config/constants';
import { Box, BoxProps } from '@chakra-ui/react';
import { FC } from 'react';
import { Skeleton, SkeletonText } from '../ui/skeleton';

type CategoryProductSkeletonProps = BoxProps & {};

const CategoryProductSkeleton: FC<CategoryProductSkeletonProps> = ({
	...props
}) => {
	return (
		<Box {...props}>
			<Skeleton
				borderRadius={borderRadius?.md}
				mb='1rem'
				w='full'
				height='200px'
			/>
			<SkeletonText mb='.5rem' noOfLines={1} gap='4' h='12px' w='full' />
			<SkeletonText noOfLines={1} gap='4' h='12px' w='50%' />
		</Box>
	);
};
export default CategoryProductSkeleton;
