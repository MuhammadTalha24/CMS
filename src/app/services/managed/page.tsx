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
	const managedData = serviceSection?.cardData[1];
	return (
		<PageLayout>
			<Banner imgSrc='/services/two.png' />
			<SectionPadding py='4rem'>
				<ServicesContent data={managedData} />
			</SectionPadding>
		</PageLayout>
	);
};

export default page;
