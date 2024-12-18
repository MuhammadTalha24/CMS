/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	PageLayout,
	SectionPadding,
	Banner,
	Heading,
	FlexColumn,
} from '@/components';

import { Text } from '@chakra-ui/react';
import { data } from '@/lib/config/data';

import React from 'react';
import { responsive } from '@/lib/config/constants';
import { useColors, usefont } from '@/hooks';

const ValuesPage = () => {
	const { pages } = data;
	const { colors } = useColors();
	const { fonts } = usefont();
	return (
		<PageLayout>
			<Banner imgSrc='/about/values/one.jpg' />
			<SectionPadding py='4rem'>
				<Heading
					mb='1rem'
					fontSize={{ base: '1.2rem', lg: '2.25rem', xl: '3rem' }}
					textAlign='center'
				>
					{pages?.values?.name}
				</Heading>
				<FlexColumn
					w={{ base: '100%', xl: '60%' }}
					mx='auto'
					alignItems='flex-start'
				>
					{pages?.values?.dataList?.map((item: any, i: number) => (
						<Text
							key={i}
							fontFamily={fonts?.OpenSans}
							fontSize={responsive?.smallText}
							color={colors?.white}
							py='.5rem'
						>
							<strong>{item.boldText}</strong> {item.text}
						</Text>
					))}
				</FlexColumn>
			</SectionPadding>
		</PageLayout>
	);
};

export default ValuesPage;
