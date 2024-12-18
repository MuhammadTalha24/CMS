'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, BoxProps, Center, Grid } from '@chakra-ui/react';
import React, { FC, ReactNode, useState } from 'react';
import { Heading, NormalText, PrimaryButton } from '@/components';
import { data } from '@/lib/config/data';

import { useColors, usefont } from '@/hooks';
import { responsive } from '@/lib/config/constants';

type ServiceSectionProps = BoxProps & {
	children?: ReactNode;
};

const ServiceSection: FC<ServiceSectionProps> = ({ ...props }) => {
	const { serviceSection } = data;
	const [visibleItems, setVisibleItems] = useState(4);
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
	const isShowingAll = visibleItems === serviceSection?.cardData?.length;
	const { colors } = useColors();
	const { fonts } = usefont();

	const TEMPLATE_COLUMNS = {
		base: '1fr',
		md: '1fr 1fr',
		xl: 'repeat(3, 1fr)',
		'2xl': 'repeat(4, 1fr)',
	};

	const handleToggleView = () => {
		if (isShowingAll) {
			setVisibleItems(4); // Reset to initial state
		} else {
			setVisibleItems(serviceSection?.cardData?.length || 0); // Show all items
		}
	};
	return (
		<Box {...props}>
			<Heading
				fontSize={responsive?.bigTitle}
				fontWeight='700'
				pb='2rem'
				mb='1rem'
			>
				{serviceSection?.title}
			</Heading>
			<Grid gridTemplateColumns={TEMPLATE_COLUMNS} gap={6}>
				{serviceSection?.cardData
					?.slice(0, visibleItems)
					.map((item: any, i: number) => (
						// <Box
						// 	key={i}
						// 	p='2rem'
						// 	borderRadius={2}
						// 	background={`linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${item?.image})`}
						// 	backgroundPosition='center center'
						// 	backgroundRepeat='no-repeat'
						// 	backgroundSize='cover'
						// 	minH='400px'
						// 	onMouseEnter={() => setHoveredIndex(i)} // Track the index of the hovered card
						// 	onMouseLeave={() => setHoveredIndex(null)}
						// 	position='relative' // Add relative positioning to handle pseudo-elements properly
						// 	cursor='pointer'
						// 	transition='.3s'
						// 	_before={{
						// 		content: '""',
						// 		position: 'absolute',
						// 		top: 0,
						// 		left: 0,
						// 		right: 0,
						// 		bottom: 0,
						// 		borderRadius: 'inherit',
						// 		padding: '2px', // To create the space for the gradient border
						// 		background:
						// 			hoveredIndex === i
						// 				? 'linear-gradient(90deg, #0074c7 0%, #B886CB 100%)'
						// 				: 'transparent',
						// 		WebkitMask:
						// 			'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
						// 		maskComposite: 'exclude',
						// 		zIndex: 1,
						// 	}}
						// >
						<Box
							key={i}
							p='2rem'
							borderRadius={2}
							background={
								hoveredIndex === i
									? `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1)), url(${item?.image})`
									: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url(${item?.image})`
							}
							backgroundPosition='center center'
							backgroundRepeat='no-repeat'
							backgroundSize='cover'
							minH='400px'
							onMouseEnter={() => setHoveredIndex(i)} // Track the index of the hovered card
							onMouseLeave={() => setHoveredIndex(null)}
							position='relative' // Add relative positioning to handle pseudo-elements properly
							cursor='pointer'
							transition='all .3s'
							_before={{
								content: '""',
								position: 'absolute',
								top: 0,
								left: 0,
								right: 0,
								bottom: 0,
								borderRadius: 'inherit',
								padding: '2px', // To create the space for the gradient border
								background:
									hoveredIndex === i
										? 'linear-gradient(90deg, #0074c7 0%, #B886CB 100%)'
										: 'transparent',
								WebkitMask:
									'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
								maskComposite: 'exclude',
								zIndex: 1,
							}}
						>
							<Heading
								fontSize={{ base: '1.25rem', lg: '1.5rem' }}
								fontWeight='600'
								mb={4}
								fontFamily={fonts.OpenSans}
							>
								{item?.title}
							</Heading>
							<NormalText fontSize={{ base: '.875rem', md: '1rem' }}>
								{item?.description}
							</NormalText>
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
