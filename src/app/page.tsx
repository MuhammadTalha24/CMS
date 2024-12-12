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
import { BoxProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

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
				<IconSection data={aboutSection} />
			</Wrapper>
			<Wrapper>
				<LeadershipSection order={true} data={leadershipSection} />
			</Wrapper>
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
			<SectionPadding py={'6rem'} style={careerStyle} id='career'>
				<CareerSection />
			</SectionPadding>
			<SectionPadding py={'3rem'} id='partner'>
				<PartnerSection />
			</SectionPadding>
			<SectionPadding
				py={'3rem'}
				background={`linear-gradient(rgba(0, 0, 0, 0.9), rgba(8, 4, 39, 0.9))`}
				id='contact'
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
