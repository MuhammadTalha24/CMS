import { borderRadius } from '@/lib/config/constants';
import { Grid, GridItem, GridProps } from '@chakra-ui/react';
import { FC } from 'react';
import { Skeleton, SkeletonText } from '../ui/skeleton';

type SearchProductSkeletonProps = GridProps & {};

const SearchProductSkeleton: FC<SearchProductSkeletonProps> = ({
	...props
}) => {
	const arr = [1, 2, 3, 4, 5, 6];
	return (
		<Grid
			templateColumns={{
				base: 'repeat(2, 1fr)',
				md: 'repeat(3, 1fr)',
				lg: 'repeat(4, 1fr)',
				'2xl': 'repeat(6, 1fr)',
			}}
			gap={4}
			{...props}
		>
			{arr?.map((item: number) => (
				<GridItem key={item}>
					<Skeleton
						borderRadius={borderRadius?.md}
						mb='1rem'
						w='full'
						height='200px'
					/>
					<SkeletonText mb='.5rem' noOfLines={1} gap='4' h='12px' w='full' />
					<SkeletonText noOfLines={1} gap='4' h='12px' w='50%' />
				</GridItem>
			))}
		</Grid>
	);
};

export default SearchProductSkeleton;
