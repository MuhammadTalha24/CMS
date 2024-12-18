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
	const governanceData = consultingSlider?.sliderData?.two;
	return (
		<PageLayout>
			<Banner imgSrc='/consultingSlider/two.jpg' />
			<SectionPadding py='4rem'>
				<ConsultingContent data={governanceData} />
			</SectionPadding>
		</PageLayout>
	);
};

export default page;
