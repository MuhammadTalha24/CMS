'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, BoxProps, Flex, Grid, Image } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import { Heading, NormalText } from '@/components';
import { data } from '@/lib/config/data';

import { PartnerCard } from '@/components';

type PartnerSectionProps = BoxProps & {
	children?: ReactNode;
};

const PartnerSection: FC<PartnerSectionProps> = ({}) => {
	const { partnersSection } = data;

	return (
		<Box>
			<Box pb='2.5rem'>
				<Heading
					fontSize={{ base: '1.5rem', md: '2rem', xl: '3rem' }}
					fontWeight='700'
				>
					{partnersSection?.title}
				</Heading>
				<NormalText fontSize={{ base: '1rem', xl: '1.5rem' }}>
					{partnersSection?.description}
				</NormalText>
			</Box>
			<Grid gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}>
				<PartnerCard data={partnersSection?.firstColumn} />
				<Flex bg='red' w='full' h='300px'>
					<Image
						w='full'
						h='auto'
						src={partnersSection?.secondColumn?.image}
						alt='consulting'
					/>
				</Flex>
				{partnersSection?.thirdTwoColumn?.map((item: any, i: number) => (
					<PartnerCard
						mr={i == 1 ? '0px' : { base: '0px', md: '1.75rem' }}
						my='16px'
						data={item}
						key={i}
					/>
				))}
			</Grid>
		</Box>
	);
};

export default PartnerSection;
