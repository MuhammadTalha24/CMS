import { useColors, usefont } from '@/hooks';
import { Text, TextProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type HeadngProps = TextProps & {
	children: string | number;
};

const Headng: FC<HeadngProps> = ({ children, ...props }) => {
	const { fonts } = usefont();
	const { colors } = useColors();
	return (
		<Text
			color={colors?.white}
			fontWeight='400'
			fontSize='1rem'
			fontFamily={fonts?.OpenSans}
			{...props}
		>
			{children}
		</Text>
	);
};

export default Headng;
