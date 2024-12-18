import { PageLayout, SectionPadding, Banner } from '@/components';
import { LeaderShip } from '@/components/leadership';

import React from 'react';

const page = () => {
	return (
		<PageLayout>
			<Banner imgSrc='/about/leadership/one.jpg' />
			<SectionPadding py='4rem'>
				<LeaderShip />
			</SectionPadding>
		</PageLayout>
	);
};

export default page;
