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
	const projectManagement = consultingSlider?.sliderData?.five;
	return (
		<PageLayout>
			<Banner imgSrc='/consultingSlider/five.jpg' />
			<SectionPadding py='4rem'>
				<ConsultingContent data={projectManagement} />
			</SectionPadding>
		</PageLayout>
	);
};

export default page;
