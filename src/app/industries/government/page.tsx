import {
	PageLayout,
	SectionPadding,
	Banner,
	IndustriesContent,
} from '@/components';

import { data } from '@/lib/config/data';

import React from 'react';

const page = () => {
	const { industries } = data;
	const governmentData = industries?.data[2];
	return (
		<PageLayout>
			<Banner imgSrc='/industries/two.jpg' />
			<SectionPadding py='4rem'>
				<IndustriesContent data={governmentData} />
			</SectionPadding>
		</PageLayout>
	);
};

export default page;
