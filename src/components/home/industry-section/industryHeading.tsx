import { FlexColumn, Heading, NormalText } from '@/components';

import { FlexProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { data } from '@/lib/config/data';

type IndustryHeadingProps = FlexProps & {};
const IndustryHeading: FC<IndustryHeadingProps> = ({ ...props }) => {
	const { industrySection } = data;
	return (
		<FlexColumn alignItems='center' {...props}>
			<Heading fontSize={{ base: '1rem', lg: '4rem' }} fontWeight='700'>
				{industrySection?.heading?.title}
			</Heading>
			<NormalText
				textAlign='center'
				px={{ base: '0px', lg: '24rem' }}
				fontSize='1.4rem'
			>
				{industrySection?.heading?.para}
			</NormalText>
		</FlexColumn>
	);
};

export default IndustryHeading;
