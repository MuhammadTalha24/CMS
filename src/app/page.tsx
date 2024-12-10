'use client';
import {
	IconSection,
	IndustrySection,
	PageLayout,
	SectionPadding,
	SliderWithContent,
} from '@/components';
import { useColors } from '@/hooks';
import React from 'react';
import { data } from '@/lib/config/data';

const Page = () => {
	const { colors } = useColors();
	const { aboutSection, leadershipSection } = data;
	return (
		<PageLayout>
			d
			<SliderWithContent sliderData={data?.hero} />
			<SectionPadding py={'3rem'} bg={colors?.black}>
				<IconSection data={aboutSection} />
			</SectionPadding>
			<SectionPadding py={'3rem'} bg={colors?.black}>
				<IconSection order data={leadershipSection} />
			</SectionPadding>
			<SectionPadding py={'3rem'} bg={colors?.black}>
				<IndustrySection />
			</SectionPadding>
			{/* <SectionPadding py={'3rem'} bg={colors?.black}>
				<IndustrySection />
			</SectionPadding> */}
		</PageLayout>
	);
};

export default Page;
