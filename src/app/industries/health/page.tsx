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
	const healthData = industries?.data[3];
	return (
		<PageLayout>
			<Banner imgSrc='/industries/three.jpg' />
			<SectionPadding py='4rem'>
				<IndustriesContent data={healthData} />
			</SectionPadding>
		</PageLayout>
	);
};

export default page;
