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
	const applicationDesignData = consultingSlider?.sliderData?.three;
	return (
		<PageLayout>
			<Banner imgSrc='/consultingSlider/three.jpg' />
			<SectionPadding py='4rem'>
				<ConsultingContent data={applicationDesignData} />
			</SectionPadding>
		</PageLayout>
	);
};

export default page;
