import { FlexColumn, Heading, NormalText } from '@/components';
import { responsive } from '@/lib/config/constants';
import { FlexProps, TextProps } from '@chakra-ui/react';

const PADDING = { base: '1rem', lg: '8rem', xl: '12rem', '2xl': '18rem' };

import React, { FC } from 'react';

type ServicesContentProps = FlexProps & {
	data: {
		title: string;
		description: string;
	};
};

const ServicesContent: FC<ServicesContentProps> = ({ data, ...props }) => {
	return (
		<FlexColumn py='.5rem' alignItems='center' {...props}>
			<TextHeading textAlign='center' mb={4}>
				{data?.title}
			</TextHeading>

			<NormalText
				fontSize={{ base: '.75rem', md: '.875rem', lg: '1rem' }}
				lineHeight='1.7'
				textAlign='center'
				px={PADDING}
			>
				{data?.description}
			</NormalText>
		</FlexColumn>
	);
};

export default ServicesContent;

const TextHeading = ({
	children,
	...props
}: TextProps & { children: string }) => (
	<Heading
		fontSize={responsive?.smallTitle}
		fontWeight='700'
		// lineHeight='1.2'
		{...props}
	>
		{children}
	</Heading>
);
