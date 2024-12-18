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
	const mediumData = industries?.data[4];
	return (
		<PageLayout>
			<Banner imgSrc='/industries/four.jpg' />
			<SectionPadding py='4rem'>
				<IndustriesContent data={mediumData} />
			</SectionPadding>
		</PageLayout>
	);
};

export default page;
