import { TextProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { NormalText } from '../text';
import { borderRadius } from '@/lib/config/constants';
import { colors } from '@/lib/config/colors';

type FaqHeaderProps = TextProps & {
	children: string;
};

const FaqHeader: FC<FaqHeaderProps> = ({ children, ...props }) => {
	return (
		<NormalText
			fontSize={'1.2rem'}
			fontWeight='600'
			p='8px  12px'
			mb='12px'
			borderRadius={borderRadius?.md}
			backgroundColor={colors?.hoverColor}
			{...props}
		>
			{children}
		</NormalText>
	);
};

export default FaqHeader;
