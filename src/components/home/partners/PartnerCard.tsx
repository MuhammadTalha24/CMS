import { Heading, NormalText } from '@/components';
import { useColors } from '@/hooks';

import { Box, BoxProps } from '@chakra-ui/react';
import React, { FC } from 'react';

const style = {
	position: 'absolute',
	content: '""',
	top: '-24px',
	left: '0px',
	width: '24px',
	height: '4px',
};

type PartnerCardProps = BoxProps & {
	data: {
		title: string;
		text: string;
	};
};
const PartnerCard: FC<PartnerCardProps> = ({ data, ...props }) => {
	const { colors } = useColors();

	return (
		<Box
			h='300px'
			px='2rem'
			py='4rem'
			bg={colors?.dark}
			borderRadius={2}
			{...props}
		>
			<Heading
				position='relative'
				_before={{ ...style, background: colors?.brand }}
				mb='2rem'
			>
				{data?.title}
			</Heading>
			<NormalText fontSize='1.2rem' fontWeight='600'>
				{data?.text}
			</NormalText>
		</Box>
	);
};

export default PartnerCard;
