import { Box, BoxProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { FlexColumn, Heading, NormalText } from '@/components';
import { data } from '@/lib/config/data';

type BannerProps = BoxProps & {};

const Banner: FC<BannerProps> = ({ ...props }) => {
	const { pages } = data;
	return (
		<Box {...props}>
			<FlexColumn py='.5rem' alignItems='center'>
				<Heading
					fontSize={{ base: '1.2rem', lg: '2.25rem', xl: '3rem' }}
					fontWeight='600'
					mb='1rem'
				>
					{pages?.vission?.name}
				</Heading>
				<NormalText fontSize={{ base: '1rem', lg: '1.2rem' }}>
					{pages?.vission?.description}
				</NormalText>
			</FlexColumn>
		</Box>
	);
};

export default Banner;
