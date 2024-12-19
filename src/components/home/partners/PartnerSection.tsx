'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, BoxProps, Flex, Grid, Image } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import { Heading, NormalText } from '@/components';
import { data } from '@/lib/config/data';

import { PartnerCard } from '@/components';
import { responsive } from '@/lib/config/constants';

type PartnerSectionProps = BoxProps & {
	children?: ReactNode;
};

const PartnerSection: FC<PartnerSectionProps> = ({}) => {
	const { partnersSection } = data;

	return (
		<Box>
			<Box pb='2.5rem'>
				<Heading fontSize={responsive?.bigTitle} fontWeight='700' mb='1rem'>
					{partnersSection?.title}
				</Heading>
				<NormalText fontSize={responsive?.text}>
					{partnersSection?.description}
				</NormalText>
			</Box>
			<Grid gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6}>
				<PartnerCard data={partnersSection?.firstColumn} />
				<Flex w='full' h={{ base: 'auto', xl: '300px' }}>
					<Image
						w='full'
						h='auto'
						src={partnersSection?.secondColumn?.image}
						alt='consulting'
					/>
				</Flex>
				{partnersSection?.thirdTwoColumn?.map((item: any, i: number) => (
					<PartnerCard data={item} key={i} />
				))}
			</Grid>
		</Box>
	);
};

export default PartnerSection;
