import {
	PageLayout,
	SectionPadding,
	Banner,
	ServicesContent,
} from '@/components';

import { data } from '@/lib/config/data';

import React from 'react';

const page = () => {
	const { serviceSection } = data;
	const emergingData = serviceSection?.cardData[8];
	return (
		<PageLayout>
			<Banner imgSrc='/services/nine.webp' />
			<SectionPadding py='4rem'>
				<ServicesContent data={emergingData} />
			</SectionPadding>
		</PageLayout>
	);
};

export default page;
