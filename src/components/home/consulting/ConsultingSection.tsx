import {
	ConsultingSlider,
	Heading,
	NormalText,
	SectionPadding,
} from '@/components';
import { useColors } from '@/hooks';
import { responsive } from '@/lib/config/constants';

import { data } from '@/lib/config/data';
import { Box, BoxProps } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
type ConsultingSectionProps = BoxProps & {
	children?: ReactNode;
};

const ConsultingSection: React.FC<ConsultingSectionProps> = ({ ...props }) => {
	const { consultingSlider } = data;
	const { colors } = useColors();

	return (
		<Box {...props} py='2rem'>
			<SectionPadding pb='3rem' bg={colors?.black}>
				<Heading fontSize={responsive?.bigTitle} fontWeight='700' mb='1rem'>
					{consultingSlider?.title}
				</Heading>
				<NormalText fontSize={responsive?.text}>
					{consultingSlider?.description}
				</NormalText>
			</SectionPadding>
			<ConsultingSlider sliderData={consultingSlider?.sliderData} />
		</Box>
	);
};

export default ConsultingSection;
