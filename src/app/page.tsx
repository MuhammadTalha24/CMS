'use client';
import {
	CareerSection,
	ConsultingSection,
	ContactSection,
	IconSection,
	IndustriesFaq,
	LeadershipSection,
	MissionVision,
	PageLayout,
	PartnerSection,
	SectionPadding,
	ServiceSection,
	SliderWithContent,
	ValueTogether,
} from '@/components';
import { useColors } from '@/hooks';
import { data } from '@/lib/config/data';

const careerStyle = {
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
				<LeadershipSection order={true} data={leadershipSection} />
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
			<SectionPadding py={'6rem'} style={careerStyle}>
				<CareerSection />
			</SectionPadding>
			<SectionPadding py={'3rem'}>
				<PartnerSection />
			</SectionPadding>
			<SectionPadding
				py={'3rem'}
				background={`linear-gradient(rgba(0, 0, 0, 0.9), rgba(8, 4, 39, 0.9))`}
			>
				<ContactSection />
			</SectionPadding>
		</PageLayout>
	);
};

export default Page;
