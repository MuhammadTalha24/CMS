'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, BoxProps, Center, Grid } from '@chakra-ui/react';
import React, { FC, ReactNode, useState } from 'react';
import { Heading, NormalText, PrimaryButton } from '@/components';
import { data } from '@/lib/config/data';

import { useColors } from '@/hooks';

type ServiceSectionProps = BoxProps & {
	children?: ReactNode;
};

const ServiceSection: FC<ServiceSectionProps> = ({}) => {
	const { serviceSection } = data;
	const [visibleItems, setVisibleItems] = useState(4);
	const isShowingAll = visibleItems === serviceSection?.cardData?.length;
	const { colors } = useColors();

	const handleToggleView = () => {
		if (isShowingAll) {
			setVisibleItems(4); // Reset to initial state
		} else {
			setVisibleItems(serviceSection?.cardData?.length || 0); // Show all items
		}
	};
	return (
		<Box>
			<Heading fontSize='1.75rem' fontWeight='700' pb='2rem' mb='1rem'>
				{serviceSection?.title}
			</Heading>
			<Grid gridTemplateColumns='repeat(4, 1fr)' gap={6}>
				{serviceSection?.cardData
					?.slice(0, visibleItems)
					.map((item: any, i: number) => (
						<Box
							key={i}
							p='2rem'
							borderRadius={2}
							background={`linear-gradient(rgba(25, 47, 49, 0.6), rgba(0, 0, 0, 0.6)), url(${item?.image})`}
							backgroundPosition='center center'
							backgroundRepeat='no-repeat'
							backgroundSize='cover'
							minH='400px'
						>
							<Heading fontSize='1.375rem' fontWeight='600'>
								{item?.title}
							</Heading>
							<NormalText>{item?.description}</NormalText>
						</Box>
					))}
			</Grid>
			<Center>
				<PrimaryButton
					background='none'
					border={`1px solid ${colors?.textBlack}`}
					mt='2rem'
					onClick={handleToggleView}
					p='1rem 2rem'
					borderRadius='24px'
					transition='.3s'
					_hover={{ backgroundColor: colors?.primary }}
				>
					{isShowingAll ? 'View Less' : 'Show All'}
				</PrimaryButton>
			</Center>
		</Box>
	);
};

export default ServiceSection;
