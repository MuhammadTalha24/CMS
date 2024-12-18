import { useColors, usefont } from '@/hooks';
import { Button, ButtonProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type PrimaryButtonProps = ButtonProps & {
	children: string;
};
const PrimaryButton: FC<PrimaryButtonProps> = ({ children, ...props }) => {
	const { colors } = useColors();
	const { fonts } = usefont();
	return (
		<Button
			fontFamily={fonts?.OpenSans}
			bg={colors?.primary}
			color={colors?.white}
			p='1rem'
			{...props}
		>
			{children}
		</Button>
	);
};

export default PrimaryButton;
