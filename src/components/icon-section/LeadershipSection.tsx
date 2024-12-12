/* eslint-disable @typescript-eslint/no-explicit-any */
import { Grid, GridProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { FlexColumn, FlexImage, Heading, NormalText } from '@/components';

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
			<FlexColumn order={order ? 1 : 2} justifyContent='center'>
				<TextHeading>{data?.heading}</TextHeading>
				<NormalText fontSize='1.75rem' py='1rem'>
					{data?.shortDescription}
				</NormalText>
				<NormalText lineHeight='1.7'>{data?.description}</NormalText>
			</FlexColumn>
		</Grid>
	);
};

export default LeadershipSection;

const TextHeading = ({ children }: { children: string }) => (
	<Heading
		fontSize={{ base: '1rem', lg: '1.75rem' }}
		fontWeight='700'
		lineHeight='1.2'
	>
		{children}
	</Heading>
);
