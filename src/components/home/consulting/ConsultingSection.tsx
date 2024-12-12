import {
	ConsultingSlider,
	Heading,
	NormalText,
	SectionPadding,
} from '@/components';
import { useColors } from '@/hooks';

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
				<Heading
					fontSize={{ base: '1.5rem', md: '2rem', xl: '3rem' }}
					fontWeight='700'
				>
					{consultingSlider?.title}
				</Heading>
				<NormalText fontSize={{ base: '1rem', xl: '1.5rem' }}>
					{consultingSlider?.description}
				</NormalText>
			</SectionPadding>
			<ConsultingSlider sliderData={consultingSlider?.sliderData} />
		</Box>
	);
};

export default ConsultingSection;
