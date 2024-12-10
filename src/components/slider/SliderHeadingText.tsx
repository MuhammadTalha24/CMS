import { usefont } from '@/hooks';
import { Text, TextProps } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
type VisionHeadingTextProps = TextProps & {
	children?: ReactNode;
};

const VisionHeadingText: React.FC<VisionHeadingTextProps> = ({
	children,
	...props
}) => {
	const { fonts } = usefont();
	return (
		<Text
			fontFamily={fonts?.NibPro}
			fontWeight='bold'
			lineHeight='1.05'
			color='primary.black'
			letterSpacing='0.7px'
			py='0.15em'
			fontSize={{ base: '1.5rem', lg: '1.75rem' }}
			{...props}
		>
			{children}
		</Text>
	);
};

export default VisionHeadingText;
