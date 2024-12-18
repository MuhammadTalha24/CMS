/* eslint-disable @typescript-eslint/no-explicit-any */
import { FlexColumn, Heading, NormalText } from '@/components';

import { responsive } from '@/lib/config/constants';
import { Box, BoxProps, TextProps } from '@chakra-ui/react';

import React, { FC } from 'react';

type ConsultingContentProps = BoxProps & {
	data: {
		title: string;
		image: string;
		shortDescription: string;
		textList: string[];
	};
};

const ConsultingContent: FC<ConsultingContentProps> = ({ data, ...props }) => {
	return (
		<Box
			justifyContent='center'
			alignItems='center'
			w={{ base: '100%', xl: '60%' }}
			mx='auto'
			{...props}
		>
			<TextHeading textAlign='center'>{data?.title}</TextHeading>
			<Heading
				fontWeight='700'
				fontSize={responsive?.smallTitle}
				py='1rem'
				textAlign='center'
			>
				{data?.shortDescription}
			</Heading>
			<FlexColumn alignItems='center'>
				{data?.textList?.map((item: any, i: number) => (
					<NormalText
						key={i}
						fontSize={responsive?.smallText}
						py='.5rem'
						textAlign='center'
					>
						{item}
					</NormalText>
				))}
			</FlexColumn>
		</Box>
	);
};

export default ConsultingContent;

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
