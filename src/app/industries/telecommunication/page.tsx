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
	const telecommunicationData = industries?.data[1];
	return (
		<PageLayout>
			<Banner imgSrc='/industries/five.jpg' />
			<SectionPadding py='4rem'>
				<IndustriesContent data={telecommunicationData} />
			</SectionPadding>
		</PageLayout>
	);
};

export default page;
