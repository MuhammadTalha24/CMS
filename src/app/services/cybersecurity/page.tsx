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
	const cyberData = serviceSection?.cardData[5];
	return (
		<PageLayout>
			<Banner imgSrc='/services/six.webp' />
			<SectionPadding py='4rem'>
				<ServicesContent data={cyberData} />
			</SectionPadding>
		</PageLayout>
	);
};

export default page;
