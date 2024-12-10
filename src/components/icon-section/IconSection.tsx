/* eslint-disable @typescript-eslint/no-explicit-any */
import { Grid, GridProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { FlexColumn, FlexImage, Heading, NormalText } from '@/components';

type IconSectionProps = GridProps & {
	data: any;
	order?: boolean;
};

const IconSection: FC<IconSectionProps> = ({ data, order, ...props }) => {
	return (
		<Grid templateColumns='1fr 1fr' gap={6} {...props}>
			<FlexImage order={order ? 2 : 1} image={data?.icon} />
			<FlexColumn order={order ? 1 : 2} justifyContent='center'>
				<TextHeading>{data?.heading}</TextHeading>
				<NormalText lineHeight='1.7' mb='2rem'>
					{data?.para}
				</NormalText>
			</FlexColumn>
		</Grid>
	);
};

export default IconSection;

const TextHeading = ({ children }: { children: string }) => (
	<Heading
		fontSize={{ base: '1rem', lg: '3rem' }}
		fontWeight='700'
		lineHeight='1.2'
		mb='1.5rem'
	>
		{children}
	</Heading>
);
