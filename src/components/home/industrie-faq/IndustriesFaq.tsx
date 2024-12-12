'use client';
import { Heading } from '@/components';
import { Box, BoxProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { data } from '@/lib/config/data';
import AccordionComponent from '@/components/faq/AccordionComponent';
import { useColors } from '@/hooks';

const style = {
	position: 'absolute',
	content: '""',
	top: { base: '2px', lg: '10px' },
	left: '-20px',
	width: '6px',
	height: { base: '20px', lg: '44px' },
};

type IndustrieFaqProps = BoxProps & {};
const IndustrieFaq: FC<IndustrieFaqProps> = ({ ...props }) => {
	const { industries } = data;
	const { colors } = useColors();
	return (
		<Box w={{ base: '100%', lg: '70%' }} mx='auto' {...props}>
			<Heading
				fontSize={{ base: '1.2rem', lg: '3rem' }}
				fontWeight='700'
				position='relative'
				ml='20px'
				_before={{
					...style,
					backgroundColor: colors?.primary,
				}}
			>
				{industries?.title}
			</Heading>
			<Box>
				<AccordionComponent data={industries?.data} />
			</Box>
		</Box>
	);
};

export default IndustrieFaq;
