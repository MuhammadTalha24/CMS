'use client';
import {
	CareerSection,
	ConsultingSection,
	ContactSection,
	AboutSection,
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
import { BoxProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

const scrollTop = { scrollMarginTop: '100px' };
const scrollTopMission = { scrollMarginTop: '200px' };

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
			<Wrapper>
				<AboutSection data={aboutSection} id='about' style={scrollTop} />
			</Wrapper>
			<Wrapper>
				<LeadershipSection order={true} data={leadershipSection} />
			</Wrapper>
			<SectionPadding py={'3rem'} bg={colors?.black}>
				<MissionVision id='mission' style={scrollTopMission} />
			</SectionPadding>
			<SectionPadding
				py={'3rem'}
				bg={colors?.black}
				borderBottom={`1px solid ${colors?.primary}`}
			>
				<ValueTogether />
			</SectionPadding>
			<SectionPadding py={'3rem'} bg={colors?.black}>
				<ServiceSection style={scrollTop} id='service' />
			</SectionPadding>
			<ConsultingSection id='consulting' style={scrollTop} />
			<SectionPadding py={'3rem'} bg={colors?.black}>
				<IndustriesFaq id='industries' style={scrollTop} />
			</SectionPadding>
			<SectionPadding py={'6rem'} style={careerStyle} id='career'>
				<CareerSection />
			</SectionPadding>
			<SectionPadding py={'3rem'} id='partner' style={scrollTop}>
				<PartnerSection />
			</SectionPadding>
			<SectionPadding
				py={'3rem'}
				background={`linear-gradient(rgba(0, 0, 0, 0.9), rgba(8, 4, 39, 0.9))`}
				id='contact'
				style={scrollTop}
			>
				<ContactSection />
			</SectionPadding>
		</PageLayout>
	);
};
export default Page;

const Wrapper = ({
	children,
	...props
}: BoxProps & { children: ReactNode }) => {
	const { colors } = useColors();
	return (
		<SectionPadding py={'3rem'} bg={colors?.black} {...props}>
			{children}
		</SectionPadding>
	);
};
