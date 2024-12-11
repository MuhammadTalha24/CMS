import { FlexColumn, Heading } from '@/components';

import { FlexProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { data } from '@/lib/config/data';

type IndustryHeadingProps = FlexProps & {};
const IndustryHeading: FC<IndustryHeadingProps> = ({ ...props }) => {
	const { industrySection } = data;
	return (
		<FlexColumn alignItems='left' {...props}>
			<Heading fontSize={{ base: '1rem', lg: '1.75rem' }} fontWeight='700'>
				{industrySection?.heading?.title}
			</Heading>
		</FlexColumn>
	);
};

export default IndustryHeading;
