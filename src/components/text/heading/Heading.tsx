import { useColors, usefont } from '@/hooks';
import { Text, TextProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type NormalTextProps = TextProps & {
	children: string | number;
};

const NormalText: FC<NormalTextProps> = ({ children, ...props }) => {
	const { fonts } = usefont();
	const { colors } = useColors();
	return (
		<Text
			color={colors?.white}
			fontWeight='400'
			fontSize='1rem'
			fontFamily={fonts?.NibPro}
			{...props}
		>
			{children}
		</Text>
	);
};

export default NormalText;
