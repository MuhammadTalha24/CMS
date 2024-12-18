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
	const digitalData = serviceSection?.cardData[4];
	return (
		<PageLayout>
			<Banner imgSrc='/services/five.webp' />
			<SectionPadding py='4rem'>
				<ServicesContent data={digitalData} />
			</SectionPadding>
		</PageLayout>
	);
};

export default page;
