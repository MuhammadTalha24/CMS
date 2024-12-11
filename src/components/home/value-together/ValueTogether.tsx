/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, BoxProps, Flex } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import { Heading, NormalText } from '@/components';
import { data } from '@/lib/config/data';

type ValueTogetherProps = BoxProps & {
	children?: ReactNode;
};
const ValueTogether: FC<ValueTogetherProps> = ({}) => {
	const { valueTogether } = data;
	return (
		<Box>
			<Heading fontSize='3rem' fontWeight='700' pb='2rem' whiteSpace='pre-line'>
				{valueTogether?.title}
			</Heading>
			<Flex justifyContent='space-between'>
				{valueTogether?.cardData?.map((item: any, i: number) => (
					<Box
						key={i}
						mx='12px'
						bg={item?.color}
						px='2rem'
						py='3rem'
						borderRadius={2}
					>
						<Heading fontSize='1.5rem' fontWeight='600'>
							{item?.title}
						</Heading>
						<NormalText>{item?.description}</NormalText>
					</Box>
				))}
			</Flex>
		</Box>
	);
};

export default ValueTogether;
