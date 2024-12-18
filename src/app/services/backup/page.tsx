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
	const backupData = serviceSection?.cardData[3];
	return (
		<PageLayout>
			<Banner imgSrc='/services/four.webp' />
			<SectionPadding py='4rem'>
				<ServicesContent data={backupData} />
			</SectionPadding>
		</PageLayout>
	);
};

export default page;
