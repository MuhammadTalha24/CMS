'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, BoxProps, Flex, Grid, Image, Text } from '@chakra-ui/react';

import { FlexColumn, IndustryHeading } from '@/components';
import { NormalText } from '@/components/text';
import { useColors } from '@/hooks';
import { fonts } from '@/hooks/useFont';
import { data } from '@/lib/config/data';
import { FC, useState } from 'react';
import { responsive } from '@/lib/config/constants';

type MissionVisionProps = BoxProps & {};

const MissionVision: FC<MissionVisionProps> = ({ ...props }) => {
	const { missionVision } = data;
	const { colors } = useColors();
	const [currentItem, setCurrentItem] = useState<any>({
		name: 'Vision',
		dataList: {
			title:
				'To be a global leader in IT solutions, empowering businesses to achieve their full potential through innovation and technology.',
			image: '/rainbow.jpg',
		},
	});
	return (
		<Box h={'auto'} overflow='hidden' position='relative' {...props}>
			<IndustryHeading mb={{ base: '1rem', md: '4rem' }} />
			<Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6}>
				<FlexColumn>
					{missionVision?.items?.map((item: any, i: number) => (
						<Box py='.5rem' key={i}>
							<NormalText
								color={
									currentItem?.name === item?.name
										? colors?.white
										: colors?.textBlack
								}
								fontSize={responsive?.textBig}
								fontWeight='600'
								transition='.3s'
								display='inline'
								cursor='pointer'
								_hover={{
									color: colors?.white,
								}}
								onMouseEnter={() => setCurrentItem(item)}
							>
								{item?.name}
							</NormalText>
						</Box>
					))}
				</FlexColumn>

				<FlexColumn alignItems='flex-start'>
					{currentItem && currentItem?.name === 'Values' ? (
						currentItem.dataList.map((value: any, i: number) => (
							<Box key={i} mb={2}>
								<Text
									fontFamily={fonts?.OpenSans}
									fontSize={responsive?.smallText}
									color={colors?.white}
								>
									<strong>{value.boldText}</strong> {value.text}
								</Text>
							</Box>
						))
					) : (
						<Box>
							<NormalText fontSize={responsive?.smallText} mb='1rem'>
								{currentItem?.dataList?.title}
							</NormalText>
							<Flex maxW='full' maxH='80vh' overflow='hidden'>
								<Image
									w='full'
									h='auto'
									objectFit='cover'
									src={currentItem?.dataList?.image}
									borderRadius={4}
									alt='Logo Image'
								/>
							</Flex>
						</Box>
					)}
				</FlexColumn>
			</Grid>
		</Box>
	);
};

export default MissionVision;
