import {
	AboutSection,
	LeadershipSection,
	MissionVision,
	PageLayout,
	SectionPadding,
	ValueTogether,
} from '@/components';
import { useColors } from '@/hooks';
import { BoxProps } from '@chakra-ui/react';
import { data } from '@/lib/config/data';
import React, { ReactNode } from 'react';
const scrollTop = { scrollMarginTop: '100px' };
const scrollTopMission = { scrollMarginTop: '200px' };

const AboutPage = () => {
	const { colors } = useColors();
	const { aboutSection, leadershipSection } = data;

	return (
		<PageLayout>
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
		</PageLayout>
	);
};

export default AboutPage;

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
