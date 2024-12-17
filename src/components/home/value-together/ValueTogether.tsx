/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, BoxProps, Grid } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import { Heading, NormalText } from '@/components';
import { data } from '@/lib/config/data';
import { responsive } from '@/lib/config/constants';
import { useColors } from '@/hooks';

const TEMPLATE_COLUMNS = {
	base: '1fr',
	md: '1fr 1fr',
	xl: 'repeat(3, 1fr)',
};

type ValueTogetherProps = BoxProps & {
	children?: ReactNode;
};
const ValueTogether: FC<ValueTogetherProps> = ({}) => {
	const { valueTogether } = data;
	const { colors } = useColors();
	return (
		<Box>
			<Heading
				fontSize={responsive?.smallTitle}
				fontWeight='700'
				pb='2rem'
				whiteSpace={{ base: 'normal', lg: 'pre-line' }}
			>
				{valueTogether?.title}
			</Heading>
			<Grid gridTemplateColumns={TEMPLATE_COLUMNS} gap={6}>
				{valueTogether?.cardData?.map((item: any, i: number) => (
					<Box key={i} bg={item?.color} px='2rem' py='3rem' borderRadius={2}>
						<Heading
							fontSize={{ base: '1.25rem', lg: '1.5rem' }}
							fontWeight='600'
							color={colors?.black}
							mb={2}
						>
							{item?.title}
						</Heading>
						<NormalText
							color={colors?.black}
							fontSize={{ base: '.875rem', md: '1rem' }}
						>
							{item?.description}
						</NormalText>
					</Box>
				))}
			</Grid>
		</Box>
	);
};

export default ValueTogether;
