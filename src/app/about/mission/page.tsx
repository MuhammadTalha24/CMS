import {
	PageLayout,
	SectionPadding,
	Banner,
	FlexColumn,
	Heading,
	NormalText,
} from '@/components';
import { data } from '@/lib/config/data';

import React from 'react';

const page = () => {
	const { pages } = data;
	return (
		<PageLayout>
			<Banner imgSrc='/about/mission/one.jpg' />
			<SectionPadding py='4rem'>
				<FlexColumn py='.5rem' alignItems='center'>
					<Heading
						fontSize={{ base: '1.2rem', lg: '2.25rem', xl: '3rem' }}
						fontWeight='600'
						mb='1rem'
					>
						{pages?.mission?.name}
					</Heading>
					<NormalText fontSize={{ base: '1rem', lg: '1.2rem' }}>
						{pages?.mission?.description}
					</NormalText>
				</FlexColumn>
			</SectionPadding>
		</PageLayout>
	);
};

export default page;
