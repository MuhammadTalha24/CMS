import { PageLayout, SectionPadding, Banner } from '@/components';

import { Vission } from '@/components/vission';

import React from 'react';

const page = () => {
	return (
		<PageLayout>
			<Banner imgSrc='/about/vission/one.jpg' />
			<SectionPadding py='4rem'>
				<Vission />
			</SectionPadding>
		</PageLayout>
	);
};

export default page;
