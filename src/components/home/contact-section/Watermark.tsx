import { Box, BoxProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type WatermarkProps = BoxProps & {};

const Watermark: FC<WatermarkProps> = ({}) => {
	return (
		<Box
			position='absolute'
			top='50%'
			left='50%'
			w='full'
			h='full'
			bg={`url('watermark.png')`}
			opacity='.1'
			transform='translate(-50%, -50%)'
			bgRepeat='no-repeat'
			bgSize='50%'
			bgPos='center'
			zIndex='-555'
		></Box>
	);
};

export default Watermark;
