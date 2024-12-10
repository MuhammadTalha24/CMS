import { Box, BoxProps } from '@chakra-ui/react';
import { FC } from 'react';
import { SkeletonText } from '../ui/skeleton';

type CategoriesSkeleton = BoxProps & {};

const CategoriesSkeleton: FC<CategoriesSkeleton> = ({ ...props }) => {
	return (
		<Box my={{ base: '2rem', lg: '0' }} {...props} px='1rem'>
			<SkeletonText
				noOfLines={5}
				gap='4'
				h='16px'
				w={{ base: 'full', lg: '380px' }}
			/>
		</Box>
	);
};

export default CategoriesSkeleton;
