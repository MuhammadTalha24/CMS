/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Center, Grid, GridProps, TextProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import {
	FlexColumn,
	FlexImage,
	Heading,
	LearnMoreBtn,
	NormalText,
} from '@/components';
import { responsive } from '@/lib/config/constants';

type LeadershipSectionProps = GridProps & {
	data: any;
	order?: boolean;
};

const LeadershipSection: FC<LeadershipSectionProps> = ({
	data,
	order,
	...props
}) => {
	return (
		<Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={12} {...props}>
			<Center order={order ? 2 : 1}>
				<FlexImage
					image={data?.icon}
					mb={{ base: 12, md: 0 }}
					h={{ base: 'full', lg: '90%', xl: '80%', '2xl': '70%' }}
				/>
			</Center>
			<FlexColumn
				order={order ? 1 : 2}
				justifyContent={{ base: 'flex-start', md: 'center' }}
			>
				<TextHeading mb={4}>{data?.heading}</TextHeading>

				<NormalText
					fontSize={{ base: '.75rem', md: '.875rem', lg: '1rem' }}
					lineHeight='1.7'
				>
					{data?.description}
				</NormalText>

				<Box mt='1rem'>
					<LearnMoreBtn href='/about/leadership'>Learn More</LearnMoreBtn>
				</Box>
			</FlexColumn>
		</Grid>
	);
};

export default LeadershipSection;

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
