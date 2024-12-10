/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Grid } from '@chakra-ui/react';
import React from 'react';

import { data } from '@/lib/config/data';
import { NormalText } from '@/components/text';
import { FlexColumn, FlexImage } from '@/components';
import { IndustryHeading } from '@/components';
import Link from 'next/link';
import { useColors } from '@/hooks';

const style = {
	marginBottom: '1rem',
};

// type IndustrySectionProps = {

// }

const IndustrySection = () => {
	const { industrySection } = data;
	const { colors } = useColors();
	return (
		<Box>
			<IndustryHeading mb='4rem' />
			<Grid templateColumns='1fr 1fr' gap={6}>
				<FlexColumn>
					{industrySection?.links?.map((item: any, i: number) => (
						<Link key={i} href={item?.link} style={style}>
							<NormalText
								color={colors?.textBlack}
								fontSize={{ base: '1rem', lg: '1.4rem' }}
								transition='.3s'
								display='inline-block'
								_hover={{
									color: colors?.white,
								}}
							>
								{item?.name}
							</NormalText>
						</Link>
					))}
				</FlexColumn>

				<FlexColumn alignItems='flex-end'>
					<NormalText mb='1rem' textAlign='right'>
						{industrySection?.imagesSection?.title}
					</NormalText>
					<FlexImage
						maxW='20rem'
						image={industrySection?.imagesSection?.image}
					/>
				</FlexColumn>
			</Grid>
		</Box>
	);
};

export default IndustrySection;
