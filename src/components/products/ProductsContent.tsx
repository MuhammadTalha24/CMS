import { FlexColumn, Heading } from '@/components';

import { responsive } from '@/lib/config/constants';
import { Box, BoxProps, TextProps } from '@chakra-ui/react';

import React, { FC } from 'react';

type IndustriesContent = BoxProps & {
	data: {
		title: string;
	};
};

const IndustriesContent: FC<IndustriesContent> = ({ data, ...props }) => {
	return (
		<Box {...props}>
			<FlexColumn alignItems='center'>
				<TextHeading textAlign='center' mb={4}>
					{data?.title}
				</TextHeading>
			</FlexColumn>
		</Box>
	);
};

export default IndustriesContent;

const TextHeading = ({
	children,
	...props
}: TextProps & { children: string }) => (
	<Heading
		fontSize={responsive?.bigTitle}
		fontWeight='700'
		// lineHeight='1.2'
		{...props}
	>
		{children}
	</Heading>
);
