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
	const bankingData = industries?.data[0];
	return (
		<PageLayout>
			<Banner imgSrc='/industries/one.jpg' />
			<SectionPadding py='4rem'>
				<IndustriesContent data={bankingData} />
			</SectionPadding>
		</PageLayout>
	);
};

export default page;
