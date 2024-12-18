import { Box, BoxProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type BannerProps = BoxProps & {
	imgSrc: string;
};

const Banner: FC<BannerProps> = ({ imgSrc, ...props }) => {
	return (
		<Box
			w='full'
			h='50vh'
			// background='linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/about/tech-novelty/one.jpg)'
			bg={`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${imgSrc})`}
			bgPos='center center'
			bgRepeat='no-repeat'
			bgSize='cover'
			{...props}
		></Box>
	);
};

export default Banner;
