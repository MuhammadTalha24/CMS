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
	const itStrategryData = consultingSlider?.sliderData?.one;
	return (
		<PageLayout>
			<Banner imgSrc='/consultingSlider/one.jpg' />
			<SectionPadding py='4rem'>
				<ConsultingContent data={itStrategryData} />
			</SectionPadding>
		</PageLayout>
	);
};

export default page;
