import { Flex, FlexProps } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import { zIndex } from '@/lib/config/constants';
import { useColors } from '@/hooks';

type HeaderContainerProps = FlexProps & {
	children: ReactNode;
};

const HeaderContainer: FC<HeaderContainerProps> = ({ children, ...props }) => {
	const { colors } = useColors();
	return (
		<Flex
			w='full'
			h='80px'
			flexDirection='column'
			justifyContent='center'
			bg={colors?.black}
			boxShadow='md'
			position='fixed'
			top='0'
			left='0'
			zIndex={zIndex?.header}
			id='header'
			{...props}
		>
			{children}
		</Flex>
	);
};

export default HeaderContainer;
