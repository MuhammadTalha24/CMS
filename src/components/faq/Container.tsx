import { colors } from '@/lib/config/colors';
import { borderRadius } from '@/lib/config/constants';
import { Box, BoxProps } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

type ContainerProps = BoxProps & {
	children: ReactNode;
};
const Container: FC<ContainerProps> = ({ children, ...props }) => {
	return (
		<Box
			w={{ base: 'auto', lg: '500px' }}
			my='16px'
			p={'1rem'}
			borderRadius={borderRadius?.lg}
			border={`1px solid ${colors?.borderColor}`}
			{...props}
		>
			{children}
		</Box>
	);
};

export default Container;
