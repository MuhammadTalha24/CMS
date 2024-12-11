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
	ConsultingSection,
	IndustriesFaq,
	CareerSection,
	PartnerSection,
} from '@/components';
import { useColors } from '@/hooks';
import { data } from '@/lib/config/data';

const style = {
	background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/career/one.jpg")`,
	backgroundPosition: 'center center',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	minHeight: 'auto',
};

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
			<SectionPadding py={'3rem'} bg={colors?.black}>
				<MissionVision />
			</SectionPadding>
			<SectionPadding
				py={'3rem'}
				bg={colors?.black}
				borderBottom={`1px solid ${colors?.primary}`}
			>
				<ValueTogether />
			</SectionPadding>
			<SectionPadding py={'3rem'} bg={colors?.black}>
				<ServiceSection />
			</SectionPadding>
			<ConsultingSection />
			<SectionPadding py={'3rem'} bg={colors?.black}>
				<IndustriesFaq />
			</SectionPadding>
			<SectionPadding py={'6rem'} style={style}>
				<CareerSection />
			</SectionPadding>
			<SectionPadding py={'3rem'}>
				<PartnerSection />
			</SectionPadding>
		</PageLayout>
	);
};

export default Page;
