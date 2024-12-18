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
	const intelligentData = serviceSection?.cardData[2];
	return (
		<PageLayout>
			<Banner imgSrc='/services/three.png' />
			<SectionPadding py='4rem'>
				<ServicesContent data={intelligentData} />
			</SectionPadding>
		</PageLayout>
	);
};

export default page;
