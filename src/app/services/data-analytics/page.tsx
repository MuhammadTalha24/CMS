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
	const analyticsData = serviceSection?.cardData[6];
	return (
		<PageLayout>
			<Banner imgSrc='/services/seven.webp' />
			<SectionPadding py='4rem'>
				<ServicesContent data={analyticsData} />
			</SectionPadding>
		</PageLayout>
	);
};

export default page;
