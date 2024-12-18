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
	const cloudComputing = consultingSlider?.sliderData?.six;
	return (
		<PageLayout>
			<Banner imgSrc='/consultingSlider/six.jpg' />
			<SectionPadding py='4rem'>
				<ConsultingContent data={cloudComputing} />
			</SectionPadding>
		</PageLayout>
	);
};

export default page;
