import {
	PageLayout,
	SectionPadding,
	Banner,
	ConsultingContent,
} from '@/components';

import { data } from '@/lib/config/data';

import React from 'react';

const page = () => {
	const { consultingSlider } = data;
	const enterpriseResourceData = consultingSlider?.sliderData?.four;
	return (
		<PageLayout>
			<Banner imgSrc='/consultingSlider/four.jpg' />
			<SectionPadding py='4rem'>
				<ConsultingContent data={enterpriseResourceData} />
			</SectionPadding>
		</PageLayout>
	);
};

export default page;
