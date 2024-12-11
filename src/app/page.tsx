'use client';
import {
	IconSection,
	MissionVision,
	LeadershipSection,
	PageLayout,
	SectionPadding,
	SliderWithContent,
	ValueTogether,
	ServiceSection,
} from '@/components';
import { useColors } from '@/hooks';
import { data } from '@/lib/config/data';
import { Box, Heading } from '@chakra-ui/react';

const Page = () => {
	const { colors } = useColors();
	const { aboutSection, leadershipSection } = data;
	return (
		<PageLayout>
			<SliderWithContent sliderData={data?.hero} />
			<SectionPadding py={'3rem'} bg={colors?.black}>
				<IconSection data={aboutSection} />
			</SectionPadding>
			<SectionPadding py={'3rem'} bg={colors?.black}>
				<LeadershipSection order data={leadershipSection} />
			</SectionPadding>
			<SectionPadding
				py={'3rem'}
				bg={colors?.black}
				borderBottom={`1px solid ${colors?.primary}`}
			>
				<MissionVision />
			</SectionPadding>
			<SectionPadding py={'3rem'} bg={colors?.black}>
				<ValueTogether />
			</SectionPadding>
			<SectionPadding py={'3rem'} bg={colors?.black}>
				<ServiceSection />
			</SectionPadding>
			<SectionPadding py={'3rem'} bg={colors?.black}>
				<Box>
					<Heading></Heading>
				</Box>
			</SectionPadding>
		</PageLayout>
	);
};

export default Page;
