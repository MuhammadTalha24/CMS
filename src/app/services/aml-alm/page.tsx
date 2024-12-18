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
	const almData = serviceSection?.cardData[10];
	return (
		<PageLayout>
			<Banner imgSrc='/services/eleven.webp' />
			<SectionPadding py='4rem'>
				<ServicesContent data={almData} />
			</SectionPadding>
		</PageLayout>
	);
};

export default page;
