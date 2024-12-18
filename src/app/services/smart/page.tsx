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
	const smartData = serviceSection?.cardData[9];
	return (
		<PageLayout>
			<Banner imgSrc='/services/ten.webp' />
			<SectionPadding py='4rem'>
				<ServicesContent data={smartData} />
			</SectionPadding>
		</PageLayout>
	);
};

export default page;
