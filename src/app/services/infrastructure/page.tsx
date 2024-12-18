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
	const infrastructureData = serviceSection?.cardData[0];
	return (
		<PageLayout>
			<Banner imgSrc='/services/one.webp' />
			<SectionPadding py='4rem'>
				<ServicesContent data={infrastructureData} />
			</SectionPadding>
		</PageLayout>
	);
};

export default page;
