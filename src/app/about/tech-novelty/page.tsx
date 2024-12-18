import { PageLayout, SectionPadding, Banner } from '@/components';
import { TechNovelty } from '@/components/tech-novelty';
import React from 'react';

const page = () => {
	return (
		<PageLayout>
			<Banner imgSrc='/about/tech-novelty/one.jpg' />
			<SectionPadding py='4rem'>
				<TechNovelty />
			</SectionPadding>
		</PageLayout>
	);
};

export default page;
