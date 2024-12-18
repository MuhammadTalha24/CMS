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
	const aimlData = serviceSection?.cardData[7];
	return (
		<PageLayout>
			<Banner imgSrc='/services/eight.webp' />
			<SectionPadding py='4rem'>
				<ServicesContent data={aimlData} />
			</SectionPadding>
		</PageLayout>
	);
};

export default page;
