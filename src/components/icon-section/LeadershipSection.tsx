/* eslint-disable @typescript-eslint/no-explicit-any */
import { Grid, GridProps, TextProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { FlexColumn, FlexImage, Heading, NormalText } from '@/components';
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
		<Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6} {...props}>
			<FlexImage
				order={order ? 2 : 1}
				image={data?.icon}
				mb={{ base: 12, md: 0 }}
			/>
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
