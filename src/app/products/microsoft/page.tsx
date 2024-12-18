import {
	PageLayout,
	SectionPadding,
	Banner,
	ProductsContent,
} from '@/components';

import { data } from '@/lib/config/data';

import React from 'react';

const page = () => {
	const { pages } = data;
	const microsoftData = pages?.products[0];
	return (
		<PageLayout>
			<Banner imgSrc='/industries/five.jpg' />
			<SectionPadding py='4rem'>
				<ProductsContent data={microsoftData} />
			</SectionPadding>
		</PageLayout>
	);
};

export default page;
