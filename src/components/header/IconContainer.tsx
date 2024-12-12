import { colors } from '@/lib/config/colors';
import { borderRadius } from '@/lib/config/constants';
import { Box, BoxProps } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

type IconContainerProps = BoxProps & {
	children: ReactNode;
};
const IconContainer: FC<IconContainerProps> = ({ children, ...props }) => {
	return (
		<Box
			p='.4rem'
			borderRadius={borderRadius?.xs}
			_hover={{ backgroundColor: colors?.hoverBgColor }}
			cursor='pointer'
			{...props}
		>
			{children}
		</Box>
	);
};

export default IconContainer;
